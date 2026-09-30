import { useState } from "react";

const wins = [
  ["Readability", "Clear type, shorter lines, and text that works on a phone."],
  ["Professional look", "A custom visual identity in place of a stock template."],
  ["SEO", "Proper page titles, descriptions, and structure so search engines can read the site."],
  ["Organization", "Content regrouped into a few clear pages that are easy to navigate."],
];

const log = [
  ["On the About page, swap in this photo", "1m 38s", "Photo updated, preview built"],
  ["On Contact, swap in this photo", "1m 35s", "Photo updated, preview built"],
  ["Remove the Name dropdown. Keep the name beneath the logo", "1m 02s", "Design option locked in"],
  ["Remove the Concise/Full dropdown. Keep the hero concise", "2m 23s", "Hybrid text: short hero, full sections"],
  ["Update the border seams so the curls point outward", "6m 01s", "Custom decorative border redrawn"],
];

export function CaseStudy() {
  const [pos, setPos] = useState(50);

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Case study · an artist’s website</p>
          <h2>From a dated Squarespace site to a sharp custom build, in three weeks.</h2>
          <p className="lede">
            A full rebuild for an independent artist: new design, new structure, and an edit
            portal he now uses for his own updates. Drag the handle to compare.
          </p>
        </div>

        <div className="ba" style={{ ["--pos" as string]: `${pos}%` }}>
          <div className="ba-pane ba-after" aria-label="After: the new custom site">
            <div className="ba-ph after-ph" aria-hidden="true">
              <div className="ph-nav">
                <b />
                <span />
                <span />
                <span />
              </div>
              <div className="ph-hero">
                <div>
                  <i className="h1" />
                  <i className="h2" />
                  <i className="p" />
                  <i className="p s" />
                  <i className="btnph" />
                </div>
                <div className="ph-photo" />
              </div>
              <div className="ph-cards">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
          <div className="ba-pane ba-before" aria-label="Before: the old Squarespace site">
            <div className="ba-ph before-ph" aria-hidden="true">
              <div className="ph-banner" />
              <div className="ph-wall">
                <i />
                <i className="s" />
                <i />
                <i className="s" />
                <i />
                <i />
                <i className="s" />
                <i />
              </div>
              <div className="ph-mess">
                <div />
                <div />
              </div>
            </div>
          </div>
          <span className="ba-tag l">Before · Squarespace</span>
          <span className="ba-tag r">After · Underdog</span>
          <div className="ba-handle" aria-hidden="true">
            <span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M8 7 4 12l4 5M16 7l4 5-4 5M4 12h16" />
              </svg>
            </span>
          </div>
          <input
            className="ba-range"
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label="Compare before and after"
            onChange={(event) => setPos(Number(event.target.value))}
          />
        </div>

        <div className="case-grid">
          <div className="facts">
            <div className="fact-big">
              <span className="num">3</span>
              <span className="unit">weeks</span>
              <p>Kickoff to launch for the full rebuild.</p>
            </div>
            <ul className="wins">
              {wins.map(([title, detail]) => (
                <li key={title}>
                  <b>{title}</b>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="log">
            <div className="log-head">
              <span>client site · change log</span>
              <span className="live-pill">Live</span>
            </div>
            <ol>
              {log.map(([quote, time, note]) => (
                <li key={quote}>
                  <span className="q">{quote}</span>
                  <span className="t">{time}</span>
                  <span className="w">{note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <figure className="quote">
          <blockquote>
            “Scott at Underdog Software is so helpful, knowledgeable, and nice. He helped me take my website from
            scrub brush, funky to a tight, all-pro look and I can’t recommend him enough.”
          </blockquote>
          <figcaption>Jon Lawton · independent artist</figcaption>
        </figure>
      </div>
    </section>
  );
}
