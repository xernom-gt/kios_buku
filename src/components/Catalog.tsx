import React, { useState, useRef } from "react";
import { PRODUCTS, Product } from "../types";
import { 
  X, BookOpen, CheckCircle, Clock, 
  CalendarDays, Hash, User, Baby, MessageSquare, TrendingUp, Star, Compass, ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getWhatsAppLink } from "../utils/safety";

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
    <span className={`inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider sm:tracking-widest px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border font-mono ${
      available ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
    }`}>
      {available ? <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> : <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" />}
      {status}
    </span>
  );
}

export default function Catalog() {
  const [selectedBook, setSelectedBook] = useState<Product | null>(null);
  const bookListRef = useRef<HTMLDivElement>(null);

  const categories: CategoryInfo[] = [
    {
      name: "Buku Islami",
      desc: "Koleksi hadits, sejarah Islam, dan panduan ibadah pilihan.",
      icon: <BookOpen className="w-5 h-5" />,
      bgClass: "bg-green-50 text-green-800 border-green-200/50",
      textClass: "text-green-800",
      borderClass: "border-green-200"
    },
    {
      name: "Novel",
      desc: "Karya sastra klasik Indonesia dan fiksi pemikiran revolusioner.",
      icon: <Compass className="w-5 h-5" />,
      bgClass: "bg-amber-50 text-amber-800 border-amber-200/50",
      textClass: "text-amber-800",
      borderClass: "border-amber-200"
    },
    {
      name: "Buku Anak",
      desc: "Kisah nabi bergambar penuh warna yang ramah anak.",
      icon: <Baby className="w-5 h-5" />,
      bgClass: "bg-blue-50 text-blue-800 border-blue-200/50",
      textClass: "text-blue-800",
      borderClass: "border-blue-200"
    },
    {
      name: "Komik",
      desc: "Komik visual sejarah perjuangan Islam legendaris.",
      icon: <MessageSquare className="w-5 h-5" />,
      bgClass: "bg-rose-50 text-rose-800 border-rose-200/50",
      textClass: "text-rose-800",
      borderClass: "border-rose-200"
    },
    {
      name: "Self Improvement",
      desc: "Panduan pengembangan kebiasaan positif dan filosofi hidup.",
      icon: <TrendingUp className="w-5 h-5" />,
      bgClass: "bg-purple-50 text-purple-800 border-purple-200/50",
      textClass: "text-purple-800",
      borderClass: "border-purple-200"
    }
  ];

  const handleOrder = (book: Product) => {
    const text = `Halo Kios Buku Masjid Agung Cianjur, saya ingin memesan buku: "${book.name}" karya ${getAuthor(book)}. Apakah stoknya masih tersedia?`;
    window.open(getWhatsAppLink(text), "_blank");
  };

  return (
    <section id="collection" className="py-24 relative overflow-hidden bg-cream-50">
      {/* Background soft blur decoration */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-cream-300/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-green-100/25 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4" ref={bookListRef}>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.35em] text-green-700 font-bold uppercase font-sans">
              Buku Bestseller Pilihan
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-green-950">
            Koleksi Bestseller <br />
            <span className="text-green-gradient font-bold">Kios Buku</span>
          </h2>
          <div className="h-[2px] w-16 bg-cream-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm font-sans font-light max-w-xl mx-auto leading-relaxed text-green-800/70 pt-2">
            Daftar buku pilihan terbaik dan paling populer dari masing-masing kategori yang dikurasi khusus untuk kenyamanan membaca Anda.
          </p>
        </div>

        {/* Grouped Categories View */}
        <div className="space-y-16">
          {categories.map((cat, idx) => {
            const booksInCat = PRODUCTS.filter(b => b.category === cat.name);
            if (booksInCat.length === 0) return null;

            return (
              <motion.div 
                key={cat.name} 
                className="space-y-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-green-900/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.bgClass} ${cat.textClass} border-green-200/40`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-green-950">{cat.name}</h3>
                      <p className="text-xs font-sans font-light text-green-800/60">{cat.desc}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-green-600/40 bg-green-50 px-2.5 py-1 rounded border border-green-150/30 w-fit">
                    {booksInCat.length} Bestseller
                  </span>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {booksInCat.map((book) => (
                    <BookCard 
                      key={book.id} 
                      book={book} 
                      onClick={() => setSelectedBook(book)} 
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <BookDetailModal 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
            onOrder={handleOrder}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Subcomponent: BookCard with fallback cover
interface BookCardProps {
  key?: React.Key;
  book: Product;
  onClick: () => void;
}

function BookCard({ book, onClick }: BookCardProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div 
      className="flex flex-col cursor-pointer group bg-white border border-green-200/20 p-2.5 sm:p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full relative" 
      onClick={onClick}
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-cream-100 shadow-sm bg-cream-50 flex items-center justify-center">
        {imgError ? (
          // Elegant Fallback Book Cover UI
          <div className="absolute inset-0 bg-gradient-to-br from-green-950 to-green-800 p-4 flex flex-col justify-between text-left select-none border border-amber-500/10">
            <div className="flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-[0.2em] text-amber-400 font-bold font-sans">Kios Buku</span>
              <BookOpen className="w-3.5 h-3.5 text-amber-400/30" />
            </div>
            <div className="my-auto space-y-1.5 pt-2">
              <h5 className="font-display text-xs sm:text-[13px] font-bold text-cream-100 leading-snug line-clamp-3">
                {book.name}
              </h5>
              <p className="text-[9px] font-sans font-light text-cream-200/60 truncate">
                {getAuthor(book)}
              </p>
            </div>
            <div className="border-t border-cream-200/10 pt-2 flex items-center justify-between">
              <span className="text-[7px] tracking-wider text-amber-400/80 uppercase font-semibold">Best Seller</span>
              <span className="text-[7px] text-cream-200/40 font-mono">{book.launchYear}</span>
            </div>
          </div>
        ) : (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-200 to-cream-100 animate-pulse" />
            )}
            <img 
              src={book.imageUrl} 
              alt={book.name} 
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`} 
              referrerPolicy="no-referrer"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="lazy" 
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-green-700/95 backdrop-blur-sm text-[8px] tracking-widest text-white font-bold uppercase px-3 py-1.5 rounded-full border border-green-500/20">
            Detail Buku
          </span>
        </div>
      </div>
      
      <div className="mt-3.5 space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-1 text-left">
          <span className="inline-block text-[7px] sm:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200/30">
            {book.category}
          </span>
          <h4 className="font-display text-[11px] sm:text-[13px] font-bold leading-snug line-clamp-2 text-green-950 group-hover:text-green-700 transition-colors">
            {book.name}
          </h4>
          <p className="text-[9px] sm:text-[10px] font-sans font-light truncate text-green-800/60">
            {getAuthor(book)}
          </p>
        </div>
        <div className="pt-2.5 border-t border-cream-100 flex items-center justify-between">
          <AvailabilityBadge status={book.price ?? "Tersedia"} />
          <span className="text-[8px] sm:text-[9px] font-mono text-green-600/40">{book.launchYear}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Subcomponent: BookDetailModal with fallback image
interface BookDetailModalProps {
  book: Product;
  onClose: () => void;
  onOrder: (book: Product) => void;
}

function BookDetailModal({ book, onClose, onOrder }: BookDetailModalProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-green-950/40 backdrop-blur-md cursor-pointer" onClick={onClose} />
      <motion.div 
        className="relative w-full max-w-2xl border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto z-10 bg-white border-green-200/50 text-green-950"
        initial={{ scale: 0.95, y: 15 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.95, y: 15 }} 
        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-green-800 hover:scale-105 transition-all cursor-pointer border border-green-200/20" 
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 relative bg-cream-100 flex items-center justify-center p-8 min-h-[300px] border-r border-cream-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-800/5 to-transparent pointer-events-none" />
            
            {imgError ? (
              // Elegant Fallback Book Cover UI inside Modal
              <div className="relative z-10 w-full max-w-[170px] md:max-w-full aspect-[3/4] bg-gradient-to-br from-green-950 to-green-800 p-6 flex flex-col justify-between text-left select-none border border-amber-500/20 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-amber-400 font-bold font-sans">Kios Buku</span>
                  <BookOpen className="w-5 h-5 text-amber-400/30" />
                </div>
                <div className="my-auto space-y-2 pt-4">
                  <h5 className="font-display text-sm sm:text-base font-bold text-cream-100 leading-snug line-clamp-4">
                    {book.name}
                  </h5>
                  <p className="text-[10px] font-sans font-light text-cream-200/60">
                    {getAuthor(book)}
                  </p>
                </div>
                <div className="border-t border-cream-200/10 pt-3 flex items-center justify-between">
                  <span className="text-[8px] tracking-wider text-amber-400/80 uppercase font-semibold">Best Seller</span>
                  <span className="text-[8px] text-cream-200/40 font-mono">{book.launchYear}</span>
                </div>
              </div>
            ) : (
              <img 
                src={book.imageUrl} 
                alt={book.name} 
                className="relative z-10 w-full max-w-[170px] md:max-w-full aspect-[3/4] object-cover rounded-xl shadow-lg border border-cream-300" 
                referrerPolicy="no-referrer" 
                onError={() => setImgError(true)}
              />
            )}
            
            <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
              <AvailabilityBadge status={book.price ?? "Tersedia"} />
            </div>
          </div>
          
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white text-left">
            <div className="space-y-3">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-green-50 text-green-700 border border-green-200/30">
                {book.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide leading-snug text-green-950">
                {book.name}
              </h3>
              <p className="text-xs font-sans font-light leading-relaxed text-green-800/70">
                {book.description}
              </p>
            </div>
            
            {/* Book Specs Table */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-cream-200">
              <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                  <User className="w-3 h-3" /> Penulis
                </p>
                <p className="text-[11px] font-semibold text-green-950">{getAuthor(book)}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                  <CalendarDays className="w-3 h-3" /> Tahun
                </p>
                <p className="text-[11px] font-semibold text-green-950">{book.launchYear}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                  <BookOpen className="w-3 h-3" /> Penerbit
                </p>
                <p className="text-[11px] font-semibold text-green-950">{getPublisher(book)}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-mono flex items-center gap-1 text-green-600/50">
                  <Hash className="w-3 h-3" /> Halaman
                </p>
                <p className="text-[11px] font-semibold text-green-950">{getPages(book)}</p>
              </div>
              <div className="col-span-2 space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-mono text-green-600/50">ISBN</p>
                <p className="text-[11px] font-mono tracking-wider text-green-700">{getISBN(book)}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2.5 pt-1">
              <button 
                onClick={() => onOrder(book)}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer font-sans bg-green-600 hover:bg-green-700 text-white shadow-[0_4px_15px_rgba(26,92,68,0.15)]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Pesan Buku via WhatsApp</span>
              </button>
              <button 
                onClick={onClose} 
                className="w-full py-2.5 rounded-full border text-[10px] tracking-widest uppercase font-semibold transition-colors cursor-pointer border-green-200 hover:border-green-400 text-green-700 hover:text-green-900"
              >
                Kembali ke Koleksi
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
