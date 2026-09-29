"use client";

import { motion, Variants } from "framer-motion";
import { Sun, Zap, LayoutGrid } from "lucide-react";

// Exact SVG replica for the first logo (Wave Circle)[cite: 19]
const WaveLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <mask id="wave-mask">
      <circle cx="50" cy="50" r="50" fill="white" />
      <path d="M-20 32 Q 25 12 50 32 T 120 32" stroke="black" strokeWidth="10" fill="none" />
      <path d="M-20 54 Q 25 34 50 54 T 120 54" stroke="black" strokeWidth="10" fill="none" />
      <path d="M-20 76 Q 25 56 50 76 T 120 76" stroke="black" strokeWidth="10" fill="none" />
    </mask>
    <circle cx="50" cy="50" r="50" fill="currentColor" mask="url(#wave-mask)" />
  </svg>
);

// Exact SVG replica for the last logo (3D Tunnel)[cite: 20]
const TunnelLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" {...props}>
    {[45, 38, 31, 24, 17, 10].map((r, i) => (
      <circle key={r} cx={50 - i * 3} cy={50 - i * 3} r={r} />
    ))}
  </svg>
);

const logos = [
  { id: 1, customIcon: WaveLogo, name: "Logoipsum" },
  { id: 2, icon: Sun, name: "Logoipsum" },
  { id: 3, icon: Zap, name: "Logoipsum", circle: true },
  { id: 4, icon: LayoutGrid, name: "Logoipsum", circle: true },
  { id: 5, customIcon: TunnelLogo, name: "Logoipsum" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export function PartnerLogos() {
  return (
    <section className="w-full bg-[#F8FAFC] py-10 md:py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:justify-between"
        >
          {logos.map((logo) => {
            const Icon = logo.icon;
            const CustomIcon = logo.customIcon;
            
            return (
              <motion.div
                key={logo.id}
                variants={itemVariants}
                className="flex items-center gap-2 text-[#94A3B8] hover:text-foreground transition-colors duration-300 cursor-pointer group"
              >
                {CustomIcon ? (
                  <CustomIcon className="w-8 h-8 md:w-9 md:h-9" />
                ) : logo.circle && Icon ? (
                  <div className="bg-[#94A3B8] group-hover:bg-foreground transition-colors duration-300 p-1.5 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                ) : Icon ? (
                  <Icon className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2.5} />
                ) : null}
                
                <span className="text-xl md:text-2xl font-bold tracking-tight">
                  {logo.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}