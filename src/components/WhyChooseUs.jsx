import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Wallet, Award, BarChart3 } from "lucide-react";
import SplitText from "./SplitText";

const reasons = [
  {
    icon: Zap,
    title: "Vivid Clarity",
    desc: "We use high-grade inks and archival paper to ensure your prints stay sharp and vibrant for years, not months.",
    color: "#f97316",
  },
  {
    icon: Clock,
    title: "24-Hour Turnaround",
    desc: "Speed is our superpower. We complete most bulk orders within 24–48 hours without cutting corners on quality.",
    color: "#3b82f6",
  },
  {
    icon: Wallet,
    title: "Business-Friendly Pricing",
    desc: "Premium quality shouldn't come with a premium tax. We offer some of the most competitive bulk rates in the market.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Risk Quality",
    desc: "Every single piece goes through a strict quality check before it leaves our facility. No blurry IDs, no faded mugs.",
    color: "#8b5cf6",
  },
  {
    icon: Award,
    title: "Bespoke Solutions",
    desc: "From custom lanyards to specific substrate sublimation, we tailor our printing processes to your unique needs.",
    color: "#f43f5e",
  },
  {
    icon: BarChart3,
    title: "Built for Scale",
    desc: "Whether you need 10 items or 10,000, our automated workflows handle scale with consistent precision.",
    color: "#0ea5e9",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#f8f9fa] overflow-hidden" id="why-choose-us">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-orange-500/10 rounded-full border border-orange-500/20">
              The Vista Edge
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[5rem] lg:leading-[1.1] tracking-tight text-[#111] mb-6">
              Why leading <span className="text-gray-400">brands trust us.</span>
            </h2>
          </div>
          <div className="md:max-w-xs pb-4 text-gray-600 font-light leading-relaxed">
            <p>
              We've refined every step of the printing process to deliver an
              experience that’s faster, better, and more reliable than anyone else.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 md:p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-orange-500/10 transition-all duration-500"
            >
              <div 
                className="w-14 h-14 mb-8 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-gray-50"
                style={{ backgroundColor: `${reason.color}08` }}
              >
                <reason.icon className="w-7 h-7" style={{ color: reason.color }} />
              </div>

              <h3 className="text-xl md:text-2xl font-poppins font-bold text-[#111] mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed text-base">
                {reason.desc}
              </p>

              {/* Decorative Number */}
              <span className="absolute top-8 right-10 text-4xl font-poppins font-black text-gray-900/5 pointer-events-none transition-colors group-hover:text-gray-900/10">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Performance Stat Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-orange-500 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(249,115,22,0.2)]"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-2">99.8% Success Rate</h4>
            <p className="text-white/80 font-light">On over 50,000+ custom print deliveries last year alone.</p>
          </div>
          <button className="px-8 py-4 bg-white text-orange-600 font-poppins font-bold rounded-full hover:scale-105 shadow-xl transition-all">
            Experience the Quality
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
