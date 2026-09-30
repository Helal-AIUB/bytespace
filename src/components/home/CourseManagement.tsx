"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star, MousePointer2 } from "lucide-react";
import { useRef } from "react";

export function CourseManagement() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced scroll parallax effects for floating elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const floatY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const checkList = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-20 md:py-32"
    >
      {/* Background Gradients: Neon Yellow at bottom-left and faint blue at top-right */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] bg-[radial-gradient(circle_at_bottom_left,_#eefc95_0%,_transparent_50%)] opacity-80 z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[80%] bg-[radial-gradient(circle_at_top_right,_#e0f2fe_0%,_transparent_40%)] opacity-50 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* === Left Content (Interactive Visuals) === */}
          <div className="relative w-full h-[550px] md:h-[650px] flex items-end justify-center lg:justify-start order-2 lg:order-1 mt-10 lg:mt-0">
            {/* Top Blue Card (Total Revenue) - Moved behind the image with z-10 */}
            <motion.div
              style={{ y: floatY2 }}
              className="absolute top-[8%] md:top-[10%] left-0 md:left-4 z-10 bg-[#0c40e8] p-4 rounded-[20px] shadow-2xl w-44 md:w-52 border border-blue-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h4 className="text-[13px] md:text-sm text-blue-100 font-medium leading-tight">
                Total Revenue
              </h4>
              <p className="text-[10px] md:text-xs text-blue-300 mb-2">
                July 1-28
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                $120.29
              </p>
              <div className="w-full h-1.5 bg-blue-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-[#bef264] rounded-full"
                />
              </div>
            </motion.div>

            {/* Bottom Blue Card (Year to Date) - Moved behind the image with z-10 */}
            <motion.div
              style={{ y: floatY1 }}
              className="absolute top-[35%] md:top-[38%] left-[-2%] md:left-0 z-10 bg-[#0c40e8] p-4 rounded-[20px] shadow-2xl w-36 md:w-44 border border-blue-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h4 className="text-[13px] md:text-sm text-blue-100 font-medium leading-tight">
                Year to Date
              </h4>
              <p className="text-[10px] md:text-xs text-blue-300 mb-2">2023</p>
              <p className="text-xl md:text-2xl font-bold text-white mb-3">
                $1,200.38
              </p>
              <div className="bg-[#bef264] text-[#0F172A] text-[10px] md:text-[11px] font-bold px-2.5 py-1 rounded-full inline-block shadow-sm">
                +125
              </div>
            </motion.div>

            {/* Cursor & Name Tag (Mim Khatun) - Kept in front with z-40 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-[35%] left-[8%] md:left-[12%] z-40 flex flex-col items-start"
            >
              <MousePointer2 className="w-5 h-5 md:w-6 md:h-6 text-[#64748B] fill-[#64748B] drop-shadow-md rotate-[-20deg]" />
              <div className="bg-[#64748B] text-white text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-md mt-1 shadow-lg ml-3">
                Mim Khatun
              </div>
            </motion.div>

            {/* The Main Student Image (hero2.png) - Placed in the middle layer with z-20 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20 w-[90%] md:w-[85%] h-[95%] md:h-[100%] pointer-events-none mx-auto lg:mx-0 left-6 md:left-12"
            >
              <Image
                src="/hero/hero2.png"
                alt="Instructor managing courses"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </motion.div>

            <motion.div
              style={{ y: floatY2 }}
              className="absolute top-[27%] right-[-3%] md:right-[10%] z-30 w-28 h-28 md:w-36 md:h-36 rotate-[25deg]"
            >
              <Image
                src="/icon/icon1.jpg"
                alt="Decorative Shape"
                fill
                sizes="(max-width: 768px) 120px, 150px"
                className="object-contain mix-blend-multiply drop-shadow-xl"
              />
            </motion.div>

            {/* Floating Happy Students Card - Placed in front with z-30 */}
            <motion.div
              style={{ y: floatY3 }}
              className="absolute bottom-[10%] md:bottom-[15%] right-[-5%] md:-right-4 z-30 bg-white p-3.5 md:p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] w-56 md:w-64 border border-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-left mb-2.5">
                <h4 className="font-semibold text-[13px] md:text-sm text-gray-800">
                  Happy Students
                </h4>
                <div className="flex items-center text-[11px] md:text-xs font-bold mt-0.5">
                  <span className="text-gray-900">4.5</span>
                  <span className="text-gray-400 ml-1 font-medium">(240)</span>
                  <Star className="w-3 h-3 text-[#FACC15] fill-[#FACC15] ml-1 -mt-0.5" />
                </div>
              </div>

              <div className="flex -space-x-2.5 md:-space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 z-10 flex items-center justify-center overflow-hidden shadow-sm"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="Avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#bef264] z-10 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-gray-900 shadow-sm">
                  2K+
                </div>
              </div>
            </motion.div>
          </div>

          {/* === Right Content (Text & List) === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col max-w-xl order-1 lg:order-2 lg:pl-10"
          >
            <h2 className="text-[36px] md:text-5xl lg:text-[52px] font-semibold text-[#0F172A] leading-[1.15] -tracking-[0.02em] mb-5 md:mb-6">
              Create & Manage <br className="hidden md:block" />
              Courses Easily.
            </h2>

            <p className="text-base md:text-lg text-[#64748B] leading-relaxed mb-8 md:mb-10 font-normal">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className="flex flex-col gap-4 md:gap-5">
              {checkList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0c40e8] flex items-center justify-center shrink-0 shadow-md">
                    <Check
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={3.5}
                    />
                  </div>
                  <span className="text-[15px] md:text-[17px] font-medium text-[#0F172A]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}