import React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Quote() {
  return (
    <section className="py-24 relative overflow-hidden bg-cream-100 border-y border-cream-200/50">
      {/* Background soft glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] rounded-full bg-cream-300/30 blur-[60px] sm:blur-[130px] animate-pulse-slow will-change-transform"></div>
        {/* Fine background dot texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#1a5c44_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center space-y-6">
        
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-green-700"
        >
          <QuoteIcon className="w-16 h-16 fill-green-700/10 stroke-[1.5]" />
        </motion.div>

        {/* Big Kutipan */}
        <motion.blockquote
          className="font-display text-2xl sm:text-3xl md:text-4xl italic font-semibold leading-relaxed tracking-wide text-green-950 max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Buku bukan hanya untuk dibaca, tapi untuk menemukan dunia baru di setiap halamannya."
        </motion.blockquote>

        {/* Separator line */}
        <motion.div 
          className="h-[2px] w-12 bg-cream-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Source info (Optional but adds bookstore context) */}
        <motion.p
          className="text-[10px] tracking-[0.25em] uppercase font-sans font-bold text-green-700/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Kios Buku Masjid Agung Cianjur
          <span className="block text-[8px] opacity-75 font-normal tracking-widest mt-1">Pintu Gerbang Inspirasi Islami & Literasi Umum</span>
        </motion.p>

      </div>
    </section>
  );
}
