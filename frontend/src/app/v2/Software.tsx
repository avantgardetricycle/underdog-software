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
    kind: "Squarespace plugin",
    name: "BetterBlog",
    description:
      "A drop-in enhancement for Squarespace blogs, built with WeGo! Oakland. It installs through code injection and upgrades how posts are browsed and read.",
    href: "https://www.betterblog.xyz",
    linkLabel: "betterblog.xyz",
    logo: `${publicUrl}/better_blog_logo.png`,
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
            Need more than a website? We also build apps, plugins, and a range of AI-powered
            products.
          </p>
          <a className="talk-link" href="#contact">
            Talk about a build →
          </a>
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
