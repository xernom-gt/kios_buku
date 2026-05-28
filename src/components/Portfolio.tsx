import React, { useState } from "react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../types";
import { Maximize2, MapPin, Calendar, User, ArrowUpRight, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio({ isDark }: { isDark?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="portfolio" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-750 ${
      isDark ? "bg-[#050505]" : "bg-[#fcfbf7]"
    }`}>
      
      {/* Background Soft Glow element */}
      <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-gold-950/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span className="text-[10px] tracking-[0.4em] text-gold-500 font-bold uppercase font-sans">
                Galeri Kami
              </span>
            </div>
            <h2 className={`font-display text-2xl sm:text-4xl font-semibold tracking-wide ${
              isDark ? "text-white" : "text-stone-900"
            }`}>
              Potret Kios <br />
              <span className="text-gold-gradient font-bold">& Aktivitas Pelanggan</span>
            </h2>
            <p className={`text-xs sm:text-sm font-light leading-relaxed ${
              isDark ? "text-gray-400" : "text-stone-600"
            }`}>
              Lihat lebih dekat koleksi lengkap kami, suasana kios, dan interaksi hangat bersama pelanggan yang mencari buku favorit mereka.
            </p>
          </div>

          <div className={`text-[10px] sm:text-xs tracking-widest uppercase font-bold font-sans self-start border-l pl-4 py-1 ${
            isDark ? "text-gold-400 border-gold-500/30" : "text-gold-700 border-gold-500/60"
          }`}>
            Koleksi Terbaru <br />
            <span className={isDark ? "text-white" : "text-stone-800"}>TAHUN BERJALAN 2024 - 2026</span>
          </div>
        </div>

        {/* Portfolio Masonry/Grid Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/5 cursor-pointer bg-black"
              onClick={() => setSelectedProject(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              {/* Image with zoom effect */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Black Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Card Label Tag */}
              <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest text-[#050505] bg-gold-400 font-bold px-3 py-1 rounded-md uppercase">
                {item.category}
              </span>

              {/* Hover Trigger - Maximize Arrow */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 text-white/80 group-hover:text-gold-300 group-hover:border-gold-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Details Content Area (Responsive) */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Location indicator metadata */}
                <div className="flex items-center space-x-1.5 text-gold-300 text-[10px] tracking-wide font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-lg font-bold text-white tracking-wide group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>

                {/* Short excerpt description */}
                <p className="text-[11px] text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {item.description}
                </p>

                {/* Anchor interactive reveal */}
                <div className="flex items-center space-x-1 text-[9px] tracking-widest uppercase font-bold text-gold-400 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Lihat Selengkapnya</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* PORTFOLIO LIGHTBOX VIEW */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="portfolio-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dark glass backdrop dismiss-trigger */}
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer" 
              onClick={() => setSelectedProject(null)}
            />

            {/* Lightbox Wrap */}
            <motion.div
              id="portfolio-lightbox-container"
              className={`relative w-full max-w-4xl border rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto z-10 flex flex-col ${
                isDark 
                  ? "bg-[#090909] border-gold-500/20 text-white" 
                  : "bg-[#fcfbf7] border-gold-500/40 text-stone-900"
              }`}
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            >
              
              {/* Dismiss lightbox button on top */}
              <button
                id="lightbox-close-trigger"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:text-gold-500 hover:scale-105 transition-all cursor-pointer"
                aria-label="Tutup Project"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Main Artwork Giant Header */}
              <div className="relative aspect-[16/9] w-full min-h-[220px] sm:min-h-[350px]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-90" />
                
                {/* Category Pill Overlaid left block */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] tracking-[0.25em] font-mono font-bold text-black bg-gold-400 px-3 py-1.5 rounded-md uppercase">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content description area */}
              <div className="p-6 sm:p-10 space-y-8 flex-1">
                
                {/* Grid Metadata details columns */}
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl border ${
                  isDark 
                    ? "glass-effect border-white/5 bg-white/[0.01]" 
                    : "bg-[#f5f3eb] border-[#e2dec6] shadow-sm"
                }`}>
                  <div className="flex items-center space-x-3 text-xs">
                    <User className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <span className={`block text-[10px] tracking-wider uppercase font-sans font-medium ${isDark ? "text-gray-500" : "text-stone-500"}`}>Mitra Klien</span>
                      <strong className={`block font-medium mt-0.5 ${isDark ? "text-white" : "text-stone-900"}`}>{selectedProject.client}</strong>
                    </div>
                  </div>

                  <div className={`flex items-center space-x-3 text-xs border-y sm:border-y-0 sm:border-x py-4 sm:py-0 sm:px-4 ${
                    isDark ? "border-white/5" : "border-stone-200/60"
                  }`}>
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <span className={`block text-[10px] tracking-wider uppercase font-sans font-medium ${isDark ? "text-gray-500" : "text-stone-500"}`}>Lokasi Proyek</span>
                      <strong className={`block font-medium mt-0.5 ${isDark ? "text-white" : "text-stone-900"}`}>{selectedProject.location}</strong>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs">
                    <Calendar className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <span className={`block text-[10px] tracking-wider uppercase font-sans font-medium ${isDark ? "text-gray-500" : "text-stone-500"}`}>Tahun Serah Terima</span>
                      <strong className={`block font-medium mt-0.5 ${isDark ? "text-white" : "text-stone-900"}`}>{selectedProject.year}</strong>
                    </div>
                  </div>
                </div>

                {/* Long detailed stories */}
                <div className="space-y-4">
                  <h3 className={`font-display text-xl sm:text-2xl font-bold tracking-wide ${
                    isDark ? "text-white" : "text-stone-900"
                  }`}>
                    {selectedProject.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                    isDark ? "text-gray-400" : "text-stone-600"
                  }`}>
                    {selectedProject.description} Kios kami selalu memastikan buku-buku disusun rapi berdasarkan kategori, sehingga memudahkan pencarian. Kami juga menjamin keaslian buku dan memberikan pelayanan terbaik untuk setiap pengunjung yang datang mencari literatur favorit mereka.
                  </p>
                </div>

                {/* Action button inside the project details */}
                <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDark ? "border-white/5" : "border-stone-200/65"
                }`}>
                  <span className="text-[10px] tracking-wide text-gray-500 flex items-center gap-1.5 font-sans font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                    APRESIASI PENUH DARI PEMILIK PROPERTI
                  </span>

                  <button
                    onClick={() => {
                      const text = encodeURIComponent(`Halo, saya melihat project mewah Anda: "${selectedProject.title}" (${selectedProject.location}). Saya tertarik untuk mendiskusikan konsep proyek sejenis.`);
                      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
                    }}
                    className="px-6 py-3 rounded-full bg-gold-gradient text-black font-semibold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer block text-center w-full sm:w-auto"
                  >
                    Bahas Konsep Serupa
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
