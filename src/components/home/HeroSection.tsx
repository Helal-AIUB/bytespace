"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Star } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll effects for the floating shapes
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen pt-40 px-4 md:px-6 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Background Exact Square Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

      {/* === Floating Background Shapes === */}
      
      {/* Top Left Green DNA/Squiggle (Thicker & Rounded) */}
      <motion.div style={{ y: y1 }} className="absolute top-24 -left-[2%] xl:left-[2%] z-0 hidden lg:block opacity-90 pointer-events-none">
        <motion.svg animate={{ rotate: [10, -5, 10] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} width="160" height="220" viewBox="0 0 140 200" fill="none" className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]">
          <path d="M30,30 C100,-10 140,50 80,90 C20,130 10,70 60,130 C110,190 140,160 80,180" stroke="#bef264" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>

      {/* Middle Left White Squiggle */}
      <motion.div style={{ y: y2 }} className="absolute top-[50%] left-[8%] xl:left-[12%] z-0 hidden lg:block opacity-90 pointer-events-none">
        <motion.svg animate={{ rotate: [-15, 5, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} width="100" height="120" viewBox="0 0 100 120" fill="none" className="drop-shadow-xl">
          <path d="M25,25 C80,0 100,45 55,70 C10,95 0,65 35,100" stroke="white" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>

      {/* Bottom Left White Donut (Tilted 3D Effect) */}
      <motion.div style={{ y: y3 }} className="absolute bottom-20 left-[2%] xl:left-[8%] z-0 hidden md:block opacity-90 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [-20, -10, -20] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="w-40 h-40 md:w-52 md:h-52 border-[35px] md:border-[45px] border-white rounded-full drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)] shadow-inner transform scale-y-[0.7]" 
        />
      </motion.div>

      {/* Top Right Green Cylinder */}
      <motion.div style={{ y: y2 }} className="absolute top-28 right-[2%] xl:right-[6%] z-0 hidden lg:block opacity-90 pointer-events-none">
        <motion.div 
          animate={{ rotate: [30, 40, 30] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} 
          className="w-28 h-44 bg-[#bef264] rounded-[50px] drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)]" 
        />
      </motion.div>

      {/* Middle Right White Pyramid/Triangle */}
      <motion.div style={{ y: y1 }} className="absolute top-[45%] right-[8%] xl:right-[15%] z-0 hidden lg:block opacity-90 pointer-events-none">
        <motion.svg animate={{ rotate: [-10, 15, -10], y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} width="110" height="110" viewBox="0 0 120 120" fill="none" className="drop-shadow-2xl">
          <path d="M60 10 L110 100 H10 L60 10 Z" fill="white" stroke="white" strokeWidth="12" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>

      {/* Bottom Right White Squiggle */}
      <motion.div style={{ y: y3 }} className="absolute bottom-20 right-[5%] xl:right-[8%] z-0 hidden md:block opacity-90 pointer-events-none">
        <motion.svg animate={{ rotate: [20, 0, 20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} width="130" height="150" viewBox="0 0 120 140" fill="none" className="drop-shadow-2xl">
          <path d="M25,25 C85,-5 110,45 65,80 C20,115 10,75 45,120" stroke="white" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>

      {/* === Text Content & Search === */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center mt-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[72px] font-bold text-primary-foreground leading-[1.12] tracking-tight"
        >
          Get Access to Hundreds <br /> Courses Available
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-sm md:text-base lg:text-lg text-primary-foreground/90 max-w-2xl font-medium tracking-wide"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex items-center bg-white p-2.5 rounded-full w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus-within:ring-4 focus-within:ring-accent/40 transition-all hover:shadow-[0_15px_40px_rgba(250,204,21,0.25)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="pl-5 pr-3 text-muted-foreground">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent border-none outline-none text-foreground py-2 md:py-3 px-2 placeholder:text-gray-400 text-base font-medium"
          />
          <button 
            type="submit"
            className="bg-accent text-accent-foreground font-bold px-10 py-3 md:py-3.5 rounded-full hover:scale-105 active:scale-95 transition-transform"
          >
            Search
          </button>
        </motion.form>
      </div>

      {/* === Center Graphic Group (Arch + Image + Cards) === 
          Grouped together so cards perfectly overlap the arch boundaries */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-16 md:mt-24 w-[100vw] md:w-[700px] lg:w-[850px] aspect-[2/1] flex justify-center items-end mx-auto"
      >
        {/* Perfect Semi-Circle Arch */}
        <div className="absolute bottom-0 w-full h-full bg-accent rounded-t-full z-0 shadow-[0_-20px_80px_rgba(200,255,0,0.15)] overflow-visible" />
        
        {/* Student Image: Positioned inside the container to poke out the top slightly */}
        <div className="relative z-10 w-[100%] h-[130%] pointer-events-none -mb-1">
          <Image
            src="/hero/hero1.png"
            alt="Student holding a laptop"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (Positioned overlapping the arch) */}
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] -left-[2%] md:-left-[5%] bg-white rounded-2xl p-4 md:p-5 shadow-2xl z-20 flex items-center gap-4 hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer group border border-black/5"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-primary rounded-md rotate-45 group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="text-left pr-2 md:pr-4">
            <h4 className="font-bold text-foreground text-[14px] md:text-[15px]">UI/UX Design</h4>
            <p className="text-[10px] md:text-[11px] text-gray-500 font-semibold mt-0.5 tracking-wide whitespace-nowrap">200 Courses • 1000+ Students</p>
          </div>
        </motion.div>

        {/* Floating Card 2: Learning Progress (Positioned overlapping the right arch) */}
        <motion.div 
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[2%] md:-right-[5%] bg-white rounded-2xl p-5 md:p-6 shadow-2xl z-20 w-48 md:w-60 hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer border border-black/5"
        >
          <h4 className="text-[12px] md:text-[13px] text-gray-500 font-semibold mb-2 text-left">Learning Progress</h4>
          <p className="text-3xl md:text-5xl font-black text-foreground mb-3 md:mb-4 text-left">55%</p>
          <div className="w-full h-2 md:h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "55%" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-full bg-accent rounded-full" 
            />
          </div>
        </motion.div>

        {/* Floating Card 3: Happy Students (Positioned deeply inside the arch layout) */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[10%] left-[10%] md:left-[15%] bg-white rounded-2xl p-4 md:p-5 shadow-2xl z-30 hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer border border-black/5"
        >
          <div className="text-left mb-3">
            <h4 className="font-bold text-[13px] md:text-[15px] text-foreground">Happy Students</h4>
            <div className="flex items-center text-[11px] md:text-[12px] font-bold mt-0.5">
              <span className="text-foreground text-[13px]">4.5</span>
              <span className="text-gray-500 ml-1 font-medium">(240)</span>
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent fill-accent ml-1 -mt-0.5" />
            </div>
          </div>
          
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 md:w-11 md:h-11 rounded-full border-[2.5px] border-white bg-slate-200 z-10 flex items-center justify-center text-xs shadow-sm overflow-hidden relative transition-transform hover:-translate-y-1">
                 <div className="absolute bottom-0 w-5 h-5 md:w-7 md:h-7 bg-slate-400 rounded-t-full opacity-50" />
                 <div className="absolute top-1.5 md:top-2 w-3 h-3 md:w-4 md:h-4 bg-slate-400 rounded-full opacity-50" />
              </div>
            ))}
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full border-[2.5px] border-white bg-accent z-10 flex items-center justify-center text-[11px] md:text-[14px] font-black text-accent-foreground shadow-sm transition-transform hover:-translate-y-1">
              2K+
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}