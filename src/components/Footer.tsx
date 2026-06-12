import React from "react";
import { MapPin, Phone, Instagram, ArrowUp } from "lucide-react";
import logoImg from "../assets/logo.webp";
import { getWhatsAppLink, getWhatsAppDisplayNumber, getInstagramLink } from "../utils/safety";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(getWhatsAppLink("Halo Kios Buku Masjid Agung Cianjur, saya ingin bertanya mengenai koleksi buku."), "_blank");
  };

  return (
    <footer id="contact" className="border-t border-cream-200 bg-green-950 text-white pt-20 pb-12 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[80%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-green-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-6">
            <a id="footer-logo" href="#home" onClick={handleScrollToTop} className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-cream-300/30 flex items-center justify-center shadow-md shrink-0 bg-white p-0.5">
                <img src={logoImg} alt="Logo Kios Buku" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-sm tracking-[0.2em] text-white hover:text-cream-400 transition-colors uppercase">
                Kios Buku Masjid Agung
              </span>
            </a>
            
            <p className="text-xs font-light leading-relaxed text-green-200/60 max-w-sm">
              Tempat bertemunya literasi, inspirasi, dan kecintaan pada buku di jantung Kota Cianjur. Menyediakan berbagai buku Islami, kitab kuning, novel, buku anak, dan umum original.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start space-x-3 text-xs text-green-200/80">
                <MapPin className="w-4 h-4 text-cream-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white uppercase text-[9px] tracking-wider mb-0.5">Alamat</span>
                  <p className="font-light leading-relaxed">Jl. Siti Jenab No.10, Pamoyanan, Cianjur</p>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start space-x-3 text-xs text-green-200/80">
                <Phone className="w-4 h-4 text-cream-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white uppercase text-[9px] tracking-wider mb-0.5">WhatsApp</span>
                  <button onClick={openWhatsApp} className="font-semibold text-cream-300 hover:text-white cursor-pointer transition-colors">
                    {getWhatsAppDisplayNumber()}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:pl-6">
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-widest text-cream-400 font-bold uppercase border-b border-green-800/40 pb-2">
                Menu
              </h4>
              <ul className="space-y-3">
                {[
                  ["#home", "Beranda"],
                  ["#about", "Tentang"],
                  ["#why-us", "Kelebihan"],
                  ["#collection", "Koleksi Buku"]
                ].map(([href, label]) => (
                  <li key={href}>
                    <a 
                      href={href} 
                      onClick={(e) => handleLinkClick(e, href)} 
                      className="text-xs text-green-200/70 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] tracking-widest text-cream-400 font-bold uppercase border-b border-green-800/40 pb-2">
                Kontak
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={openWhatsApp}
                    className="text-xs text-green-200/70 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    WhatsApp
                  </button>
                </li>
                <li>
                  <a 
                    href={getInstagramLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-green-200/70 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[10px] tracking-widest text-cream-400 font-bold uppercase border-b border-green-800/40 pb-2">
              Peta Lokasi
            </h4>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] relative border border-green-800/50 bg-green-950">
              <iframe 
                title="Lokasi Kios Buku Masjid Agung Cianjur" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.597394017688!2d107.13969477589332!3d-6.818709366695277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6852e25ad7c393%3A0xcad88d30e303cf6a!2sMasjid%20Agung%20Cianjur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>
            <span className="block text-[9px] text-green-200/40 font-mono text-center lg:text-left">
              Berlokasi tepat di samping kompleks Masjid Agung Cianjur
            </span>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-green-800/30" />

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-wider text-green-200/40">
          <div className="space-y-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Kios Buku Masjid Agung Cianjur.</span>
            <span className="block text-[9px] opacity-75">Toko Buku Islami & Umum Tepercaya.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#home" onClick={handleScrollToTop} className="hover:text-white transition-colors flex items-center space-x-1 cursor-pointer">
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
