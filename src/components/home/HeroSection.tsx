"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Star } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push(`/search`);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full pt-28 md:pt-36 lg:pt-40 lg:min-h-screen px-4 md:px-6 flex flex-col items-center lg:justify-between overflow-hidden bg-[#0c40e8]"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:90px_90px] pointer-events-none" />

      <motion.div style={{ y: y1 }} className="absolute top-10 left-[-15%] md:left-[-10%] xl:left-[-6%] z-0 hidden lg:block pointer-events-none">
        <motion.div animate={{ rotate: [20, 10, 20] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-[220px] h-[300px] md:w-[280px] md:h-[360px]">
          <Image 
            src="/icon/icon1.jpg" 
            alt="Yellow Squiggle Shape" 
            fill 
            sizes="(max-width: 1200px) 220px, 280px" 
            className="object-contain mix-blend-screen drop-shadow-[0_20px_40px_rgba(217,252,54,0.15)] brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-[45%] left-[2%] md:left-[6%] xl:left-[8%] z-0 hidden lg:block pointer-events-none">
        <motion.div animate={{ rotate: [-15, 5, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-[120px] h-[160px] md:w-[150px] md:h-[180px]">
          <Image 
            src="/icon/icon3.jpg" 
            alt="White Squiggle Shape" 
            fill 
            sizes="(max-width: 1200px) 120px, 150px" 
            className="object-contain mix-blend-screen drop-shadow-2xl brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute bottom-2 md:bottom-0 -left-[30%] md:left-[27%] xl:left-[8%] z-40 hidden md:block pointer-events-none">
        <motion.div animate={{ scale: [1, 1.05, 1], rotate: [-20, -10, -20] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="relative w-[200px] h-[200px] md:w-[320px] md:h-[320px] transform scale-y-[0.8]">
          <Image 
            src="/icon/icon8.jpg" 
            alt="White Donut Shape" 
            fill 
            sizes="(max-width: 768px) 200px, 320px" 
            className="object-contain mix-blend-screen drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-16 -right-[5%] md:right-[0%] xl:right-[-5%] z-0 hidden lg:block pointer-events-none">
        <motion.div animate={{ rotate: [5, 15, 5] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="relative w-[180px] h-[260px] md:w-[260px] md:h-[340px]">
          <Image 
            src="/icon/icon7.jpg" 
            alt="Green Cylinder Shape" 
            fill 
            sizes="(max-width: 1200px) 180px, 260px" 
            className="object-contain mix-blend-screen drop-shadow-[0_20px_40px_rgba(217,252,54,0.15)] brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[40%] right-[2%] md:right-[8%] xl:right-[12%] z-0 hidden lg:block pointer-events-none">
        <motion.div animate={{ rotate: [-10, 15, -10], y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
          <Image 
            src="/icon/icon5.jpg" 
            alt="White Pyramid Shape" 
            fill 
            sizes="(max-width: 1200px) 140px, 180px" 
            className="object-contain mix-blend-screen drop-shadow-2xl brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute bottom-[5%] md:bottom-[10%] -right-[5%] md:right-[0%] xl:right-[4%] z-0 hidden md:block pointer-events-none">
        <motion.div animate={{ rotate: [20, 0, 20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-[180px] h-[220px] md:w-[260px] md:h-[300px]">
          <Image 
            src="/icon/icon3.jpg" 
            alt="White Squiggle Shape" 
            fill 
            sizes="(max-width: 768px) 180px, 260px" 
            className="object-contain mix-blend-screen drop-shadow-2xl brightness-125 contrast-110" 
          />
        </motion.div>
      </motion.div>

      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-2 md:mt-4 px-2">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.15] md:leading-[1.12] tracking-tight"
        >
          Get Access to Hundreds <br className="hidden sm:block" /> Courses Available
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-4 md:mt-6 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl font-medium tracking-wide"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-8 md:mt-10 flex items-center bg-white p-1.5 md:p-2.5 rounded-full w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus-within:ring-4 focus-within:ring-[#d9fc36]/40 transition-all hover:shadow-[0_15px_40px_rgba(217,252,54,0.25)]"
          onSubmit={handleSearchSubmit}
        >
          <div className="pl-4 md:pl-5 pr-2 md:pr-3 text-muted-foreground">
            <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent border-none outline-none text-[#0F172A] py-2.5 md:py-3 px-1 md:px-2 placeholder:text-gray-400 text-sm md:text-base font-medium w-full"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#d9fc36] text-[#0F172A] font-bold px-6 py-2.5 md:px-10 md:py-3.5 rounded-full shadow-md transition-colors text-sm md:text-base whitespace-nowrap cursor-pointer"
          >
            Search
          </motion.button>
        </motion.form>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
        className="relative mt-12 md:mt-20 lg:mt-auto w-[94vw] sm:w-[80vw] md:w-[700px] lg:w-[850px] aspect-[2/1] flex justify-center items-end mx-auto"
      >
        <div className="absolute bottom-0 w-full h-full bg-[#d9fc36] rounded-t-full z-0 shadow-[0_-20px_80px_rgba(217,252,54,0.15)] overflow-hidden" />
        
        <div className="relative z-10 w-full h-[120%] md:h-[130%] pointer-events-none -mb-1">
          <Image
            src="/hero/hero1.png"
            alt="Student holding a laptop"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 850px"
            priority
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute top-[8%] md:top-[10%] left-[0%] md:-left-[5%] z-20"
        >
          <motion.div 
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-5 shadow-2xl flex items-center gap-2 md:gap-4 hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer group border border-black/5"
          >
            <div className="w-7 h-7 md:w-10 md:h-10 bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-[#0c40e8]/10 transition-colors">
              <div className="w-3.5 h-3.5 md:w-6 md:h-6 border-2 md:border-4 border-[#0c40e8] rounded-sm md:rounded-md rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <div className="text-left pr-1 md:pr-4">
              <h4 className="font-bold text-[#0F172A] text-[11px] md:text-[15px]">UI/UX Design</h4>
              <p className="text-[8px] md:text-[11px] text-gray-500 font-semibold mt-0.5 tracking-wide whitespace-nowrap">200 Courses • 1K+ Students</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="absolute top-[35%] md:top-[40%] right-[0%] md:-right-[5%] z-20"
        >
          <motion.div 
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-2xl w-36 md:w-60 hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer border border-black/5"
          >
            <h4 className="text-[9px] md:text-[13px] text-gray-500 font-semibold mb-1 md:mb-2 text-left">Learning Progress</h4>
            <p className="text-xl md:text-5xl font-black text-[#0F172A] mb-1.5 md:mb-4 text-left">55%</p>
            <div className="w-full h-1 md:h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "55%" }}
                transition={{ duration: 1.5, delay: 1.5, type: "spring" }}
                className="h-full bg-[#0c40e8] rounded-full" 
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-[2%] md:bottom-[5%] left-[2%] md:left-[15%] z-30"
        >
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-5 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all cursor-pointer border border-black/5"
          >
            <div className="text-left mb-1.5 md:mb-3">
              <h4 className="font-bold text-[10px] md:text-[15px] text-[#0F172A]">Happy Students</h4>
              <div className="flex items-center text-[9px] md:text-[12px] font-bold mt-0.5">
                <span className="text-[#0F172A] text-[10px] md:text-[13px]">4.5</span>
                <span className="text-gray-500 ml-1 font-medium">(240)</span>
                <Star className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#FACC15] fill-[#FACC15] ml-1 -mt-0.5" />
              </div>
            </div>
            
            <div className="flex -space-x-1.5 md:-space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-5 h-5 md:w-11 md:h-11 rounded-full border-2 md:border-[2.5px] border-white bg-slate-200 z-10 flex items-center justify-center shadow-sm overflow-hidden relative transition-transform hover:-translate-y-1">
                   <div className="absolute bottom-0 w-3 h-3 md:w-7 md:h-7 bg-slate-400 rounded-t-full opacity-50" />
                   <div className="absolute top-0.5 md:top-2 w-1.5 h-1.5 md:w-4 md:h-4 bg-slate-400 rounded-full opacity-50" />
                </div>
              ))}
              <div className="w-5 h-5 md:w-11 md:h-11 rounded-full border-2 md:border-[2.5px] border-white bg-[#d9fc36] z-10 flex items-center justify-center text-[7px] md:text-[14px] font-black text-[#0F172A] shadow-sm transition-transform hover:-translate-y-1">
                2K+
              </div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}