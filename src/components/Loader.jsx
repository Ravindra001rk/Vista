import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "VISTA".split("");

const charVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  // Smooth counter: 0 → 100 over ~1.8s, starting after 0.6s
  useEffect(() => {
    const startDelay = 650; // ms — wait for chars to appear
    const duration = 1700; // ms — duration of the count

    let raf;
    let startTime;

    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        // Short pause at 100% before exit
        setTimeout(() => setExit(true), 400);
      }
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Fire onComplete after exit animation (0.9s)
  useEffect(() => {
    if (exit) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [exit, onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center select-none overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── Brand name ── */}
          <div className="flex items-end" style={{ gap: "0.04em" }}>
            {BRAND.map((char, i) => (
              <span key={i} className="overflow-hidden block">
                <motion.span
                  custom={i}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="block font-bold text-white tracking-[0.18em]
                             text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </div>

          {/* ── Tagline ── */}
          <motion.p
            className="mt-4 text-white/30 uppercase tracking-[0.4em] text-[0.6rem] sm:text-[0.65rem] font-light"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          >
            Architectural Design · Est. 2024
          </motion.p>

          {/* ── Progress bar + counter ── */}
          <motion.div
            className="absolute bottom-10 sm:bottom-14 left-0 w-full px-8 sm:px-16 flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Track */}
            <div className="relative flex-1 h-px bg-white/15 overflow-hidden">
              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-white origin-left"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Percentage */}
            <span className="text-white/50 text-xs font-light tabular-nums w-10 text-right shrink-0">
              {String(count).padStart(3, "0")}
            </span>
          </motion.div>

          {/* ── Decorative top-left corner ── */}
          <motion.div
            className="absolute top-8 left-8 sm:top-12 sm:left-12 text-white/20 text-[0.6rem] tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Loading experience
          </motion.div>

          {/* ── Decorative top-right ── */}
          <motion.div
            className="absolute top-8 right-8 sm:top-12 sm:right-12 text-white/20 text-[0.6rem] tracking-[0.3em] uppercase tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {new Date().getFullYear()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
