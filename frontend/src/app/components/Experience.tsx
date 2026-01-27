import { Briefcase, CreditCard, Layers } from "lucide-react";

export function Experience() {
  return (
    <section className="px-6 py-20 lg:px-8" id="experience">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
            Experience & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A proven track record of building reliable, scalable software
            products.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                <Briefcase className="h-8 w-8 text-slate-700" />
              </div>
              <div>
                <h3 className="text-2xl text-slate-900">12 Years</h3>
                <p className="text-slate-600">Software Development</p>
              </div>
            </div>
            <p className="text-slate-600">
              Over a decade of experience building products across a broad range
              of industries and technologies, from early-stage startups to
              enterprise applications.
            </p>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl text-slate-900">6 Years</h3>
                <p className="text-slate-600">Payments & Fintech</p>
              </div>
            </div>
            <p className="text-slate-600">
              Deep expertise in payment systems, financial transactions, and
              money movement. Specialized knowledge in building secure,
              compliant payment features.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-teal-50/50 p-8 lg:p-12">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Layers className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="mb-4 text-2xl text-slate-900">
            Versatile Technical Skills
          </h3>
          <p className="mb-6 max-w-3xl text-lg text-slate-600">
            Experienced across the full stack with expertise in modern web
            technologies, mobile development, cloud infrastructure, and system
            architecture. Comfortable taking projects from concept to deployment
            and beyond.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Payment APIs",
              "E-commerce",
              "Mobile Development",
              "Cloud Infrastructure",
              "Database Design",
              "API Development",
              "System Architecture",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-white border border-blue-100 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
