import React from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface CTAProps {
  onKunjungiClick: () => void;
}

export default function CTA({ onKunjungiClick }: CTAProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-cream-50">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] rounded-full bg-cream-300/20 blur-[130px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          id="cta-lux-banner"
          className="rounded-3xl p-8 sm:p-16 text-center border relative overflow-hidden flex flex-col items-center space-y-6 sm:space-y-8 bg-gradient-to-br from-green-600 to-green-800 border-green-700/30 shadow-[0_20px_50px_rgba(26,92,68,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle glow sphere */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="space-y-4 relative z-10">
            <span className="text-[10px] tracking-[0.4em] text-cream-200/80 font-bold uppercase block font-sans">
              MARI BERKUNJUNG
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight max-w-3xl text-white">
              Mari berkunjung ke Kios Buku Masjid Agung Cianjur dan temukan buku favoritmu.
            </h2>
            <p className="text-xs sm:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed text-cream-100/70">
              Temukan koleksi lengkap dari kitab-kitab Islami hingga literatur modern pilihan dengan harga bersahabat dan pelayanan ramah khas Cianjur.
            </p>
          </div>

          <button
            id="cta-banner-action"
            onClick={onKunjungiClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-cream-100 hover:bg-white text-green-900 font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.1)] shine-hover font-sans relative z-10"
          >
            <span>Kunjungi Sekarang</span>
            <MapPin className="w-4 h-4 text-green-700" />
          </button>

          <span className="text-[8.5px] tracking-widest text-cream-200/40 font-mono relative z-10">
            JL. SITI JENAB NO.10, PAMOYANAN, KABUPATEN CIANJUR
          </span>

        </motion.div>
 
      </div>
    </section>
  );
}
