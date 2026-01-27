import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8" id="contact">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">
              Let's Work Together
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Interested in collaborating on a project or learning more about
              our products? Get in touch.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-slate-50 p-6 transition-colors hover:bg-blue-50/50">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-600" />
                <span className="font-medium text-slate-900">Email</span>
              </div>
              <a
                href="mailto:hello@underdogsoftware.com"
                className="text-lg font-medium text-blue-600 hover:text-blue-700"
              >
                hello@underdogsoftware.com
              </a>
            </div>

            <div className="mt-4 text-center">
              <p className="text-slate-600">
                Available for small-to-medium sized projects with recurring
                revenue potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
