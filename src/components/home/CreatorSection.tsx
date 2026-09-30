"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shapes = [
  // 1. Top Left Yellow Squiggle
  { 
    id: 1, 
    src: "/icon/icon1.jpg", 
    className: "top-[-5%] left-[-15%] md:top-[-45%] md:left-[-15%] w-48 h-48 md:w-64 md:h-64 -rotate-[120deg]", 
    duration: 6, 
    reverse: false 
  },
  
  // 2. Top Left White Coil
  { 
    id: 2, 
    src: "/icon/icon3.jpg", 
    className: "top-[15%] left-[5%] md:top-[-20%] md:left-[10%] w-24 h-24 md:w-36 md:h-36 rotate-[50deg]", 
    duration: 5, 
    reverse: true 
  },
  
  // 3. Bottom Left White Cone
  { 
    id: 3, 
    src: "/icon/icon5.jpg", 
    className: "bottom-[5%] left-[0%] md:bottom-[-10%] md:left-[-14%] w-32 h-32 md:w-48 md:h-48 rotate-[10deg]", 
    duration: 7, 
    reverse: false 
  },
  
  // 4. Bottom Left Yellow Ring
  { 
    id: 4, 
    src: "/icon/icon4.jpg", 
    className: "bottom-[-15%] left-[60%] md:bottom-[-66%] md:left-[2%] w-48 h-48 md:w-72 md:h-72 rotate-[-15deg]", 
    duration: 8, 
    reverse: true 
  },
  
  // 5. Top Right Yellow Pyramid
  { 
    id: 5, 
    src: "/icon/icon2.jpg", 
    className: "top-[15%] right-[10%] md:top-[-30%] md:right-[5%] w-28 h-28 md:w-40 md:h-40 rotate-[20deg]", 
    duration: 7, 
    reverse: false 
  },
  
  // 6. Top Right White Cylinder
  { 
    id: 6, 
    src: "/icon/icon6.jpg", 
    className: "top-[20%] right-[-10%] md:top-[-15%] md:right-[-15%] w-40 h-56 md:w-64 md:h-80 rotate-[5deg]", 
    duration: 6, 
    reverse: true 
  },
  
  // 7. Bottom Right Yellow Squiggle
  { 
    id: 7, 
    src: "/icon/icon1.jpg", 
    className: "bottom-[50%] right-[-5%] md:bottom-[-55%] md:right-[5%] w-40 h-40 md:w-64 md:h-64 rotate-[-5deg]", 
    duration: 6, 
    reverse: false 
  },
];

export function CreatorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c40e8] py-28 md:py-40">
      
      {/* Exact Figma Background Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* === Central Content === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center z-20 w-full max-w-4xl"
        >
          {/* Main Headline */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.2] md:leading-[1.15] tracking-tight mb-10 md:mb-12">
            Unlock Your Potential as a <br className="hidden md:block" />
            Creator with ByteSpace
          </h2>

          {/* Text content with subtle fade-in animation, border removed */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="px-6 md:px-12 mb-12 md:mb-14 w-full max-w-[900px]"
          >
            <p className="text-white text-[15px] md:text-[17px] leading-[1.8] font-normal mx-auto drop-shadow-sm">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a 
              part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your 
              expertise by publishing your finest course on the ByteSpace Course Library.
            </p>
          </motion.div>

          {/* Interactive Call to Action Button */}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(217, 252, 54, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d9fc36] text-[#0F172A] font-bold px-10 py-3.5 md:px-12 md:py-4 rounded-full shadow-[0_10px_20px_rgba(217,252,54,0.15)] transition-shadow duration-300 text-sm md:text-base mt-2 relative overflow-hidden group"
          >
             <span className="relative z-10">Join as Creator</span>
             {/* Subtle shine effect on hover */}
             <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0" />
          </motion.button>
        </motion.div>

        {/* === Floating Background 3D Icons === */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            animate={{ 
              y: shape.reverse ? [-15, 15, -15] : [15, -15, 15], 
            }}
            transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute z-0 ${shape.className} scale-75 sm:scale-90 lg:scale-100 pointer-events-none drop-shadow-2xl`}
          >
            <Image 
              src={shape.src} 
              alt="Decorative 3D shape" 
              fill 
              sizes="(max-width: 768px) 200px, 350px"
              className="object-contain mix-blend-screen" 
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}