import React, { useState } from "react";
import { SERVICES } from "../types";
import { Compass, Layers, Shield, Cpu, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Compass": return <Compass className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Shield": return <Shield className={className} />;
    case "Cpu": return <Cpu className={className} />;
    default: return <Compass className={className} />;
  }
}

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden bg-green-50/40">
      
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-[10px] tracking-[0.4em] text-green-600 font-bold uppercase font-sans">
              Kategori & Layanan
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-wide text-green-950">
            Kategori Koleksi <br />
            <span className="text-green-gradient font-bold">& Layanan Pelanggan</span>
          </h2>
          <p className="text-sm font-light max-w-xl mx-auto leading-relaxed text-green-800/60">
            Kami melayani segala kebutuhan buku Anda — dari kitab dan Al-Qur'an, novel populer, buku sekolah, hingga pemesanan buku khusus.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, index) => {
            const isExpanded = activeServiceId === srv.id;

            return (
              <motion.div
                key={srv.id}
                id={`service-card-${srv.id}`}
                className={`relative rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-pointer border ${
                  isExpanded
                    ? "bg-green-100/50 shadow-[0_15px_30px_rgba(22,163,74,0.08)] border-green-400/40"
                    : "bg-white border-green-200/50 hover:bg-green-50/50 hover:border-green-300/60 hover:shadow-lg"
                }`}
                onClick={() => setActiveServiceId(isExpanded ? null : srv.id)}
                whileHover={{ y: isExpanded ? 0 : -6 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Glow */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-green-400/10 rounded-full blur-xl transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-30'}`} />

                <div className="flex items-start justify-between relative z-10">
                  <span className="text-[9px] tracking-widest font-mono px-3 py-1 rounded-full border uppercase text-green-700 bg-green-100/60 border-green-300/30">
                    {srv.tag}
                  </span>

                  <div className={`p-4 rounded-2xl border transition-all duration-500 ${
                    isExpanded 
                      ? "bg-green-600 text-white border-green-500 shadow-[0_0_20px_rgba(22,163,74,0.25)]" 
                      : "bg-green-50 text-green-600 border-green-200/40"
                  }`}>
                    <ServiceIcon name={srv.iconName} className="w-6 h-6" />
                  </div>
                </div>

                <div className="mt-8 relative z-10 space-y-2">
                  <h3 className="font-display text-xl font-bold tracking-wide text-green-900">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-green-800/60">
                    {srv.description}
                  </p>
                </div>

                {/* Details drawer */}
                <div className={`mt-6 pt-6 border-t overflow-hidden transition-all duration-500 border-green-200/40 ${
                  isExpanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <h4 className="text-[10px] tracking-wider text-green-600 font-bold uppercase mb-4">
                    Detail Layanan:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span className="font-sans font-light text-green-800">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer */}
                <div className="mt-8 pt-6 border-t flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-green-600 relative z-10 border-green-200/40">
                  <span>{isExpanded ? "Sembunyikan" : "Selengkapnya"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-4 h-4 text-green-500" />
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <motion.div
            id="services-consultation"
            className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 rounded-2xl border max-w-4xl mx-auto text-left bg-white border-green-200/60 shadow-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider mb-1 text-green-900">
                Sedang Mencari Buku Spesifik?
              </h4>
              <p className="text-[11px] font-light font-sans text-green-800/60">
                Jangan ragu menghubungi kami. Apabila buku yang Anda cari sedang kosong, kami dapat bantu memesankan.
              </p>
            </div>
            
            <a
              id="services-cta-consult"
              href="#contact"
              className="px-6 py-3 rounded-full border text-[10px] tracking-widest uppercase font-bold shrink-0 transition-colors text-center w-full sm:w-auto cursor-pointer border-green-400/50 hover:border-green-500 text-green-700 hover:bg-green-50"
            >
              Tanya via WhatsApp
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
