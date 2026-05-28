import React from "react";
import { ArrowRight, ChevronDown, Sparkle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onExploreClick: () => void;
  onCatalogClick: () => void;
}

export default function Hero({ onExploreClick, onCatalogClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-green-50 via-cream-50 to-cream-50"
    >
      {/* Abstract Glowing Aura */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-green-400/10 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-green-200/10 blur-[100px] animate-pulse"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#16a34a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center pt-12 pb-16">
        
        {/* Badge */}
        <motion.div
          id="hero-badge"
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-green-300/50 bg-green-50 text-green-800 mb-8 shadow-sm cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Sparkle className="w-3.5 h-3.5 text-green-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold font-sans">
            Toko Buku Terlengkap di Cianjur
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.03em] leading-[1.15] mb-8 max-w-5xl text-green-950"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Kios Buku <br />
          <span className="text-green-gradient font-extrabold">Masjid Agung Cianjur</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          id="hero-subheadline"
          className="font-sans text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed mb-12 text-green-800/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Destinasi utama pencinta buku di Cianjur. Berlokasi strategis di samping Masjid Agung, 
          kami menyediakan koleksi lengkap dari kitab Islami, Al-Qur'an, novel, buku sekolah, 
          hingga buku pengembangan diri — semua 100% original.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          id="hero-actions"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            id="hero-cta-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer shadow-[0_4px_25px_rgba(22,163,74,0.3)] shine-hover"
          >
            Jelajahi Koleksi
          </button>

          <button
            id="hero-cta-catalog"
            onClick={onCatalogClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-green-300 hover:border-green-500 hover:bg-green-50 text-green-800 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <span>Lihat Katalog</span>
            <ArrowRight className="w-3.5 h-3.5 text-green-500" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          id="hero-substats"
          className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16 pt-10 border-t border-green-200/60 w-full max-w-3xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-sans text-green-600">
              100%
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-green-700/60">
              Buku Original
            </span>
          </div>
          <div className="border-x px-2 border-green-200/50">
            <span className="block text-xl sm:text-2xl font-bold font-sans text-green-600">
              Strategis
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-green-700/60">
              Area Masjid Agung
            </span>
          </div>
          <div>
            <span className="block text-xl sm:text-2xl font-bold font-sans text-green-600">
              Lengkap
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-green-700/60">
              Kitab & Umum
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          id="hero-scroll-btn"
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-green-200 text-green-400 hover:text-green-600 hover:border-green-400 transition-all hidden md:flex items-center justify-center cursor-pointer animate-float"
          aria-label="Scroll to About Section"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>

      </div>
    </section>
  );
}
