import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Sharp & Accurate Prints",
    desc: "We print exactly what you design — clear colors, sharp details, and no distortion on ID cards, mugs, T-shirts, and more.",
    img: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNoYXJwJTIwJTI2JTIwQWNjdXJhdGUlMjBQcmludHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Built for Daily Use",
    desc: "Our prints don’t fade easily. Designed to handle regular use — whether it's ID cards, badges, or custom merchandise.",
    img: "https://plus.unsplash.com/premium_vector-1731764638929-31cee32934b8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Quality Materials",
    desc: "We use reliable materials and inks that give clean results and strong finishing on every product.",
    img: "https://plus.unsplash.com/premium_photo-1682145495001-aba21545e1dd?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Fast Bulk Orders",
    desc: "From small batches to large corporate orders, we deliver on time without compromising print quality.",
    img: "https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const STEP_VH = 75;

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsSideRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // A single unified tracker: getBoundingClientRect works perfectly for sticky elements
    // on both mobile and desktop because it reliably detects when the physically spaced
    // nodes cross the 50% viewport threshold before they enter their sticky lock.
    const handleScroll = () => {
      const cards = cardsSideRef.current?.querySelectorAll(".card-item");
      if (!cards) return;

      let newIndex = 0;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        // Trigger precisely as it reaches the upper middle of the screen
        if (rect.top <= window.innerHeight * 0.45) {
          newIndex = i;
        }
      });
      setActiveIndex(newIndex);
    };

    const raf = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", raf, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", raf);
  }, [isMobile]);

  return (
    <section className="bg-[#f5f5f7] w-full pt-20 md:pt-32 pb-10" id="showcase">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* ── Header ── */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-3">
              Our Showcase
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-black max-w-2xl">
              <span className="block">Unmatched</span>
              <span className="block text-gray-400">Quality.</span>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-600">
              Discover how our state-of-the-art printing technologies bring your
              most ambitious ideas to life with stunning clarity.
            </p>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        {isMobile && (
          <div className="flex flex-col relative z-0">
            {/* Sticky text header */}
            <div className="sticky top-0 z-30 bg-[#f5f5f7] pt-6 pb-4 border-b border-gray-200">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg"
              >
                <h2 className="font-poppins text-[clamp(1.6rem,6vw,2.2rem)] font-bold leading-[1.05] tracking-tight text-[#111] mb-2">
                  {data[activeIndex].title}
                </h2>
                <p className="text-[clamp(0.85rem,3.5vw,1rem)] text-gray-500 leading-relaxed">
                  {data[activeIndex].desc}
                </p>
              </motion.div>
            </div>

            {/* Cards side — now structurally sticky like desktop! */}
            <div
              ref={cardsSideRef}
              className="flex flex-col items-center pb-[20vh] relative z-10"
            >
              {data.map((item, index) => {
                const depth = activeIndex - index;
                const isCurrent = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className="card-item sticky w-full flex justify-center"
                    data-index={index}
                    style={{
                      top: `calc(150px + ${index * 15}px)`, // 150px provides clearance for the text header above
                      zIndex: index,
                      marginTop: index === 0 ? "5vh" : `${STEP_VH}vh`, // Pushes the next card into the scroll-track!
                    }}
                  >
                    <motion.div
                      className="w-full max-w-[320px] aspect-square rounded-[1.8rem] overflow-hidden border border-black/[0.06] relative"
                      style={{ transformOrigin: "top center" }}
                      animate={{
                        opacity: isCurrent ? 1 : 0.6,
                        scale: isCurrent ? 1 : Math.max(0.8, 1 - depth * 0.05),
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Using a subtle dark overlay locally inside the card to dim it naturally when pushed back */}
                      {!isCurrent && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          className="absolute inset-0 bg-gray-200 z-10 mix-blend-multiply pointer-events-none"
                        />
                      )}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover block"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── DESKTOP LAYOUT ── */}
        {!isMobile && (
          <div className="flex flex-row">
            {/* Text side */}
            <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center z-20 bg-[#f5f5f7] pr-10">
              <div className="max-w-lg">
                <h2 className="font-poppins text-[clamp(1.8rem,3.8vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#111] mb-4">
                  {data[activeIndex].title}
                </h2>
                <p className="text-[clamp(0.9rem,1.1vw,1.1rem)] text-gray-500 leading-relaxed">
                  {data[activeIndex].desc}
                </p>
              </div>
            </div>

            {/* Cards side — sticky stacking */}
            <div
              ref={cardsSideRef}
              className="w-1/2 relative z-10 flex flex-col items-center"
              style={{ paddingBottom: "20vh" }}
            >
              {data.map((item, index) => {
                const depth = activeIndex - index;
                const isCurrent = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className="sticky w-full flex justify-center card-item"
                    data-index={index}
                    style={{
                      top: `calc(15vh + ${index * 20}px)`,
                      zIndex: index,
                      marginTop: index === 0 ? "10vh" : `${STEP_VH}vh`,
                    }}
                  >
                    <motion.div
                      className="w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-black/[0.06] relative bg-white"
                      style={{ transformOrigin: "top center" }}
                      animate={{
                        scale: isCurrent ? 1 : Math.max(0.85, 1 - depth * 0.04),
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* {!isCurrent && (
                        <motion.div
                          className="absolute inset-0 bg-gray-100/80 z-10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )} */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover block"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Showcase;
