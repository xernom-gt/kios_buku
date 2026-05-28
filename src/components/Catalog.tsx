import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "../types";
import { Search, X, BookOpen, CheckCircle, Clock, BookMarked, CalendarDays, Hash, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const categoryColors: Record<string, string> = {
  "Sastra":           "bg-emerald-100 text-emerald-800 border-emerald-300",
  "Sains & Sejarah":  "bg-blue-100 text-blue-800 border-blue-300",
  "Pengembangan Diri":"bg-purple-100 text-purple-800 border-purple-300",
  "Filsafat":         "bg-amber-100 text-amber-800 border-amber-300",
  "Psikologi":        "bg-rose-100 text-rose-800 border-rose-300",
};

function getAuthor(p: Product) { const s = p.specs.find(s => s.startsWith("Pengarang:")); return s ? s.replace("Pengarang: ", "") : "—"; }
function getPublisher(p: Product) { const s = p.specs.find(s => s.startsWith("Penerbit:")); return s ? s.replace("Penerbit: ", "") : "—"; }
function getISBN(p: Product) { const s = p.specs.find(s => s.startsWith("ISBN:")); return s ? s.replace("ISBN: ", "") : "—"; }
function getPages(p: Product) { const s = p.specs.find(s => s.startsWith("Halaman:")); return s ? s.replace("Halaman: ", "") : "—"; }

function AvailabilityBadge({ status }: { status: string }) {
  const available = status === "Tersedia";
  return (
    <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border font-mono ${
      available ? "bg-emerald-100 text-emerald-700 border-emerald-300" : "bg-red-100 text-red-700 border-red-300"
    }`}>
      {available ? <CheckCircle className="w-2.5 h-2.5" /> : <Clock className="w-2.5 h-2.5" />}
      {status}
    </span>
  );
}

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<Product | null>(null);

  const categories = ["All", "Sastra", "Sains & Sejarah", "Filsafat", "Psikologi", "Pengembangan Diri"];

  const filteredBooks = useMemo(() => {
    return PRODUCTS.filter((book) => {
      const matchCategory = selectedCategory === "All" || book.category === selectedCategory;
      const matchSearch = book.name.toLowerCase().includes(searchQuery.toLowerCase()) || book.description.toLowerCase().includes(searchQuery.toLowerCase()) || getAuthor(book).toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleBorrow = (book: Product) => {
    const text = encodeURIComponent(`Halo Kios Buku Masjid Agung, saya tertarik dengan buku: "${book.name}" karya ${getAuthor(book)}. Apakah stoknya masih tersedia?`);
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section id="catalog" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-green-100/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-[10px] tracking-[0.4em] text-green-600 font-bold uppercase font-sans">Koleksi Tersedia</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-wide text-green-950">
              Katalog Buku <br /><span className="text-green-gradient font-bold">Pilihan & Populer</span>
            </h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed text-green-800/60">
              Jelajahi buku-buku unggulan yang tersedia — dari sastra klasik, buku Islami, filsafat, psikologi, hingga pengembangan diri.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 px-5 py-3 rounded-xl border bg-green-50/50 border-green-200/50">
            <BookMarked className="w-5 h-5 text-green-500" />
            <div>
              <p className="text-[10px] uppercase tracking-widest font-mono text-green-600/60">Total Koleksi</p>
              <p className="font-display font-bold text-xl text-green-900">10.000<span className="text-green-500">+</span></p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-5 rounded-2xl border mb-10 bg-green-50/40 border-green-200/50">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-sans transition-all shrink-0 cursor-pointer border font-semibold ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white border-green-500 shadow-[0_4px_15px_rgba(22,163,74,0.2)]"
                    : "text-green-700 hover:text-green-900 border-green-200 bg-white"
                }`}
              >{cat === "All" ? "Semua Buku" : cat}</button>
            ))}
          </div>
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="w-4 h-4 text-green-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input id="catalog-search" type="text" placeholder="Cari judul, pengarang..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full pl-11 pr-4 py-2.5 text-xs focus:outline-none focus:border-green-500/50 transition-colors font-sans border bg-white border-green-200/60 text-green-900 placeholder-green-400/50"
            />
          </div>
        </div>

        <p className="text-[11px] font-mono tracking-wider mb-6 text-green-600/60">
          Menampilkan <span className="text-green-600 font-bold">{filteredBooks.length}</span> dari {PRODUCTS.length} koleksi
        </p>

        {/* Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-20 border border-dashed rounded-3xl border-green-200 bg-green-50/30">
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-green-300" />
            <p className="text-sm mb-4 text-green-700/60">Tidak ada buku yang sesuai pencarian.</p>
            <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="text-xs text-green-600 underline uppercase tracking-widest hover:text-green-700 font-bold">Reset filter</button>
          </div>
        ) : (
          <div id="catalog-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
            {filteredBooks.map((book, idx) => {
              const badgeClass = categoryColors[book.category] ?? "bg-green-100 text-green-800 border-green-300";
              return (
                <motion.div key={book.id} className="flex flex-col cursor-pointer group" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45, delay:idx*0.04 }} onClick={() => setSelectedBook(book)}>
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden border shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1.5 border-green-200/50">
                    <img src={book.imageUrl} alt={book.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5"><AvailabilityBadge status={book.price ?? "Tersedia"} /></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-green-800/80 backdrop-blur-sm text-[9px] tracking-widest text-green-100 font-bold uppercase px-3 py-1.5 rounded-full border border-green-400/30">Lihat Detail</span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-0.5">
                    <span className={`inline-block text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${badgeClass}`}>{book.category}</span>
                    <h3 className="font-display text-[12px] sm:text-[13px] font-bold leading-snug line-clamp-2 transition-colors group-hover:text-green-600 text-green-950">{book.name}</h3>
                    <p className="text-[10px] font-light truncate text-green-700/60">{getAuthor(book)}</p>
                    <p className="text-[9px] font-mono tracking-wider text-green-600/40">{book.launchYear}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer" onClick={() => setSelectedBook(null)} />
            <motion.div className="relative w-full max-w-2xl border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto z-10 bg-white border-green-300/40 text-green-950"
              initial={{ scale:0.95, y:15 }} animate={{ scale:1, y:0 }} exit={{ scale:0.95, y:15 }} transition={{ type:"spring", bounce:0.15, duration:0.5 }}>
              <button onClick={() => setSelectedBook(null)} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-green-900/70 border border-green-700/30 text-white hover:text-green-200 hover:scale-105 transition-all cursor-pointer" aria-label="Tutup"><X className="w-4 h-4" /></button>
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative bg-green-950 flex items-center justify-center p-8 min-h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-transparent pointer-events-none" />
                  <img src={selectedBook.imageUrl} alt={selectedBook.name} className="relative z-10 w-full max-w-[180px] md:max-w-full aspect-[2/3] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-green-400/20" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10"><AvailabilityBadge status={selectedBook.price ?? "Tersedia"} /></div>
                </div>
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {(() => { const bc = categoryColors[selectedBook.category] ?? "bg-green-100 text-green-800 border-green-300"; return <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${bc}`}>{selectedBook.category}</span>; })()}
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide leading-snug text-green-950">{selectedBook.name}</h3>
                    <p className="text-xs font-light leading-relaxed text-green-800/60">{selectedBook.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-green-200/50">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-500/60"><User className="w-3 h-3" /> Pengarang</p>
                      <p className="text-[11px] font-semibold text-green-900">{getAuthor(selectedBook)}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-500/60"><CalendarDays className="w-3 h-3" /> Tahun</p>
                      <p className="text-[11px] font-semibold text-green-900">{selectedBook.launchYear}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-500/60"><BookOpen className="w-3 h-3" /> Penerbit</p>
                      <p className="text-[11px] font-semibold text-green-900">{getPublisher(selectedBook)}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-500/60"><Hash className="w-3 h-3" /> Halaman</p>
                      <p className="text-[11px] font-semibold text-green-900">{getPages(selectedBook)}</p>
                    </div>
                    <div className="col-span-2 space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono text-green-500/60">ISBN</p>
                      <p className="text-[11px] font-mono tracking-wider text-green-600">{getISBN(selectedBook)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 pt-1">
                    <button onClick={() => handleBorrow(selectedBook)}
                      className={`w-full flex items-center justify-center space-x-2.5 py-3 rounded-full font-semibold text-xs tracking-wider uppercase shadow-lg transition-all cursor-pointer font-sans ${
                        selectedBook.price === "Kosong" ? "bg-green-100 border border-green-200 text-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white shadow-[0_4px_20px_rgba(22,163,74,0.3)]"
                      }`} disabled={selectedBook.price === "Kosong"}>
                      <BookOpen className="w-4 h-4" />
                      <span>{selectedBook.price === "Kosong" ? "Sedang Kosong" : "Beli / Pesan Sekarang"}</span>
                    </button>
                    <button onClick={() => setSelectedBook(null)} className="w-full py-2.5 rounded-full border text-[10px] tracking-widest uppercase font-semibold transition-colors cursor-pointer border-green-200 hover:border-green-400 text-green-600 hover:text-green-800">Kembali ke Katalog</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
