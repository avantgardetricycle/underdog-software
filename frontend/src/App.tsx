import { Hero } from "./app/components/Hero";
import { About } from "./app/components/About";
import { Products } from "./app/components/Products";
import { Experience } from "./app/components/Experience";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";
import { PartnershipModels } from "./app/components/PartnershipModels";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <PartnershipModels />
      <Products />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}