import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Catalog from "./components/Catalog";
import Quote from "./components/Quote";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor Scroll Parameters
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      const sections = ["home", "about", "why-us", "collection", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sect of sections) {
        const element = document.getElementById(sect);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen font-sans bg-cream-50 text-green-950">
      
      {/* 1. LOADING SCREEN OVERLAY */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Scroll Progress line at top */}
          <div className="fixed top-0 left-0 right-0 h-[3px] bg-green-100 z-50">
            <div
              id="scroll-progress-indicator"
              className="h-full bg-green-gradient transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* 2. STICKY NAVBAR */}
          <Navbar activeSection={activeSection} />

          {/* CORE MAIN LANDING CONTEXT */}
          <main className="relative">

            {/* 3. HERO BANNER */}
            <Hero 
              onExploreClick={() => handleScrollToSection("#collection")} 
              onContactClick={() => handleScrollToSection("#contact")} 
            />

            {/* 4. ABOUT US SECTION */}
            <About />

            {/* 5. WHY US SECTION */}
            <WhyUs />

            {/* 6. INSTANT CATALOG */}
            <Catalog />

            {/* 7. QUOTE SECTION */}
            <Quote />

            {/* 8. CTA BANNER */}
            <CTA onKunjungiClick={() => handleScrollToSection("#contact")} />
            
          </main>

          {/* 9. FOOTER SEGMENT */}
          <Footer />

          {/* DYNAMIC SCROLL FLOATING UTILITIES */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
            
            {/* WhatsApp shortcut */}
            <motion.a
              id="sticky-whatsapp-utility"
              href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || "6281775221400"}?text=${encodeURIComponent("Halo Kios Buku Masjid Agung Cianjur, saya tertarik memesan buku.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-[0_4px_20px_rgba(26,92,68,0.35)] transition-all flex items-center justify-center cursor-pointer relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute right-14 bg-green-900/90 backdrop-blur-md text-[9px] text-white tracking-widest uppercase font-bold px-3 py-1.5 rounded-lg border border-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Hubungi Kami
              </span>
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 3c-4.96 0-9 4.04-9 9 0 1.58.414 3.065 1.14 4.36l-1.129 4.12 4.225-1.108A8.956 8.956 0 0012.012 21c4.96 0 9-4.04 9-9s-4.04-9-9-9zm5.358 12.834c-.221.62-.1.97-.241 1.25-.13.28-.43.51-.76.64a4.414 4.414 0 01-1.89.15c-1.02-.12-2.12-.52-3.21-1.35-1.46-1.11-2.42-2.71-2.42-2.71a4.2 4.2 0 011.02-3.15c.14-.14.28-.22.42-.22.14 0 .28.01.37.14.09.13.43 1.05.47 1.15.04.1.01.21-.06.29-.07.09-.15.15-.22.24-.07.08-.15.17-.07.3.08.13.37.6.79 1 .54.51.99.67 1.13.75.14.08.22.06.3-.03.08-.09.34-.41.44-.55.09-.14.19-.11.31-.06.12.05.77.37.9.43.13.06.22.1.25.15.03.05.03.3-.06.66z"/>
              </svg>
            </motion.a>

            {/* Back to top */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  id="sticky-back-to-top"
                  onClick={handleBackToTop}
                  className="p-3.5 rounded-full border border-cream-300 hover:border-cream-500 text-green-700 hover:text-white bg-white/95 hover:bg-green-700 transition-all flex items-center justify-center cursor-pointer shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <ArrowUp className="w-4.5 h-4.5" />
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        </>
      )}

    </div>
  );
}
