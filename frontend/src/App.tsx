import { Hero } from "./app/components/Hero";
import { About } from "./app/components/About";
import { Products } from "./app/components/Products";
import { Experience } from "./app/components/Experience";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";
import { Services } from "./app/components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Products />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}