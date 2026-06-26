import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="preloader-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-green-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background ambient green glow */}
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-green-500/15 blur-[60px] sm:blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-slow will-change-transform"></div>

      <div className="relative flex flex-col items-center max-w-xs w-full px-4">
        {/* Animated Brand Mark */}
        <div className="flex items-center justify-center space-x-1 mb-8">
          <motion.div
            id="loader-mark-1"
            className="w-3 h-3 rounded-full bg-green-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.div
            id="loader-mark-2"
            className="w-3 h-3 rounded-full bg-green-300"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            id="loader-mark-3"
            className="w-3 h-3 rounded-full bg-green-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>

        {/* Wordmark */}
        <motion.h1
          id="loader-title"
          className="font-display text-2xl tracking-[0.3em] text-green-200 text-center mb-2 font-semibold"
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          KIOS BUKU
        </motion.h1>

        <motion.p
          id="loader-subtitle"
          className="font-sans text-[10px] tracking-[0.3em] text-green-400/60 uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Masjid Agung Cianjur
        </motion.p>

        {/* Dynamic Progress Bar */}
        <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-3">
          <motion.div
            id="loader-bar"
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-700 via-green-400 to-green-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Progress Counter */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-green-600/50">
          <span>MEMUAT</span>
          <span className="text-green-300 tracking-wider font-semibold">
            {Math.min(progress, 100)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
