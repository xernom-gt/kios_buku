import React, { useEffect, useState, useRef } from "react";
import { STATISTICS } from "../types";
import { Sparkles, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { motion, useInView } from "motion/react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(Math.floor(duration / end), 20);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl text-green-600">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      
      {/* Background soft blur */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 rounded-full bg-green-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-[10px] tracking-[0.35em] text-green-600 font-bold uppercase font-sans">
                  Tentang Kios Kami
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-wide leading-tight text-green-950">
                Melayani Masyarakat Cianjur <br />
                <span className="text-green-gradient font-bold">Sejak Bertahun-tahun Silam</span>
              </h2>
            </div>

            {/* Narrative */}
            <div className="space-y-6 text-sm leading-relaxed font-light text-green-800/70">
              <p>
                Berlokasi persis di area pusat kota, <strong className="text-green-900">Kios Buku Masjid Agung Cianjur</strong> telah menjadi rujukan terpercaya bagi masyarakat yang mencari literasi berkualitas, mulai dari buku sekolah, buku bacaan umum, hingga literatur Islami.
              </p>
              <p>
                Kami bekerja sama langsung dengan berbagai penerbit besar untuk menjamin bahwa seluruh buku yang kami jual adalah 100% original. Kepuasan pelanggan, harga yang bersahabat, serta ketersediaan stok yang lengkap menjadi komitmen utama kami.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border bg-green-50/50 border-green-200/60 shadow-sm">
              {STATISTICS.map((stat) => (
                <div key={stat.id} className="text-center md:text-left space-y-1">
                  <div className="flex items-center justify-center md:justify-start">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[10px] sm:text-[11px] tracking-wider uppercase leading-snug font-sans text-green-700/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 p-3 rounded-xl border border-green-200/60 bg-green-50/30">
                <div className="p-2 bg-green-100 rounded-lg border border-green-300/30 text-green-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-green-900">Kualitas Original</h4>
                  <p className="text-[10px] text-green-700/60">Semua buku dari penerbit asli, bukan bajakan atau fotokopi.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl border border-green-200/60 bg-green-50/30">
                <div className="p-2 bg-green-100 rounded-lg border border-green-300/30 text-green-600 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-green-900">Pelayanan Ramah</h4>
                  <p className="text-[10px] text-green-700/60">Penjual yang sigap membantu mencari buku yang dibutuhkan.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl border border-green-200/60 bg-green-50/30">
                <div className="p-2 bg-green-100 rounded-lg border border-green-300/30 text-green-600 shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-green-900">Lengkap & Up to Date</h4>
                  <p className="text-[10px] text-green-700/60">Mulai dari buku pelajaran, novel, sampai kitab agama.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-green-300/10 to-transparent blur-3xl rounded-full scale-75 animate-pulse-slow pointer-events-none" />

            <div className="relative w-full max-w-[340px] md:max-w-[420px] aspect-[4/5] sm:aspect-square md:aspect-[3/4]">
              
              {/* Primary Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-green-200 shadow-2xl group transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
                  alt="Koleksi Buku"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border-2 border-green-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.2)] group transition-transform duration-700 hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800"
                  alt="Koleksi Buku Islami"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] tracking-widest text-green-200 font-bold uppercase block mb-1">Koleksi Lengkap</span>
                  <span className="text-[11px] font-semibold text-white block">Tersedia Banyak Pilihan</span>
                </div>
              </div>

              {/* Floating Tag */}
              <div className="absolute top-1/3 -right-2 p-3 rounded-lg border shadow-xl hidden md:block animate-float bg-white/90 border-green-300/30 text-green-900">
                <span className="text-[9px] tracking-[0.2em] font-bold text-green-600 uppercase block mb-0.5">TERPERCAYA</span>
                <span className="text-[11px] font-sans block font-semibold text-green-800">Pilihan Warga Cianjur</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
