import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Instagram, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Pesan", message: "" });
  const [formStatus, setFormStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error"); setErrorMessage("Harap lengkapi semua baris bertanda bintang (*)."); return;
    }
    setFormStatus("loading");
    setTimeout(() => { setFormStatus("success"); setFormData({ name:"", email:"", subject:"Pesan", message:"" }); }, 1500);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent("Halo Kios Buku Masjid Agung, saya ingin bertanya mengenai ketersediaan buku.")}`, "_blank");
  };

  const inputCls = "w-full border rounded-xl px-4 py-3 text-xs focus:outline-none transition-all bg-green-50/30 border-green-200/60 text-green-900 placeholder-green-400/50 focus:border-green-500 focus:ring-1 focus:ring-green-500";

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-green-50/30">
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-green-100/30 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        <div className="max-w-3xl space-y-4 mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-[10px] tracking-[0.4em] text-green-600 font-bold uppercase">Tanya Kami</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-wide text-green-950">
            Hubungi Admin <br /><span className="text-green-gradient font-bold">Pemesanan & Pertanyaan</span>
          </h2>
          <p className="text-xs sm:text-sm font-light max-w-xl leading-relaxed text-green-800/60">Silakan kirimkan pertanyaan atau permintaan buku. Kami akan segera membalas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="p-6 sm:p-10 rounded-3xl border space-y-6 relative bg-white border-green-200/50 shadow-sm">
              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.div className="absolute inset-0 z-20 bg-green-700/95 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                    <CheckCircle className="w-16 h-16 text-green-200 animate-bounce" />
                    <h3 className="font-display text-xl font-bold text-white">Pesan Berhasil Terkirim</h3>
                    <p className="text-xs text-green-100/70 max-w-sm">Admin Kios Buku akan segera membalas.</p>
                    <button type="button" onClick={() => setFormStatus("idle")} className="px-6 py-2.5 rounded-full border border-green-300/30 text-[10px] text-green-100 font-bold uppercase tracking-wider cursor-pointer mt-4">Kirim Lagi</button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-wider uppercase font-bold text-green-800/70">Nama <span className="text-green-500">*</span></label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ahmad Fauzi" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-wider uppercase font-bold text-green-800/70">Email <span className="text-green-500">*</span></label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="ahmad@email.com" className={inputCls} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-wider uppercase font-bold text-green-800/70">Kategori</label>
                <select id="contact-subject" name="subject" value={formData.subject} onChange={handleInputChange} className={inputCls + " cursor-pointer"}>
                  <option value="Pesan">Pesan Buku</option>
                  <option value="Cari">Cari Judul</option>
                  <option value="Tanya">Pertanyaan Umum</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-wider uppercase font-bold text-green-800/70">Pesan <span className="text-green-500">*</span></label>
                <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleInputChange} placeholder="Judul buku atau pertanyaan Anda..." className={inputCls + " resize-none"} />
              </div>
              <AnimatePresence>
                {formStatus === "error" && (
                  <motion.div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200" initial={{ opacity:0 }} animate={{ opacity:1 }}>
                    <AlertCircle className="w-4 h-4 shrink-0" /><span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <button id="contact-form-submit" type="submit" disabled={formStatus === "loading"} className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-md cursor-pointer">
                {formStatus === "loading" ? <><span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /><span>Mengirim...</span></> : <><Send className="w-4 h-4" /><span>Kirim Pesan</span></>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl border space-y-6 bg-white border-green-200/50 shadow-sm">
              <h3 className="font-display text-lg font-bold tracking-wide border-b pb-4 text-green-900 border-green-200/50">Lokasi & Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl border shrink-0 bg-green-50 border-green-200/50 text-green-600"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-[9px] tracking-wider text-green-600/60 uppercase font-mono mb-0.5">ALAMAT</span>
                    <strong className="text-xs block text-green-900">Kios Buku Samping Masjid Agung</strong>
                    <p className="text-[11px] font-light mt-0.5 text-green-800/60">Jl. Siti Jenab No. 10, Pamoyanan, Cianjur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl border shrink-0 bg-green-50 border-green-200/50 text-green-600"><Mail className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-[9px] tracking-wider text-green-600/60 uppercase font-mono mb-0.5">EMAIL</span>
                    <a href="mailto:info@kiosbukucianjur.com" className="text-xs font-bold block text-green-900 hover:text-green-600">info@kiosbukucianjur.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl border shrink-0 bg-green-50 border-green-200/50 text-green-600"><Phone className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-[9px] tracking-wider text-green-600/60 uppercase font-mono mb-0.5">WHATSAPP</span>
                    <button onClick={openWhatsApp} className="text-xs text-green-600 hover:text-green-700 font-bold block cursor-pointer text-left">+62 812-3456-7890</button>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-green-200/40">
                <div className="flex items-center space-x-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3.5 border rounded-xl bg-green-50 border-green-200/50 text-green-600 hover:border-green-400"><Instagram className="w-4 h-4" /></a>
                  <button onClick={openWhatsApp} className="p-3.5 bg-green-600 border border-green-500 hover:bg-green-700 text-white rounded-xl flex-1 text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center cursor-pointer"><span>Chat WhatsApp</span></button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden aspect-[16/10] relative border bg-white border-green-200/50">
              <iframe title="Lokasi Kios" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8!2d107.14!3d-6.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMTIuMCJTIDEwN8KwMDgnMjQuMCJF!5e0!3m2!1sid!2sid" width="100%" height="100%" style={{ border:0, filter:"grayscale(0.15) contrast(1.05)" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="absolute inset-x-0 bottom-0 py-3 px-4 backdrop-blur-md border-t text-center text-[10px] tracking-wide bg-green-50/90 text-green-800 border-green-200/50">LOKASI KIOS BUKU MASJID AGUNG CIANJUR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
