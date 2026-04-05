import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import SplitText from "./SplitText";

const navLinks = [
  { name: "Explore", href: "#showcase" },
  { name: "Services", href: "#services" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ 
          y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.4 }
        }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 md:px-8 md:py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto transition-colors duration-300 hover:bg-black/50">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:rotate-12"
            >
              <span className="font-poppins font-black text-white text-lg">V</span>
            </motion.div>
            <SplitText
              text="Vista"
              className="text-xl md:text-2xl font-poppins font-bold tracking-tight text-white"
              type="chars"
              delay={0.4}
              stagger={0.05}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                <SplitText
                  text={link.name}
                  type="chars"
                  delay={0.6 + i * 0.1}
                  stagger={0.03}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.a
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-md flex flex-col justify-center p-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-poppins font-bold text-white hover:text-orange-500 transition-colors"
                >
                  <span className="text-orange-500 text-lg mr-4 font-mono">0{i + 1}</span>
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between p-6 bg-orange-500 rounded-2xl text-xl font-bold text-white group"
              >
                Let's Talk
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
