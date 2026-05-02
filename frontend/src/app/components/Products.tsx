import { ExternalLink } from "lucide-react";

const publicUrl = process.env.PUBLIC_URL ?? "";

type Product = {
  name: string;
  category: string;
  description: string;
  url?: string;
  status: string;
  statusColor: string;
  /** Path under public/, e.g. "/revsplit_logo.png" */
  logoSrc: string;
  quote?: { text: string; attribution: string };
  /** Optional screenshot / preview under public/ */
  previewSrc?: string;
};

export function Products() {
  const products: Product[] = [
    {
      name: "RevSplit",
      category: "Shopify App",
      description:
        "A Shopify app that enables merchants to automatically split revenue between multiple collaborators, perfect for partnerships and affiliate programs.",
      url: "https://app.revsplit.app",
      status: "Coming Soon",
      statusColor: "bg-emerald-100 text-emerald-700",
      logoSrc: `${publicUrl}/revsplit_logo.png`,
    },
    {
      name: "BetterBlog",
      category: "Squarespace Plugin",
      description:
        "A Squarespace plugin that allows users to customize their Squarespace-hosted legacy blog. Built in collaboration with WeGo! Oakland.",
      url: "https://www.betterblog.xyz",
      status: "Coming Soon",
      statusColor: "bg-emerald-100 text-emerald-700",
      logoSrc: `${publicUrl}/better_blog_logo.png`,
    },
    {
      name: "Buoy",
      category: "Mobile App",
      description:
        "An AI coach specially designed to support addiction recovery.",
      status: "In Development",
      statusColor: "bg-blue-100 text-blue-700",
      logoSrc: `${publicUrl}/buoy_logo.png`,
    },
    {
      name: "Dana Lawton Dances",
      category: "Website",
      description:
        "Online home for the Bay Area's premiere multigenerational modern dance company.",
      url: "https://danalawtondances.org",
      status: "Live",
      statusColor: "bg-violet-100 text-violet-800",
      logoSrc: `${publicUrl}/DLD_logo.jpg`,
      quote: {
        text:
          "Scott Duane's recent redesign of the Dana Lawton Dance webpage has given the company a fresh, elegant, and intuitive digital presence that beautifully reflects our artistic vision. His thoughtful layout, clean aesthetics, and user-friendly functionality have made the site not only visually striking but truly inviting to explore.",
        attribution: "Dana Lawton",
      },
    },
    {
      name: "Prague Clock",
      category: "Browser Simulator & macOS Screensaver",
      description:
        "A free browser-based simulator and macOS screensaver that captures the magic of the most sophisticated mechanical clock on Earth.",
      url: "https://www.pragueclock.xyz",
      status: "In Development",
      statusColor: "bg-blue-100 text-blue-700",
      logoSrc: `${publicUrl}/prague_clock_logo.png`,
      previewSrc: `${publicUrl}/prague_clock_preview.png`,
    },
    {
      name: "Garden Clock",
      category: "macOS Screensaver",
      description:
        "A macOS screensaver that turns your idle screen into a living garden with a working analog clock.",
      url: "https://www.gardenclock.xyz",
      status: "Live",
      statusColor: "bg-violet-100 text-violet-800",
      logoSrc: `${publicUrl}/garden_clock_logo.png`,
      previewSrc: `${publicUrl}/garden_clock_preview_image.png`,
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8" id="products">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Underdog Products & Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Check out a few examples of products we've already built for organizations just like yours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-14 min-w-0 max-w-[140px] flex-shrink-0 items-center justify-start rounded-xl bg-slate-50 p-2 ring-1 ring-slate-100">
                  <img
                    src={product.logoSrc}
                    alt=""
                    className="max-h-12 w-auto max-w-full object-contain object-left"
                  />
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-sm font-medium ${product.statusColor}`}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="mb-2 text-2xl text-slate-900">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    {product.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  product.name
                )}
              </h3>
              <p className="mb-4 text-sm font-medium text-slate-500">{product.category}</p>
              <p className="text-slate-600">{product.description}</p>
              {product.previewSrc && (
                <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
                  <img
                    src={product.previewSrc}
                    alt={`${product.name} preview`}
                    className="h-auto max-h-56 w-full object-cover object-center sm:max-h-64"
                  />
                </div>
              )}
              {product.quote && (
                <blockquote className="mt-5 border-l-4 border-teal-200 pl-4">
                  <p className="text-sm italic leading-relaxed text-slate-600">
                    &ldquo;{product.quote.text}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-medium not-italic text-slate-500">
                    — {product.quote.attribution}
                  </footer>
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
