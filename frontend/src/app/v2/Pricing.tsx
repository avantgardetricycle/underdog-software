import { useState } from "react";

const buildIncludes = [
  "Kickoff call and content gathering",
  "Live design sessions with options to choose from",
  "Custom design, not a template",
  "Works on phones, tablets, and desktops",
  "SEO basics: page titles, descriptions, clean structure",
  "Launch on Vercel hosting at your own domain",
];

const portalIncludes = [
  "Request changes in plain English",
  "Preview every change before it goes live",
  "Most updates published in minutes",
];

function Check() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M2.5 6.2 5 8.6l4.6-5" />
    </svg>
  );
}

const money = (amount: number) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function Pricing() {
  const [portalOn, setPortalOn] = useState(true);

  return (
    <section id="pricing" className="band">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Pricing</p>
          <h2>One price for the build. A small yearly fee if you want the portal.</h2>
          <p className="lede">
            The starting price covers a typical small-business, org, or artist site. If yours
            needs more pages or custom features, we’ll give you a fixed quote before any work
            starts.
          </p>
        </div>

        <div className="price-grid">
          <article className="plan plan-main">
            <div className="plan-top">
              <span className="ctl-label">Website build</span>
              <p className="price">
                <span className="from">from</span>
                <span className="amt">$1,800</span>
                <span className="per">one-time</span>
              </p>
              <p className="plan-sub">
                A custom site, designed with you and launched at your domain in about three weeks.
              </p>
            </div>
            <ul className="incl">
              {buildIncludes.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#contact">
              Start a project <span className="arr">→</span>
            </a>
          </article>

          <article className="plan plan-addon">
            <div className="plan-top">
              <div className="addon-head">
                <span className="ctl-label">AI edit portal</span>
                <span className="opt">Optional add-on</span>
              </div>
              <p className="price">
                <span className="amt">$50</span>
                <span className="per">per year</span>
              </p>
              <p className="plan-sub">
                Make your own updates after launch, without waiting on a developer.
              </p>
            </div>
            <ul className="incl">
              {portalIncludes.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <div className="calc" aria-live="polite">
              <label className="toggle" htmlFor="portal-on">
                <input
                  type="checkbox"
                  id="portal-on"
                  checked={portalOn}
                  onChange={(event) => setPortalOn(event.target.checked)}
                />
                <span className="track">
                  <span className="knob" />
                </span>
                Include the portal
              </label>
              <dl>
                <div>
                  <dt>First year</dt>
                  <dd>{money(1800 + (portalOn ? 50 : 0))}</dd>
                </div>
                <div>
                  <dt>Each year after</dt>
                  <dd>{portalOn ? money(50) : "$0"}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
        <p className="price-note">
          Starting price for a typical small-business or artist site. Domain registration is paid
          to your registrar. Bigger changes and new features beyond the portal are quoted
          separately.
        </p>
      </div>
    </section>
  );
}
