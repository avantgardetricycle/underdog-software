#!/usr/bin/env python3
"""
lead_finder.py

Finds local businesses via the Google Places API, checks their websites
for weak signals (slow load, poor mobile usability, missing/placeholder
sites), scores them, and writes a prioritized CSV of outreach candidates.

SETUP
-----
1. pip install requests
2. Get two API keys from Google Cloud Console (same project is fine):
     - Places API (New)            -> places.googleapis.com
     - PageSpeed Insights API      -> pagespeedonline.googleapis.com
   Enable both APIs for your project, then create an API key.
3. Set env vars (recommended) or edit the CONFIG block below:
     export GOOGLE_PLACES_API_KEY="..."
     export GOOGLE_PAGESPEED_API_KEY="..."   # can be the same key
4. Edit SEARCH_QUERIES and LOCATION below to match your target area/niche.

USAGE
-----
python lead_finder.py

Output: leads_<timestamp>.csv, sorted worst-website-first (best candidates
at the top).

NOTES / LIMITS
---------------
- Google Places "Text Search (New)" returns up to 20 results per call;
  this script paginates up to 60 per query (Google's practical cap for
  Text Search without heavier Nearby Search pagination logic).
- PageSpeed Insights has a free-tier rate limit (roughly 25,000 requests/day,
  but bursty use can get throttled) -- this script sleeps briefly between
  calls. If you see 429s, increase SLEEP_BETWEEN_CALLS.
- Respect each API's Terms of Service, especially around storing/using
  place data for outreach. Review Google's ToS for your use case.
- This script only reads publicly exposed performance data (PageSpeed
  Insights is Google's own public tool) -- it does not scrape or crawl
  target websites directly.
"""

import csv
import os
import sys
import time
import datetime
import requests

# ---------------------------------------------------------------------------
# CONFIG - edit this block for each run
# ---------------------------------------------------------------------------

PLACES_API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "")
PAGESPEED_API_KEY = os.environ.get("GOOGLE_PAGESPEED_API_KEY", "")

# One or more Places Text Search queries. Keep these specific -- narrower
# queries give you a more coherent niche to pitch.
SEARCH_QUERIES = [
    "dance studios in Oakland, CA",
    "yoga studios in Berkeley, CA",
    "independent boutiques in San Francisco, CA",
]

MAX_RESULTS_PER_QUERY = 60       # Google Text Search pages in blocks of 20
SLEEP_BETWEEN_CALLS = 1.0        # seconds, be polite to PageSpeed API
OUTPUT_DIR = "."                 # where the CSV gets written

# ---------------------------------------------------------------------------
# Google Places (New) - Text Search
# ---------------------------------------------------------------------------

PLACES_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText"


def search_places(query, api_key, max_results=60):
    """Return a list of place dicts for a single text query, paginating."""
    results = []
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": api_key,
        # Field mask keeps responses small and billing-efficient.
        "X-Goog-FieldMask": (
            "places.id,places.displayName,places.formattedAddress,"
            "places.websiteUri,places.nationalPhoneNumber,"
            "places.rating,places.userRatingCount,places.types"
        ),
    }
    body = {"textQuery": query, "pageSize": 20}
    page_token = None

    while len(results) < max_results:
        if page_token:
            body["pageToken"] = page_token
        resp = requests.post(PLACES_SEARCH_URL, headers=headers, json=body, timeout=30)
        if resp.status_code != 200:
            print(f"  [!] Places API error ({resp.status_code}) for query '{query}': {resp.text[:300]}")
            break
        data = resp.json()
        places = data.get("places", [])
        results.extend(places)
        page_token = data.get("nextPageToken")
        if not page_token or not places:
            break
        time.sleep(2)  # Google requires a short delay before using a page token

    return results[:max_results]


# ---------------------------------------------------------------------------
# PageSpeed Insights
# ---------------------------------------------------------------------------

PAGESPEED_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"


