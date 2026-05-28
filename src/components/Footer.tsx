import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); setTimeout(() => setSubscribed(false), 4000); }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 85, behavior: "smooth" }); }
  };

  return (
    <footer className="border-t pt-20 pb-12 font-sans relative overflow-hidden bg-green-950 text-white border-green-800/30">
      <div className="absolute top-[80%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-green-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <a id="footer-logo" href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-green-300 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.3)] shrink-0">
                <span className="text-green-950 font-display font-bold text-sm">ك</span>
              </div>
              <span className="font-display font-bold text-sm tracking-[0.25em] text-white hover:text-green-300 transition-colors">KIOS BUKU</span>
            </a>
            <p className="text-xs font-light max-w-sm leading-relaxed text-green-300/60">
              Koleksi buku original terlengkap di Cianjur. Mulai dari kitab Islami, buku sekolah, hingga novel sastra terbaik.
            </p>
            <div className="flex items-center space-x-2 text-[10px] tracking-wider uppercase font-mono text-green-400/80">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Toko Buku Tepercaya di Cianjur</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-widest font-bold uppercase px-3 py-1.5 rounded-md inline-block text-green-950 bg-green-400">Navigasi</h4>
              <ul className="space-y-3">
                {[["#home","Beranda"],["#about","Tentang"],["#services","Kategori"],["#catalog","Katalog"]].map(([href,label]) => (
                  <li key={href}><a href={href} onClick={(e) => handleLinkClick(e, href)} className="text-xs text-green-400/70 hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-widest text-green-400 font-bold uppercase border-b border-green-700/30 pb-2">Lainnya</h4>
              <ul className="space-y-3">
                {[["#testimonials","Ulasan"],["#contact","Kontak"]].map(([href,label]) => (
                  <li key={href}><a href={href} onClick={(e) => handleLinkClick(e, href)} className="text-xs text-green-400/70 hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] tracking-widest text-green-400 font-bold uppercase border-b border-green-700/30 pb-2">Info Diskon & Promo</h4>
            <p className="text-xs leading-relaxed font-light text-green-400/60">Daftarkan email untuk info diskon dan promo buku terbaru.</p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat email..." className="w-full rounded-full pl-6 pr-12 py-3 text-xs focus:outline-none bg-white/5 border border-green-700/30 text-white placeholder-green-600/50 focus:border-green-500/40" />
              <button id="newsletter-submit" type="submit" className="absolute right-1.5 top-1.5 p-2 bg-green-500 hover:bg-green-400 text-green-950 rounded-full transition-colors cursor-pointer" aria-label="Daftar">
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.span className="block text-[10px] text-green-400 font-medium tracking-wide" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                  Berhasil! Anda akan mendapat info promo terbaru.
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="h-[1px] w-full bg-green-800/30" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-wider text-green-500/50">
          <div className="space-y-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} KIOS BUKU MASJID AGUNG CIANJUR.</span>
            <span className="block text-[9px] opacity-75">LAYANAN BUKU TERLENGKAP DI PUSAT KOTA CIANJUR.</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-green-300 transition-colors cursor-pointer">KEBIJAKAN PRIVASI</span>
            <span>&middot;</span>
            <span className="hover:text-green-300 transition-colors cursor-pointer">SYARAT & KETENTUAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
