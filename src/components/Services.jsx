import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import SplitText from "./SplitText";

const services = [
  {
    count: "01",
    title: "ID & Lanyards",
    desc: "Premium quality identification and branded neckwear for institutions of all scales.",
    items: [
      "Office ID Cards",
      "Student & Staff Cards",
      "Digital Lanyards",
      "Bulk Order Processing",
    ],
    img: "https://i.pinimg.com/1200x/f3/04/71/f304715f1d7185b48e073ce6d28e69cb.jpg",
  },
  {
    count: "02",
    title: "Sublimation",
    desc: "Vibrant, permanent transfers on garments and solid surfaces.",
    items: ["Apparel & Mugs", "Metal Sheets", "Awards & Caps"],
    img: "https://i.pinimg.com/736x/18/78/77/187877cabc0b3eb11879e647065a8172.jpg",
  },
  {
    count: "03",
    title: "Commercial Print",
    desc: "High-volume paper goods crafted precisely for corporate environments.",
    items: ["Brochures & Leaflets", "Forms", "Stationery"],
    img: "https://i.pinimg.com/1200x/9a/90/ef/9a90efe2da784d6e8acee7802550eb9c.jpg",
  },
  {
    count: "04",
    title: "Display & Decor",
    desc: "Archival quality printing to preserve corporate milestones and memories.",
    items: ["Custom Frames", "Large Format Prints", "Keepsakes"],
    img: "https://i.pinimg.com/736x/66/1e/b4/661eb478419c5b4c0a5f839b49447f45.jpg",
  },
];

const Services = () => {
  return (
    <section
      className="relative w-full py-20 md:py-32 overflow-hidden font-inter bg-[#f8f9fa]"
      id="services"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 container">
        {/* ── Header ── */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-3">
              What We Provide
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-black max-w-2xl">
              <span className="block">Engineered</span>
              <span className="block text-gray-400">Excellence.</span>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-600">
              We translate your institutional needs into high-fidelity physical
              artifacts designed for scale and permanence.
            </p>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {services.map((svc, i) => (
            <motion.div
              key={svc.count}
              // initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: "transform, opacity" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Content Top */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-poppins font-medium text-3xl text-gray-300 group-hover:text-black transition-colors duration-300">
                    {svc.count}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-gray-200 flex justify-center items-center group-hover:bg-black transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Card Title with Scroll-Triggered SplitText */}
                <h3 className="font-poppins text-2xl md:text-3xl font-bold text-black mb-3">
                  <SplitText
                    text={svc.title}
                    type="words"
                    duration={0.9}
                    stagger={0.09}
                  />
                </h3>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-gray-600 font-normal text-sm md:text-base leading-relaxed mb-8"
                >
                  {svc.desc}
                </motion.p>

                <ul className="space-y-4 mb-4">
                  {svc.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-gray-600 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-black transition-colors duration-300" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Image at bottom */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden mt-auto">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-black/20 to-transparent z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover transform "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Glassmorphism Premium Button */}
        <div className="w-full py-16 mt-8 flex items-center justify-center relative">
          {/* Subtle glow behind the button to enhance glass effect */}
          <div className="absolute w-[300px] h-20 bg-gray-300/40 rounded-full blur-3xl pointer-events-none" />

          <button
            className="relative z-10 py-3.5 px-8 flex font-poppins items-center gap-3 rounded-full text-[15px] font-semibold tracking-wide
                             text-gray-900 bg-white/40 border border-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)]
                             hover:bg-white/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.08)] hover:-translate-y-0.5
                             transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group"
          >
            Explore All Products
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs group-hover:rotate-45 transition-transform duration-500">
              <MdArrowOutward className="w-4 h-4 text-gray-900" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