def check_pagespeed(url, api_key, strategy="mobile"):
    """
    Returns a dict with performance score (0-100), a few diagnostic flags,
    or None if the check failed (site down, invalid URL, API error, etc).
    A failed check is itself a signal -- treat it as a strong lead.
    """
    if not url:
        return None

    params = {
        "url": url,
        "strategy": strategy,
        "category": ["PERFORMANCE", "SEO"],
    }
    if api_key:
        params["key"] = api_key

    try:
        resp = requests.get(PAGESPEED_URL, params=params, timeout=45)
    except requests.RequestException as e:
        print(f"  [!] Network error checking {url}: {e}")
        return {"error": str(e)}

    if resp.status_code != 200:
        return {"error": f"HTTP {resp.status_code}"}

    data = resp.json()
    try:
        lighthouse = data["lighthouseResult"]
        perf_score = lighthouse["categories"]["performance"]["score"]
        seo_score = lighthouse["categories"].get("seo", {}).get("score")
        audits = lighthouse.get("audits", {})
        is_mobile_friendly = audits.get("viewport", {}).get("score") == 1
        final_url = lighthouse.get("finalUrl", url)
        return {
            "performance_score": round(perf_score * 100) if perf_score is not None else None,
            "seo_score": round(seo_score * 100) if seo_score is not None else None,
            "mobile_friendly": is_mobile_friendly,
            "final_url": final_url,
        }
    except (KeyError, TypeError):
        return {"error": "Unexpected response shape"}


# ---------------------------------------------------------------------------
# Scoring
# ---------------------------------------------------------------------------

def score_lead(place, pagespeed_result):
    """
    Higher score = better outreach candidate (worse existing website).
    Tune the weights freely -- this is a starting point, not gospel.
    """
    score = 0
    notes = []

    website = place.get("websiteUri")
    if not website:
        score += 5
        notes.append("No website listed")
        return score, notes  # nothing else to check

    if pagespeed_result is None:
        return score, notes

    if "error" in pagespeed_result:
        score += 3
        notes.append(f"Site unreachable/errored ({pagespeed_result['error']})")
        return score, notes

    perf = pagespeed_result.get("performance_score")
    if perf is not None:
        if perf < 40:
            score += 3
            notes.append(f"Very poor performance score ({perf}/100)")
        elif perf < 65:
            score += 2
            notes.append(f"Weak performance score ({perf}/100)")
        elif perf < 80:
            score += 1
            notes.append(f"Mediocre performance score ({perf}/100)")

    if pagespeed_result.get("mobile_friendly") is False:
        score += 2
        notes.append("Fails basic mobile viewport check")

    seo = pagespeed_result.get("seo_score")
    if seo is not None and seo < 70:
        score += 1
        notes.append(f"Low SEO score ({seo}/100)")

    return score, notes


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    if not PLACES_API_KEY:
        print("ERROR: set GOOGLE_PLACES_API_KEY (env var) or edit the script.")
        sys.exit(1)
    if not PAGESPEED_API_KEY:
        print("WARNING: no PAGESPEED_API_KEY set -- PageSpeed calls will use a "
              "low unauthenticated quota and may get rate-limited quickly.\n")

    all_rows = []
    seen_place_ids = set()

    for query in SEARCH_QUERIES:
        print(f"Searching: {query}")
        places = search_places(query, PLACES_API_KEY, MAX_RESULTS_PER_QUERY)
        print(f"  Found {len(places)} places")

        for place in places:
            place_id = place.get("id")
            if place_id in seen_place_ids:
                continue
            seen_place_ids.add(place_id)

            name = place.get("displayName", {}).get("text", "Unknown")
            website = place.get("websiteUri", "")
            print(f"  Checking: {name} -> {website or '(no website)'}")

            pagespeed_result = None
            if website:
                pagespeed_result = check_pagespeed(website, PAGESPEED_API_KEY)
                time.sleep(SLEEP_BETWEEN_CALLS)

            score, notes = score_lead(place, pagespeed_result)

            all_rows.append({
                "name": name,
                "address": place.get("formattedAddress", ""),
                "phone": place.get("nationalPhoneNumber", ""),
                "website": website,
                "google_rating": place.get("rating", ""),
                "review_count": place.get("userRatingCount", ""),
                "types": ", ".join(place.get("types", [])[:3]),
                "performance_score": (pagespeed_result or {}).get("performance_score", ""),
                "seo_score": (pagespeed_result or {}).get("seo_score", ""),
                "mobile_friendly": (pagespeed_result or {}).get("mobile_friendly", ""),
                "lead_score": score,
                "notes": "; ".join(notes),
                "source_query": query,
            })

    all_rows.sort(key=lambda r: r["lead_score"], reverse=True)

    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    out_path = os.path.join(OUTPUT_DIR, f"leads_{timestamp}.csv")

    fieldnames = [
        "lead_score", "name", "website", "notes", "performance_score",
        "seo_score", "mobile_friendly", "google_rating", "review_count",
        "phone", "address", "types", "source_query",
    ]
    with open(out_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_rows)

    print(f"\nDone. {len(all_rows)} unique leads written to {out_path}")
    print("Sorted best-candidate-first (highest lead_score = weakest existing site).")


if __name__ == "__main__":
    main()
