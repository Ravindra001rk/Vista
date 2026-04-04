import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitText from "./SplitText";
import backgroundImage from "../assets/bg-image.jpeg";

const stats = [
  { value: "500+", label: "Orders Delivered" },
  { value: "50+", label: "Businesses Served" },
  { value: "24hr", label: "Turnaround Time" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 },
});

const Hero = () => {
  return (
    <section className="relative h-svh min-h-[580px] flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/105" />
      </div>

      <main
        className="relative z-10 grow flex flex-col justify-center
                       px-5 pt-20
                       sm:px-10 sm:pt-24
                       md:px-16 md:pt-28"
      >
        <h1
          className="font-bold tracking-tight mb-4 leading-[1.05]
                       text-[3.25rem]
                       sm:text-[4rem]
                       md:text-[4.5rem]
                       lg:text-[5.5rem]
                       xl:text-[6rem]
                       max-w-[95vw] sm:max-w-2xl md:max-w-3xl xl:max-w-5xl"
        >
          <span className="block">
            <SplitText
              text="Print fast."
              type="words"
              delay={0.2}
              stagger={0.09}
              duration={0.75}
            />
          </span>
          <span className="block">
            <SplitText
              text="Look professional."
              type="words"
              delay={0.5}
              stagger={0.09}
              duration={0.75}
            />
          </span>
        </h1>

        <motion.p
          className="font-light leading-relaxed text-white/75 mb-8
                     text-base max-w-[90vw]
                     sm:text-lg sm:max-w-sm
                     md:text-xl md:max-w-md
                     lg:text-xl lg:max-w-lg"
          {...fadeUp(0.95)}
        >
          ID cards, sublimation printing, bulk orders — delivered faster than
          the market standard, at prices your business will appreciate.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" {...fadeUp(1.15)}>
          <button
            className="flex items-center gap-2 bg-white text-black rounded-full font-medium group
                       text-sm px-8 py-4
                       sm:text-base sm:px-9 sm:py-4
                       md:text-[17px] md:px-10 md:py-4.5
                       hover:bg-gray-100 transition-colors"
          >
            Order Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="rounded-full border border-white/50 font-medium
                       text-sm px-8 py-4
                       sm:text-base sm:px-9 sm:py-4
                       md:text-[17px] md:px-10 md:py-4.5
                       hover:bg-white/10 backdrop-blur-md transition-all"
          >
            Our Services
          </button>
        </motion.div>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 shrink-0 w-full
                   px-5 pb-6
                   sm:px-10 sm:pb-8
                   md:px-16 md:pb-12"
      >
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 w-full">
          <p className="hidden md:block max-w-xs lg:max-w-sm text-sm lg:text-base font-light text-white/60 leading-relaxed">
            Serving offices, schools, and businesses with quality sublimation
            and ID card printing since day one.
          </p>

          <div className="flex items-end justify-center md:justify-end gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28 w-full md:w-auto">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="space-y-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.3 + i * 0.1,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="font-bold leading-none
                                text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]"
                >
                  {value}
                </div>
                <div
                  className="uppercase tracking-[0.18em] text-white/50 whitespace-nowrap
                                text-[8px] sm:text-[9px] md:text-[10px]"
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Hero;
