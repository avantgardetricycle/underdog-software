import "../../styles/v2.css";
import { CaseStudy } from "./CaseStudy";
import { Contact } from "./Contact";
import { DesignSession } from "./DesignSession";
import { Nav } from "./Nav";
import { PortalDemo } from "./PortalDemo";
import { Pricing } from "./Pricing";
import { Software } from "./Software";

const steps = [
  {
    num: "01",
    title: "Talk it through",
    body: "A short call about your work, your audience, and the sites you like. We gather your photos, copy, and any branding you already have.",
    tag: "~1 hour",
  },
  {
    num: "02",
    title: "Design it live",
    body: "We build a working draft with options built in: layouts, colors, text length, small details. You flip between them on the real site and pick what feels right.",
    tag: "Choices, not guesses",
  },
  {
    num: "03",
    title: "Lock it in & launch",
    body: "Once you've chosen, the options come out and the final site goes live on fast, reliable Vercel hosting at your own domain.",
    tag: "Your domain, fast hosting",
  },
  {
    num: "04",
    title: "Hand it over",
    body: "You get your own AI-powered edit portal. Ask for a change in plain words, review a preview, approve it. We're a message away for bigger work.",
    tag: "Changes in minutes",
  },
];

export function Site() {
  return (
    <div className="v2">
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow rise">Websites for small businesses, orgs & artists</p>
              <h1 className="rise d1" style={{ marginTop: 18 }}>
                A site designed in collaboration with you. Tools to make changes{" "}
                <em>in minutes.</em>
              </h1>
              <p className="lede rise d2">
                We shape your website together, using state-of-the-art AI tools to design and
                build simultaneously. After launch you get a simple AI-powered portal: describe a
                change in plain English, check the preview, and publish to your site in minutes.
                No call to a developer, no outdated page builder.
              </p>
              <div className="hero-ctas rise d3">
                <a className="btn btn-primary" href="#contact">
                  Start a project <span className="arr">→</span>
                </a>
                <a className="btn btn-ghost" href="#session">
                  See how it works
                </a>
              </div>
              <div className="hero-meta rise d4">
                <span>Custom design</span>
                <span>Hosted on Vercel</span>
                <span>Edit it yourself</span>
              </div>
            </div>
            <PortalDemo />
          </div>
        </section>

        <section id="process" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">The process</p>
              <h2>Four steps from first call to a site you run yourself.</h2>
              <p className="lede">
                At Underdog, we use a site-building approach that caters to small businesses and
                orgs. We design and build on a live site, circumventing the mockup-and-wait cycle:
                you’re seeing your actual site from the first week.
              </p>
            </div>
            <div className="process">
              {steps.map((step) => (
                <div className="p-step" key={step.num}>
                  <span className="p-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <p className="tag">{step.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DesignSession />
        <CaseStudy />
        <Pricing />
        <Software />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Underdog Software</span>
          <span>Websites, web apps & AI integrations for small businesses</span>
        </div>
      </footer>
    </div>
  );
}
