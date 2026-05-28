import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS, Testimonial } from "../types";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      
      {/* Backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-green-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-[10px] tracking-[0.4em] text-green-600 font-bold uppercase font-sans">
              Ulasan Pelanggan
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-wide text-green-950">
            Apa Kata Mereka <br />
            <span className="text-green-gradient font-bold">Tentang Kios Buku Kami</span>
          </h2>
          <p className="text-xs sm:text-sm font-light leading-relaxed text-green-800/60">
            Dengarkan langsung pengalaman jujur dari para pelanggan kami, mulai dari pelajar, mahasiswa, hingga masyarakat umum.
          </p>
        </div>

        {/* Carousel */}
        <div
          id="testimonials-slider-container"
          className="relative min-h-[340px] sm:min-h-[280px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`testi-card-${active.id}`}
              className="w-full p-8 sm:p-12 rounded-3xl relative border bg-green-50/40 border-green-200/50 shadow-[0_15px_30px_rgba(22,163,74,0.04)]"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-green-300/20 rotate-180 pointer-events-none" />

              <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
                
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500 shrink-0" />
                  ))}
                  {[...Array(5 - active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-200 shrink-0" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-sm sm:text-base leading-relaxed font-light italic font-sans text-green-900/80">
                  "{active.comment}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center space-x-4 pt-4 border-t border-green-200/40">
                  <img
                    src={active.avatarUrl}
                    alt={active.name}
                    className="w-12 h-12 rounded-full object-cover border border-green-300/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold tracking-wide text-green-900">
                      {active.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs font-sans tracking-wide text-green-700/60">
                      {active.role} &mdash; <span className="text-green-600 font-semibold">{active.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === index 
                    ? "w-6 bg-green-500" 
                    : "w-1.5 bg-green-200 hover:bg-green-300"
                }`}
                aria-label={`Ke slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border transition-all cursor-pointer active:scale-95 border-green-200 hover:border-green-400 text-green-500 hover:text-green-700 bg-white hover:bg-green-50"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border transition-all cursor-pointer active:scale-95 border-green-200 hover:border-green-400 text-green-500 hover:text-green-700 bg-white hover:bg-green-50"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
