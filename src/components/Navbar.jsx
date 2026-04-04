import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SplitText from "./SplitText";

const navLinks = ["EXPLORE", "MANIFIESTO", "RESOURCES", "CONTACT"];

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4, // +3s offset for loader
    },
  },
};

const linkItemVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Mobile drawer variants
const drawerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 md:px-16 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-light tracking-tight text-white drop-shadow-sm">
          <SplitText
            text="Vista"
            type="chars"
            delay={0.2}
            stagger={0.07}
            duration={0.6}
          />
        </div>

        {/* Desktop Nav Links */}
        <motion.div
          className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-semibold tracking-[0.2em]"
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="overflow-hidden block hover:opacity-60 transition-opacity"
            >
              <motion.span
                variants={linkItemVariants}
                style={{ display: "inline-block" }}
              >
                {link}
              </motion.span>
            </a>
          ))}
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden z-50 text-white p-1 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }} // +3s offset
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col justify-center items-start px-8 md:hidden"
            style={{
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <ul className="space-y-8 w-full">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-4xl font-bold tracking-tight text-white hover:text-white/60 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
