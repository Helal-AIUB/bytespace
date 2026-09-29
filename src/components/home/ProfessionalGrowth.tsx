"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Signal, Star } from "lucide-react";
import { useRef } from "react";

export function ProfessionalGrowth() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced scroll parallax effects for floating elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const floatY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-20 md:py-32 border-y border-gray-100"
    >
      {/* Modified gradient: Concentrated at top-left with a slightly deeper lime-yellow tone */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#eefc95_0%,_transparent_65%)] opacity-80 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* === Left Content (Text & Stats) === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#0F172A] leading-[1.15] -tracking-[0.02em] mb-6">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-base md:text-lg text-[#64748B] leading-relaxed mb-12 font-normal">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Grid */}
            <div className="flex items-center gap-12 md:gap-16">
              <div className="flex flex-col gap-1">
                <span className="text-4xl md:text-[42px] font-bold text-blue-600 tracking-tight">
                  12K
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Students
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl md:text-[42px] font-bold text-blue-600 tracking-tight">
                  70+
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Courses
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl md:text-[42px] font-bold text-blue-600 tracking-tight">
                  16
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Creators
                </span>
              </div>
            </div>
          </motion.div>

          {/* === Right Content (Interactive Visuals) === */}
          <div className="relative w-full h-[500px] md:h-[650px] flex items-end justify-center lg:justify-end mt-10 lg:mt-0">
            
            {/* Floating Mini Course Card - Shifted to the right */}
            <motion.div
              style={{ y: floatY2 }}
              className="absolute top-[8%] md:top-[12%] left-4 md:left-8 lg:left-2 z-10 bg-white p-3 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-60 md:w-64 border border-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <Image
                  src="/courses/course1.jpg"
                  alt="Course Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold text-[15px] text-gray-900 leading-tight mb-1 truncate">
                Learn Figma from Basic
              </h4>
              <p className="text-[11px] text-blue-500 mb-3 truncate">
                by purepearl studio
              </p>

              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                  <Signal className="w-3 h-3 text-gray-500" />
                  <span className="text-[11px] font-medium text-gray-600">
                    Beginner
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-base font-bold text-blue-600">$25</span>
                <span className="text-[10px] text-gray-400">/lifetime</span>
              </div>
            </motion.div>

            {/* The Main Student Image - Moved slightly up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-16 md:bottom-24 -right-5 md:-right-16 lg:-right-20 w-[120%] md:w-[130%] h-[120%] md:h-[130%] z-20 pointer-events-none"
            >
              <Image
                src="/hero/hero1.png"
                alt="Student learning"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>

            {/* The Squiggly Icon - Moved up to align with progress card */}
            <motion.div
              style={{ y: floatY1 }}
              className="absolute top-[22%] md:top-[22%] -right-4 md:-right-18 z-40 w-32 h-32 md:w-44 md:h-44"
            >
              <Image
                src="/icon/icon1.jpg"
                alt="Decorative Shape"
                fill
                className="object-contain mix-blend-multiply drop-shadow-xl"
              />
            </motion.div>

            {/* Floating Progress Card - Moved slightly up */}
            <motion.div
              style={{ y: floatY3 }}
              className="absolute top-[42%] md:top-[40%] right-0 md:-right-12 z-30 bg-white p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] w-52 md:w-60 border border-gray-50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs md:text-sm text-gray-500 font-medium">
                  Learning Progress
                </h4>
              </div>
              <p className="text-3xl md:text-[40px] font-black text-[#0F172A] mb-4">
                55%
              </p>
              <div className="w-full h-2 md:h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-accent rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}