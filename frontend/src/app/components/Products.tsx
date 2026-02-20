import { ExternalLink, ShoppingBag, Smartphone, Rocket } from "lucide-react";

export function Products() {
  const products = [
    {
      icon: ShoppingBag,
      name: "RevSplit",
      category: "Shopify App",
      description:
        "A Shopify app that enables merchants to automatically split revenue between multiple collaborators, perfect for partnerships and affiliate programs.",
      url: "https://app.revsplit.app",
      status: "Coming Soon",
      statusColor: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Smartphone,
      name: "Eject Now",
      category: "Mobile App",
      description:
        "A phone addiction management app that helps users stay focused by hiding distracting apps on a customizable schedule.",
      status: "In Development",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: Rocket,
      name: "Future Shopify Apps",
      category: "E-commerce Suite",
      description:
        "Expanding the payments-adjacent Shopify app ecosystem with new tools to help merchants manage their businesses more effectively.",
      status: "Planned",
      statusColor: "bg-teal-100 text-teal-700",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8" id="products">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Underdog Products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Check out a few examples of products we've already built for organizations just like yours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${product.statusColor}`}
                  >
                    {product.status}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl text-slate-900">
                  {product.url ? (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                      {product.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    product.name
                  )}
                </h3>
                <p className="mb-4 text-sm font-medium text-slate-500">{product.category}</p>
                <p className="text-slate-600">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
