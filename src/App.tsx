import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrolled(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 z-[60] transition-[width] duration-150"
        style={{ width: `${scrolled}%` }}
      />
      <CursorGlow />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-white group-hover:text-amber-400 transition">EDGE</div>
              <div className="text-[10px] text-amber-400/80 uppercase tracking-widest">Car Hire & Rentals</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white/70 hover:text-amber-400 transition">About</a>
            <a href="#services" className="text-white/70 hover:text-amber-400 transition">Services</a>
            <a href="#fleet" className="text-white/70 hover:text-amber-400 transition">Fleet</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition">
              Book Now
            </a>
          </div>

          <a
            href="https://wa.me/2347032225150"
            target="_blank"
            rel="noreferrer"
            className="md:hidden w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 grid place-items-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </nav>

      <div id="top" />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
