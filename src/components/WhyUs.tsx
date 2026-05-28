import React from "react";
import { WHY_US } from "../types";
import { ShieldCheck, BookOpen, Coins, Heart } from "lucide-react";
import { motion } from "motion/react";

function CardIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "BookOpen": return <BookOpen className={className} />;
    case "Coins": return <Coins className={className} />;
    case "Heart": return <Heart className={className} />;
    default: return <BookOpen className={className} />;
  }
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-cream-100/50">
      {/* Background Soft Accent */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cream-300/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-green-200/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.35em] text-green-700 font-bold uppercase font-sans">
              Kelebihan Kios Kami
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-green-950">
            Kenapa Memilih <br />
            <span className="text-green-gradient font-bold">Kios Buku Kami?</span>
          </h2>
          <div className="h-[2px] w-16 bg-cream-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm font-sans font-light max-w-xl mx-auto leading-relaxed text-green-800/70 pt-2">
            Kami hadir dengan dedikasi tinggi untuk memberikan pelayanan terbaik bagi para pembaca setia di Kabupaten Cianjur.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, index) => (
            <motion.div
              key={item.id}
              id={`why-us-card-${item.id}`}
              className="relative rounded-2xl p-8 bg-white border border-green-200/40 shadow-[0_4px_20px_rgba(26,92,68,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(26,92,68,0.06)] hover:border-green-300/50 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cream-200/20 rounded-full blur-xl transition-all duration-500 group-hover:bg-green-100/30" />

              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="inline-flex p-3 rounded-xl bg-cream-50 border border-cream-200/50 text-green-600 transition-colors duration-500 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-500">
                  <CardIcon name={item.iconName} className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-green-950 group-hover:text-green-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-sans font-light leading-relaxed text-green-800/70">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="h-[2px] w-0 bg-cream-500 transition-all duration-500 group-hover:w-12 mt-6 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
