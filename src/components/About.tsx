import React from "react";
import { Check, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import imgAbout1 from "../assets/doc_landscape_2.webp";
import imgAbout2 from "../assets/doc_portrait_1.webp";

export default function About() {
  const collectionTypes = [
    "Novel",
    "Buku Pengembangan Diri",
    "Buku Anak",
    "Komik",
    "Buku Umum",
    "Buku Islami"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient accents */}
      <div className="absolute top-[10%] left-[-10%] w-[380px] h-[380px] rounded-full bg-cream-100/60 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-green-50/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8">

            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-[0.35em] text-green-700 font-bold uppercase font-sans">
                  Tentang Kami
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-wide leading-tight text-green-950">
                Menumbuhkan Budaya Membaca <br />
                <span className="text-green-gradient font-bold">Di Kota Cianjur</span>
              </h2>
              <div className="h-[2px] w-16 bg-cream-500 rounded-full" />
            </div>

            {/* Narrative requested by the user */}
            <div className="space-y-5 text-sm sm:text-[15px] font-sans font-light leading-relaxed text-green-800/80">
              <p>
                Kios Buku Masjid Agung Cianjur hadir dari kecintaan terhadap buku dan keinginan untuk menumbuhkan budaya membaca di Cianjur.
              </p>
              <p>
                Berlokasi di samping Masjid Agung Cianjur, kios buku ini menjadi ruang bagi siapa saja yang mencari bacaan berkualitas.
              </p>
              <p>
                Awalnya menyediakan buku Islami, lalu berkembang menghadirkan berbagai jenis bacaan lainnya:
              </p>
            </div>

            {/* Category Grid list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg">
              {collectionTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2.5 p-3 rounded-xl border border-cream-200/50 bg-cream-50/50 hover:bg-cream-100/50 transition-colors">
                  <div className="p-1.5 bg-green-50 rounded-lg text-green-600 border border-green-200/30">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-sans font-medium text-green-950">{type}</span>
                </div>
              ))}
            </div>

            {/* Conclusion text */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2.5 px-4.5 py-2.5 rounded-full bg-green-50 border border-green-200/30 text-green-800">
                <BookOpen className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="text-xs font-sans font-bold tracking-wide uppercase">
                  Semua buku original dan pilihan.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-300/10 to-transparent blur-3xl rounded-full scale-75 animate-pulse-slow pointer-events-none" />

            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] sm:aspect-square">

              {/* Primary Image: Bookshelf */}
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-cream-300 shadow-2xl group transition-transform duration-700 hover:scale-[1.01] bg-cream-50">
                <img
                  src={imgAbout1}
                  alt="Koleksi Buku di Kios Buku"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Secondary Image: Book Cafe/Store Atmosphere */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border-2 border-cream-200 shadow-[0_15px_35px_rgba(0,0,0,0.15)] group transition-transform duration-700 hover:scale-[1.03] bg-cream-50">
                <img
                  src={imgAbout2}
                  alt="Suasana Buku Islami dan Umum"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] tracking-widest text-green-200 font-bold uppercase block mb-1">
                    Masjid Agung Cianjur
                  </span>
                  <span className="text-[11px] font-sans font-semibold text-white block">
                    Di Samping Rumah Ibadah
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-1/3 -right-4 p-4 rounded-xl border shadow-xl hidden sm:block animate-float bg-white/95 border-cream-300 text-green-900">
                <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-green-700 uppercase block mb-0.5">
                  100% ORIGINAL
                </span>
                <span className="text-xs font-display font-bold block text-green-800">
                  Pilihan Warga Cianjur
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
