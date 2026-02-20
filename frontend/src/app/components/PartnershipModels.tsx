import { Check } from "lucide-react";

export function PartnershipModels() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8" id="work-together">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl text-slate-900 lg:text-4xl">Ways to Work Together</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 font-sans">
            Whether you need custom software, want to co-create a product, or just 
            need a one-off service—I've got you covered.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Traditional Build Card */}
          <div className="flex flex-col rounded-2xl border border-blue-200 bg-blue-50/30 p-8 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-500" />
            
            <div className="mb-6 h-12 w-12 text-4xl flex items-center justify-center bg-blue-50 rounded-xl">
              💼
            </div>
            
            <div className="mb-6">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider font-sans">
                Traditional Build
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-display font-bold text-slate-900">
              Custom Software for Your Business
            </h3>
            
            <p className="mb-8 text-slate-600 leading-relaxed font-sans">
              You need a specific tool to solve an internal problem. You pay upfront, 
              you own it 100%. Perfect for booking systems, inventory trackers, 
              customer portals, and internal tools.
            </p>
            
            <div className="mt-auto space-y-4 mb-8">
              {[
                "Fixed project fee (starting at $5K)",
                "You own 100% of the code and IP",
                "Built specifically for your business needs",
                "30 days post-launch support included",
                "Typical timeline: 4-8 weeks"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 font-sans">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl bg-white p-4 border border-blue-100 italic text-slate-600 text-sm font-sans">
              <span className="block font-bold text-slate-900 not-italic text-xs uppercase tracking-wide mb-1">Perfect For:</span>
              "I need a booking system for my salon that sends automated reminders and accepts online payments"
            </div>
          </div>

          {/* Revenue Partnership Card */}
          <div className="flex flex-col rounded-2xl border border-teal-200 bg-teal-50/30 p-8 shadow-sm relative overflow-hidden group hover:border-teal-300 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-500" />
            
            <div className="mb-6 h-12 w-12 text-4xl flex items-center justify-center bg-teal-100 rounded-xl">
              🤝
            </div>
            
            <div className="mb-6">
              <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider font-sans">
                Revenue Partnership
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-display font-bold text-slate-900">
              Co-Build a Product We Both Sell
            </h3>
            
            <p className="mb-8 text-slate-600 leading-relaxed font-sans">
              You've spotted a gap in your industry. Let's build a product together 
              and sell it to everyone else in your space. You bring domain expertise, 
              I handle all the technical development. We split the revenue.
            </p>
            
            <div className="mt-auto space-y-4 mb-8">
              {[
                "Zero upfront cost to you",
                "Revenue share: typically 50/50 or 60/40",
                "We both own equity in the product",
                "List on Shopify/Squarespace app stores",
                "Recurring revenue from subscriptions",
                "I handle all technical work and maintenance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 font-sans">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl bg-white p-4 border border-teal-100 italic text-slate-600 text-sm font-sans">
              <span className="block font-bold text-slate-900 not-italic text-xs uppercase tracking-wide mb-1 text-teal-800">Perfect For:</span>
              "I run a fitness studio and wish there was an app that does X for the entire fitness industry. Let's build it together and sell it to every gym."
            </div>
          </div>

          {/* One-Time Services Card */}
          <div className="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/30 p-8 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500" />
            
            <div className="mb-6 h-12 w-12 text-4xl flex items-center justify-center bg-amber-100 rounded-xl">
              🔧
            </div>
            
            <div className="mb-6">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider font-sans">
                One-Time Services
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-display font-bold text-slate-900">
              One-Off Tech Support and Services
            </h3>
            
            <p className="mb-8 text-slate-600 leading-relaxed font-sans">
              Professional one-off services tailored for small businesses and non-profits. 
              Modernize your website, fix bugs, improve accessibility, or get expert guidance—no long-term commitment.
            </p>
            
            <div className="mt-auto space-y-4 mb-8">
              {[
                "Hourly or flat fee pricing based on complexity and scope",
                "Maintenance, updates & bug fixes",
                "Third-party integrations (e.g. Calendly, Momence, Stripe)",
                "ADA compliance evaluation & remediation",
                "General tech support & guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 font-sans">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl bg-white p-4 border border-amber-100 italic text-slate-600 text-sm font-sans">
              <span className="block font-bold text-slate-900 not-italic text-xs uppercase tracking-wide mb-1 text-amber-800">Perfect For:</span>
              "Our website has a Calendly integration, but it's buggy." or "We need to make our website ADA compliant."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
