import React, { useState, useMemo, useRef } from "react";
import { PRODUCTS, Product } from "../types";
import { 
  Search, X, BookOpen, CheckCircle, Clock, BookMarked, 
  CalendarDays, Hash, User, Baby, MessageSquare, TrendingUp, Star, Compass, ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CategoryInfo {
  name: string;
  desc: string;
  icon: React.ReactNode;
  bgClass: string;
  textClass: string;
  borderClass: string;
}

function getAuthor(p: Product) { 
  const s = p.specs.find(s => s.startsWith("Pengarang:")); 
  return s ? s.replace("Pengarang: ", "") : "—"; 
}
function getPublisher(p: Product) { 
  const s = p.specs.find(s => s.startsWith("Penerbit:")); 
  return s ? s.replace("Penerbit: ", "") : "—"; 
}
function getISBN(p: Product) { 
  const s = p.specs.find(s => s.startsWith("ISBN:")); 
  return s ? s.replace("ISBN: ", "") : "—"; 
}
function getPages(p: Product) { 
  const s = p.specs.find(s => s.startsWith("Halaman:")); 
  return s ? s.replace("Halaman: ", "") : "—"; 
}

function AvailabilityBadge({ status }: { status: string }) {
  const available = status === "Tersedia";
  return (
    <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border font-mono ${
      available ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
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
  
  const bookListRef = useRef<HTMLDivElement>(null);

  const categories: CategoryInfo[] = [
    {
      name: "Buku Islami",
      desc: "Al-Qur'an, Tafsir, Hadits, Kitab Kuning, dan sejarah kebudayaan Islam.",
      icon: <BookOpen className="w-6 h-6" />,
      bgClass: "bg-green-50/50 hover:bg-green-50",
      textClass: "text-green-800",
      borderClass: "border-green-200/50 hover:border-green-400"
    },
    {
      name: "Novel",
      desc: "Kumpulan fiksi populer, sastra klasik, roman, dan petualangan menarik.",
      icon: <Compass className="w-6 h-6" />,
      bgClass: "bg-amber-50/50 hover:bg-amber-50",
      textClass: "text-amber-800",
      borderClass: "border-amber-200/50 hover:border-amber-400"
    },
    {
      name: "Buku Anak",
      desc: "Buku dongeng bergambar, edukasi interaktif, dan tuntunan ibadah cilik.",
      icon: <Baby className="w-6 h-6" />,
      bgClass: "bg-blue-50/50 hover:bg-blue-50",
      textClass: "text-blue-800",
      borderClass: "border-blue-200/50 hover:border-blue-400"
    },
    {
      name: "Komik",
      desc: "Komik petualangan seru, komik adab Islami, dan kisah sejarah grafis.",
      icon: <MessageSquare className="w-6 h-6" />,
      bgClass: "bg-rose-50/50 hover:bg-rose-50",
      textClass: "text-rose-800",
      borderClass: "border-rose-200/50 hover:border-rose-400"
    },
    {
      name: "Self Improvement",
      desc: "Panduan pengembangan potensi diri, kebiasaan positif, dan ketahanan mental.",
      icon: <TrendingUp className="w-6 h-6" />,
      bgClass: "bg-purple-50/50 hover:bg-purple-50",
      textClass: "text-purple-800",
      borderClass: "border-purple-200/50 hover:border-purple-400"
    },
    {
      name: "Best Seller",
      desc: "Koleksi buku terpopuler dan paling dicari yang memengaruhi cara berpikir dunia.",
      icon: <Star className="w-6 h-6" />,
      bgClass: "bg-cream-200/40 hover:bg-cream-200/70",
      textClass: "text-cream-800",
      borderClass: "border-cream-300/50 hover:border-cream-500"
    }
  ];

  const filteredBooks = useMemo(() => {
    return PRODUCTS.filter((book) => {
      const matchCategory = selectedCategory === "All" || book.category === selectedCategory;
      const matchSearch = 
        book.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
        getAuthor(book).toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    
    // Smooth scroll down to book list container
    setTimeout(() => {
      if (bookListRef.current) {
        const headerOffset = 100;
        const elementPosition = bookListRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleOrder = (book: Product) => {
    const text = encodeURIComponent(
      `Halo Kios Buku Masjid Agung Cianjur, saya ingin memesan buku: "${book.name}" karya ${getAuthor(book)}. Apakah stoknya masih tersedia?`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section id="collection" className="py-24 relative overflow-hidden bg-cream-50">
      {/* Background soft blur decoration */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-cream-300/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-green-100/25 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.35em] text-green-700 font-bold uppercase font-sans">
              Koleksi Terbaik Kami
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-green-950">
            Koleksi Kategori <br />
            <span className="text-green-gradient font-bold">Kios Buku</span>
          </h2>
          <div className="h-[2px] w-16 bg-cream-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm font-sans font-light max-w-xl mx-auto leading-relaxed text-green-800/70 pt-2">
            Jelajahi berbagai kategori buku pilihan kami yang dikurasi khusus untuk memenuhi kebutuhan literasi Anda.
          </p>
        </div>

        {/* 6 Category Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              id={`cat-card-${idx}`}
              onClick={() => handleCategoryClick(cat.name)}
              className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 group shadow-sm bg-white ${cat.borderClass} ${
                selectedCategory === cat.name ? "ring-2 ring-green-600 border-transparent shadow-md" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${cat.bgClass} ${cat.textClass} border-green-200/30 group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold text-green-950">{cat.name}</h3>
                  <p className="text-xs font-sans font-light leading-relaxed text-green-800/60">{cat.desc}</p>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="flex items-center space-x-2 text-[10px] tracking-widest uppercase font-bold text-green-600 group-hover:text-green-800 pt-2">
                <span>Lihat Koleksi</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Book List Section Container */}
        <div ref={bookListRef} className="pt-8 border-t border-cream-200/60">
          
          {/* Filters and Search Bar */}
          <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between p-6 rounded-2xl border bg-white border-green-200/30 shadow-[0_4px_25px_rgba(26,92,68,0.01)]">
            <div className="flex items-center gap-2 flex-wrap">
              <button 
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-[10px] tracking-wider uppercase font-sans font-bold transition-all border cursor-pointer ${
                  selectedCategory === "All"
                    ? "bg-green-600 text-white border-green-500 shadow-md"
                    : "text-green-800 hover:text-green-900 border-green-200 bg-cream-50"
                }`}
              >
                Semua Koleksi
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.name} 
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-[10px] tracking-wider uppercase font-sans font-bold transition-all border cursor-pointer ${
                    selectedCategory === cat.name
                      ? "bg-green-600 text-white border-green-500 shadow-md"
                      : "text-green-800 hover:text-green-900 border-green-200 bg-cream-50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Input Search */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <Search className="w-4 h-4 text-green-600 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                id="catalog-search" 
                type="text" 
                placeholder="Cari judul atau penulis..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full pl-11 pr-4 py-2.5 text-xs focus:outline-none focus:border-green-500/50 transition-colors font-sans border bg-cream-50 border-green-200/50 text-green-950 placeholder-green-800/40"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-[11px] font-mono tracking-wider text-green-700/60 px-1">
            <span>
              Menampilkan <strong className="text-green-700">{filteredBooks.length}</strong> buku pilihan
            </span>
            {selectedCategory !== "All" && (
              <button 
                onClick={() => setSelectedCategory("All")} 
                className="underline hover:text-green-800 cursor-pointer uppercase"
              >
                Lihat Semua
              </button>
            )}
          </div>

          {/* Book Cards Grid */}
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20 border border-dashed rounded-2xl border-cream-300 bg-white mt-6">
              <BookMarked className="w-10 h-10 mx-auto mb-4 text-cream-400" />
              <p className="text-sm font-sans font-light text-green-800/60 mb-4">Buku yang Anda cari belum ditemukan di daftar ini.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
                className="text-xs text-green-600 hover:text-green-700 underline uppercase tracking-widest font-bold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div id="catalog-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
              {filteredBooks.map((book, idx) => (
                <motion.div 
                  key={book.id} 
                  className="flex flex-col cursor-pointer group bg-white border border-green-200/20 p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300" 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.03 }} 
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-cream-100 shadow-sm bg-cream-50">
                    <img 
                      src={book.imageUrl} 
                      alt={book.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-green-700/90 backdrop-blur-sm text-[8px] tracking-widest text-white font-bold uppercase px-3 py-1.5 rounded-full border border-green-500/20">
                        Detail Buku
                      </span>
                    </div>
                  </div>
                  <div className="mt-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="inline-block text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-200/30">
                        {book.category}
                      </span>
                      <h4 className="font-display text-[13px] font-bold leading-snug line-clamp-2 text-green-950 group-hover:text-green-700 transition-colors">
                        {book.name}
                      </h4>
                      <p className="text-[10px] font-sans font-light truncate text-green-800/60">
                        {getAuthor(book)}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-cream-100 flex items-center justify-between">
                      <AvailabilityBadge status={book.price ?? "Tersedia"} />
                      <span className="text-[9px] font-mono text-green-600/40">{book.launchYear}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-green-950/40 backdrop-blur-md cursor-pointer" onClick={() => setSelectedBook(null)} />
            <motion.div 
              className="relative w-full max-w-2xl border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto z-10 bg-white border-green-200/50 text-green-950"
              initial={{ scale: 0.95, y: 15 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.95, y: 15 }} 
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            >
              <button 
                onClick={() => setSelectedBook(null)} 
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-green-800 hover:scale-105 transition-all cursor-pointer border border-green-200/20" 
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative bg-cream-100 flex items-center justify-center p-8 min-h-[300px] border-r border-cream-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-800/5 to-transparent pointer-events-none" />
                  <img 
                    src={selectedBook.imageUrl} 
                    alt={selectedBook.name} 
                    className="relative z-10 w-full max-w-[170px] md:max-w-full aspect-[3/4] object-cover rounded-xl shadow-lg border border-cream-300" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
                    <AvailabilityBadge status={selectedBook.price ?? "Tersedia"} />
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white">
                  <div className="space-y-3">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-green-50 text-green-700 border border-green-200/30">
                      {selectedBook.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide leading-snug text-green-950">
                      {selectedBook.name}
                    </h3>
                    <p className="text-xs font-sans font-light leading-relaxed text-green-800/70">
                      {selectedBook.description}
                    </p>
                  </div>
                  
                  {/* Book Specs Table */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-cream-200">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                        <User className="w-3 h-3" /> Penulis
                      </p>
                      <p className="text-[11px] font-semibold text-green-950">{getAuthor(selectedBook)}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                        <CalendarDays className="w-3 h-3" /> Tahun
                      </p>
                      <p className="text-[11px] font-semibold text-green-950">{selectedBook.launchYear}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                        <BookOpen className="w-3 h-3" /> Penerbit
                      </p>
                      <p className="text-[11px] font-semibold text-green-950">{getPublisher(selectedBook)}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                        <Hash className="w-3 h-3" /> Halaman
                      </p>
                      <p className="text-[11px] font-semibold text-green-950">{getPages(selectedBook)}</p>
                    </div>
                    <div className="col-span-2 space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono text-green-600/50">ISBN</p>
                      <p className="text-[11px] font-mono tracking-wider text-green-700">{getISBN(selectedBook)}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2.5 pt-1">
                    <button 
                      onClick={() => handleOrder(selectedBook)}
                      className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer font-sans bg-green-600 hover:bg-green-700 text-white shadow-[0_4px_15px_rgba(26,92,68,0.15)]"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Pesan Buku via WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => setSelectedBook(null)} 
                      className="w-full py-2.5 rounded-full border text-[10px] tracking-widest uppercase font-semibold transition-colors cursor-pointer border-green-200 hover:border-green-400 text-green-700 hover:text-green-900"
                    >
                      Kembali ke Koleksi
                    </button>
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
