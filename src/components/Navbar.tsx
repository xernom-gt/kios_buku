import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import logoImg from "../assets/logo.webp";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Kelebihan", href: "#why-us" },
    { label: "Koleksi Buku", href: "#collection" },
    { label: "Hubungi Kami", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navigation"
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(22,163,74,0.08)] border-b border-green-200/50"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-cream-300/30 flex items-center justify-center transition-transform duration-700 shrink-0 bg-white shadow-sm">
              <img src={logoImg} alt="Logo Kios Buku" className="w-full h-full object-contain p-0.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-[13px] sm:text-[14px] tracking-[0.15em] transition-colors ${
                isScrolled ? "text-green-900 group-hover:text-green-600" : "text-white group-hover:text-cream-200"
              }`}>
                KIOS BUKU
              </span>
              <span className={`text-[7.5px] tracking-[0.2em] uppercase font-semibold transition-colors ${
                isScrolled ? "text-green-600" : "text-cream-300"
              }`}>
                Masjid Agung Cianjur
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-4 py-2 text-[11px] tracking-wider uppercase font-semibold transition-colors cursor-pointer rounded-full ${
                    isActive
                      ? isScrolled
                        ? "text-green-700 bg-green-50"
                        : "text-green-900 bg-white"
                      : isScrolled
                        ? "text-green-800/70 hover:text-green-700 hover:bg-green-50/50"
                        : "text-cream-100/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        isScrolled ? "bg-green-500" : "bg-white"
                      }`}
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              id="nav-cta-primary"
              href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || "6281775221400"}?text=${encodeURIComponent("Halo Kios Buku Masjid Agung Cianjur, saya ingin memesan buku.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all cursor-pointer group ${
                isScrolled
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-[0_4px_15px_rgba(22,163,74,0.25)]"
                  : "bg-white hover:bg-cream-100 text-green-900 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
              }`}
            >
              <span>Pesan Buku</span>
              <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isScrolled ? "text-white" : "text-green-700"
              }`} />
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isScrolled
                  ? "border-green-200 text-green-700 hover:bg-green-50"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
              aria-label="Menu Navigasi"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            className="fixed inset-0 z-30 flex flex-col bg-white/95 backdrop-blur-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center flex-1 space-y-6 px-8">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-xl font-display tracking-widest uppercase transition-colors cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? "text-green-600 font-bold"
                      : "text-green-900/70 hover:text-green-600"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <a
                href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || "6281775221400"}?text=${encodeURIComponent("Halo Kios Buku Masjid Agung Cianjur, saya ingin memesan buku.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-8 py-3.5 rounded-full bg-green-600 text-white text-xs tracking-widest uppercase font-bold shadow-lg"
              >
                Pesan Buku via WhatsApp
              </a>
            </div>

            {/* Bottom info */}
            <div className="pb-8 px-8 text-center">
              <div className="p-5 rounded-2xl bg-green-50 border border-green-200/60">
                <div>
                  <h4 className="font-display text-[10px] tracking-[0.3em] text-green-700 uppercase font-semibold mb-2">
                    Kios Buku Masjid Agung
                  </h4>
                  <p className="text-xs tracking-wide text-green-800/60">
                    Jl. Siti Jenab No. 10, Pamoyanan, Cianjur
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
