import React from "react";
import { ArrowRight, MessageSquare, ChevronDown, Sparkle } from "lucide-react";
import { motion } from "motion/react";
import bgImg from "../assets/doc_landscape_1.webp";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Image of Warm Bookshelves */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Suasana Rak Buku Kayu yang Hangat"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.1] saturate-[1.15]"
        />
        {/* Warm gradient overlay — lighter at edges, deeper center for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/55 via-green-800/65 to-green-950/80" />
        {/* Secondary warm diagonal tint for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cream-950/15 via-transparent to-green-700/10" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center pt-16 pb-20">

        {/* Badge */}
        <motion.div
          id="hero-badge"
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-brand-red bg-brand-red/10 backdrop-blur-md text-cream-100 mb-8 shadow-[0_0_15px_rgba(194,26,34,0.3)] cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Sparkle className="w-3.5 h-3.5 text-cream-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold font-sans">
            LITERASI ISLAMI & KLASIK BOOKSTORE
          </span>
        </motion.div>

        {/* Headline (Playfair Display) */}
        <motion.h1
          id="hero-headline"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.02em] leading-[1.15] mb-8 max-w-5xl text-white"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Kios Buku <br />
          <span className="text-cream-400 font-extrabold">Masjid Agung Cianjur</span>
        </motion.h1>

        {/* Subheadline (Inter/Poppins) */}
        <motion.p
          id="hero-subheadline"
          className="font-sans text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed mb-12 text-cream-100/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Tempat bertemunya literasi, inspirasi, dan kecintaan pada buku di jantung Kota Cianjur.
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
            Jelajahi Koleksi Buku
          </button>

          <button
            id="hero-cta-contact"
            onClick={onContactClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-white/40 hover:border-white hover:bg-white/10 text-white transition-all duration-300 active:scale-[0.98] cursor-pointer backdrop-blur-sm"
          >
            <span>Hubungi Kami</span>
            <MessageSquare className="w-3.5 h-3.5 text-cream-300" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          id="hero-substats"
          className="grid grid-cols-3 gap-2 sm:gap-12 md:gap-16 pt-8 sm:pt-10 border-t border-white/15 w-full max-w-3xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="px-1 sm:px-0">
            <span className="block text-lg sm:text-2xl font-bold font-sans text-cream-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              100%
            </span>
            <span className="block text-[8px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-cream-100/80 font-medium mt-0.5 sm:mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Buku Original
            </span>
          </div>
          <div className="border-x px-1 sm:px-2 border-white/15">
            <span className="block text-lg sm:text-2xl font-bold font-sans text-cream-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Klasik
            </span>
            <span className="block text-[8px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-cream-100/80 font-medium mt-0.5 sm:mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Suasana Nyaman
            </span>
          </div>
          <div className="px-1 sm:px-0">
            <span className="block text-lg sm:text-2xl font-bold font-sans text-cream-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Lengkap
            </span>
            <span className="block text-[8px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-cream-100/80 font-medium mt-0.5 sm:mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Islami & Umum
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          id="hero-scroll-btn"
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/20 text-cream-300 hover:text-white hover:border-white/40 transition-all hidden md:flex items-center justify-center cursor-pointer animate-float"
          aria-label="Scroll to About Section"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>

      </div>
    </section>
  );
}
