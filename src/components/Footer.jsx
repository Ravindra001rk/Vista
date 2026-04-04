import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-8 px-6 sm:px-10 md:px-16 overflow-hidden">
      {/* Top CTA Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-b border-white/10 pb-16">
        {/* Main CTA Text */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            Ready to <br />
            print something <br />
            <span className="text-white/50 italic font-light transition-colors hover:text-white duration-500">
              extraordinary?
            </span>
          </h2>
          <a
            href="mailto:hello@ronnylikes.com"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition-colors group"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Links & Info */}
        <div className="flex flex-wrap gap-16 sm:gap-24">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6 font-semibold">
              Socials
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  Instagram <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  Twitter <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/80">
              <li>
                <a
                  href="mailto:hello@vista.com"
                  className="hover:text-white transition-colors"
                >
                  hello@vista.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 mt-12 gap-4">
        <p>
          © {new Date().getFullYear()} Ronny Likes Print. All Rights Reserved.
        </p>
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
