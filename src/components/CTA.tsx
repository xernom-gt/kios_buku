import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-cream-50">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] rounded-full bg-green-300/15 blur-[130px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          id="cta-lux-banner"
          className="rounded-3xl p-8 sm:p-16 text-center border relative overflow-hidden flex flex-col items-center space-y-6 sm:space-y-8 bg-gradient-to-br from-green-600 to-green-700 border-green-500/30 shadow-[0_20px_50px_rgba(22,163,74,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-8 h-8 text-green-200 animate-pulse" />

          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] text-green-200/80 font-bold uppercase block font-sans">
              KUNJUNGI KIOS KAMI
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight max-w-3xl text-white">
              Cari Buku Apa Hari Ini? <br />
              <span className="text-green-200 font-bold">Temukan di Sini!</span>
            </h2>
            <p className="text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed text-green-100/70">
              Kunjungi kios kami di dekat Masjid Agung Cianjur atau pesan langsung melalui WhatsApp. 
              Dapatkan buku berkualitas, original, dan lengkap.
            </p>
          </div>

          <button
            id="cta-banner-action"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white text-green-800 font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.15)] shine-hover font-sans"
          >
            <span>Pesan Sekarang via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-green-600" />
          </button>

          <span className="text-[9px] tracking-widest text-green-200/50 font-mono">
            LAYANAN TERBAIK UNTUK SELURUH WARGA CIANJUR
          </span>

        </motion.div>
 
      </div>
    </section>
  );
}
