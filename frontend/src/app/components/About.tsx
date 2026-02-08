import { Code2, Sparkles, Target } from "lucide-react";

export function About() {
  return (
    <section className="px-6 py-20 lg:px-8" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Why Underdog Software?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We're a small team that thinks big, focused on building sustainable products and helping small organizations thrive with better technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Code2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl text-slate-900">
              Deep Technical Expertise
            </h3>
            <p className="text-slate-600">
              12 years of software development experience, with 6 years
              specializing in payments and financial systems.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
              <Sparkles className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="mb-3 text-xl text-slate-900">
              Product-Focused Development
            </h3>
            <p className="text-slate-600">
              Building practical solutions that solve real problems, from
              e-commerce tools to productivity apps.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
              <Target className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mb-3 text-xl text-slate-900">
              Sustainable Growth
            </h3>
            <p className="text-slate-600">
              Whether it's a recurring revenue product or a one-off project, we build software designed for long-term value and stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
