import { ArrowRight, Sparkles } from "lucide-react";
const logo = process.env.PUBLIC_URL + "/logo_without_text.png";
const heroImage = process.env.PUBLIC_URL + "/header_image.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Underdog Software Logo"
                className="relative h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Underdog Software
              </h1>
              <p className="font-sans text-[10px] font-bold text-teal-600 tracking-widest mt-1 uppercase">
                Technical expertise for the little guy
              </p>
            </div>
          </div>
          
          <div className="hidden items-center gap-1 md:flex">
            {["About", "Products", "Experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-teal-50 hover:text-teal-700"
              >
                {item}
              </button>
            ))}
            <button
              onClick={scrollToContact}
              className="ml-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-teal-50/20 px-6 py-12 lg:px-8 lg:py-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left Column: Text */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 shadow-sm">
                <Sparkles className="h-4 w-4 text-teal-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-teal-800">
                  Software Development Studio
                </span>
              </div>
              
              <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
                Building Software<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  That Works for You
                </span>
              </h2>
              
              <p className="mb-8 max-w-lg text-lg text-slate-600 lg:text-xl leading-relaxed">
                Creating practical, revenue-generating applications with a focus on
                payments, e-commerce, and productivity tools.
              </p>
              
              <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-teal-600 hover:gap-4 hover:shadow-xl hover:shadow-teal-100"
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => scrollToSection("products")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-900"
                >
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                 {/* Image blob/glow behind */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-[3rem] rotate-3 scale-105 blur-sm -z-10" />
                 
                 <img
                  src={heroImage}
                  alt="Team working with superhero chihuahua"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
