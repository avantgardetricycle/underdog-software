const publicUrl = process.env.PUBLIC_URL ?? "";

type Product = {
  kind: string;
  name: string;
  description: string;
  href?: string;
  linkLabel?: string;
  logo?: string;
};

const products: Product[] = [
  {
    kind: "AI app",
    name: "Buoy",
    description:
      "An AI recovery coach built for the moments between meetings, therapy, and check-ins, with guardrails designed for recovery conversations.",
    href: "https://getbuoy.app",
    linkLabel: "getbuoy.app",
    logo: `${publicUrl}/buoy_logo.png`,
  },
  {
    kind: "Shopify app",
    name: "RevSplit",
    description:
      "Automates revenue splits with collaborators at the product or variant level, with scheduled Stripe payouts and a dashboard for each collaborator.",
    href: "https://app.revsplit.app",
    linkLabel: "app.revsplit.app",
    logo: `${publicUrl}/revsplit_logo.png`,
  },
  {
    kind: "Web app",
    name: "NestTrack",
    description:
      "A house-hunting tracker that uses AI to pull listing details into one place, with search, filters, and notes from every tour.",
    href: "https://nesttrack.xyz",
    linkLabel: "nesttrack.xyz",
    logo: `${publicUrl}/nesttrack_logo.png`,
  },
  {
    kind: "Squarespace plugin",
    name: "BetterBlog",
    description:
      "A drop-in enhancement for Squarespace blogs, built with WeGo! Oakland. It installs through code injection and upgrades how posts are browsed and read.",
    href: "https://www.betterblog.xyz",
    linkLabel: "betterblog.xyz",
    logo: `${publicUrl}/better_blog_logo.png`,
  },
  {
    kind: "Screensaver",
    name: "Prague Astronomical Clock",
    description:
      "A faithful recreation of the medieval clock in Prague’s Old Town, with every hand and dial tracking the real date and time.",
    href: "https://www.pragueclock.xyz",
    linkLabel: "pragueclock.xyz",
    logo: `${publicUrl}/prague_clock_logo.png`,
  },
  {
    kind: "Screensaver",
    name: "Garden Clock",
    description:
      "A macOS screensaver that turns an idle screen into a living garden, with a working analog clock.",
    href: "https://www.gardenclock.xyz",
    linkLabel: "gardenclock.xyz",
    logo: `${publicUrl}/garden_clock_logo.png`,
  },
  {
    kind: "Website",
    name: "Dana Lawton Dances",
    description:
      "Online home for a Bay Area multigenerational modern dance company. A custom site shaped around the company’s work.",
    href: "https://danalawtondances.org",
    linkLabel: "danalawtondances.org",
    logo: `${publicUrl}/DLD_logo.jpg`,
  },
  {
    kind: "Custom builds",
    name: "Web apps & AI integrations",
    description:
      "Internal tools, customer portals, and AI features wired into the systems you already use. Scoped small, shipped quickly.",
    href: "#contact",
    linkLabel: "Talk about a build",
  },
];

export function Software() {
  return (
    <section id="software">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Beyond websites</p>
          <h2>Need something custom? We build software too.</h2>
          <p className="lede">
            Alongside websites, we build apps, plugins, and AI products. If your business or org
            needs more than a site, that work is on the table.
          </p>
        </div>
        <div className="soft-grid">
          {products.map((product) => {
            const external = product.href?.startsWith("http");
            return (
              <article className="soft" key={product.name}>
                <div className="soft-top">
                  {product.logo ? (
                    <img className="soft-logo" src={product.logo} alt="" />
                  ) : (
                    <span />
                  )}
                  <span className="kind">{product.kind}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {product.href && product.linkLabel && (
                  <a
                    href={product.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {product.linkLabel} →
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
