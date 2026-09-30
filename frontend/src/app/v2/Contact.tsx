import { useState } from "react";

const email = "hello@underdogsoftware.xyz";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <p className="eyebrow">Start a project</p>
          <h2>Let’s build a site you’ll actually keep up to date.</h2>
          <p className="lede">
            Tell us a little about your business, org, or practice and what you want the site to
            do. We’ll reply within a couple of days with next steps.
          </p>
        </div>
        <div className="mail-card">
          <span className="ctl-label">Email</span>
          <div className="mail-row">
            <a className="mail" href={`mailto:${email}`}>
              {email}
            </a>
            <button className="copy" type="button" onClick={copyEmail}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <ul>
            <li>What you do and who it’s for</li>
            <li>A site or two you like the feel of</li>
            <li>Your timeline</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
