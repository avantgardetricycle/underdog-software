import { Globe, ShieldCheck, Wrench, LifeBuoy } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Rebuilds",
      description: "Modernize your online presence with a fresh, responsive website built on the latest technology.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Updates",
      description: "Help with existing websites, bug fixes, content updates, and performance optimization.",
    },
    {
      icon: ShieldCheck,
      title: "ADA Compliance",
      description: "Evaluation and remediation to ensure your digital products are accessible to everyone.",
    },
    {
      icon: LifeBuoy,
      title: "General Tech Support",
      description: "Expert guidance on technical decisions, software selection, and problem-solving.",
    }
  ];

  return (
    <section className="px-6 py-20 lg:px-8 bg-white" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 mb-6">
            <span className="font-sans text-xs font-bold uppercase tracking-wide text-teal-700">
              For Small Businesses & Non-Profits
            </span>
          </div>
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Here to Help
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            While we love building products, we're also dedicated to supporting our community. 
            We offer professional one-off services tailored for small organizations. Please inquire for pricing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="group relative overflow-hidden rounded-2xl bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white border border-slate-100"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-blue-600 group-hover:ring-blue-600 transition-colors">
                  <Icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
