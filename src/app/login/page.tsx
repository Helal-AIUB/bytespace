"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Signal } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0c40e8] overflow-hidden flex items-center justify-center font-sans selection:bg-[#d9fc36] selection:text-[#0F172A] py-20 lg:py-0">
      {/* === Background Grid === */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

      {/* === Main Container === */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* ========================================== */}
        {/* LEFT COLUMN (Text & Vertical Cards)        */}
        {/* ========================================== */}
        <div className="flex flex-col w-full relative">
          {/* Header & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 lg:mb-12"
          >
            <Link
              href="/"
              className="flex items-center group mb-8 w-fit hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                <Image
                  src="/icon/logo.jpg"
                  alt="ByteSpace Logo"
                  fill
                  sizes="40px"
                  className="object-contain mix-blend-screen"
                />
              </div>
              <span className="text-[22px] md:text-[26px] font-bold tracking-tight text-white ml-1">
                ByteSpace
              </span>
            </Link>

            <h1 className="text-3xl md:text-[38px] font-bold text-white mb-4 tracking-tight">
              Sign in with ease
            </h1>
            <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed max-w-[380px] font-medium">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </motion.div>

          {/* Graphics Container (Overlapping Cards) */}
          <div className="relative w-full max-w-[500px] h-[480px] ml-10 lg:ml-20">
            {/* Top Hovering Neon Ring */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-15, -5, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top[0%] left[20%] md:left-[5%] z-40 w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl mix-blend-screen"
            >
              <Image
                src="/icon/icon9.jpg"
                alt="Neon Ring"
                fill
                sizes="100px"
                className="object-contain brightness-125 contrast-125"
              />
            </motion.div>

            {/* Front Card (The Power of Big Data) - AT THE TOP */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top- -ml-5 right-0 md:left-[20%] w-[280px] md:w-[320px] bg-white rounded-[24px] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.25)] z-30 border border-gray-50"
            >
              <div className="w-full h-[150px] bg-gray-100 rounded-xl mb-4 relative overflow-hidden group">
                <Image
                  src="/courses/course3.jpg"
                  alt="The Power of Big Data"
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Pills */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-start gap-1 z-20">
                  <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold text-gray-800 shadow-sm">
                    17 Lessons
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold text-gray-800 shadow-sm">
                    2 hours 16 mins
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold text-gray-800 shadow-sm">
                    59 Comments
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-[#0F172A] text-[17px] leading-tight">
                  the Power of Big Data
                </h3>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-800">
                  4.5{" "}
                  <Star className="w-3.5 h-3.5 fill-[#d9fc36] text-[#d9fc36]" />
                </div>
              </div>
              <p className="text-[11px] text-blue-500 font-medium mb-4">
                by purepearl studio
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                  <Signal className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-[10px] font-bold text-gray-700">
                    Beginner
                  </span>
                </div>
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="relative w-6 h-6 rounded-full border-[1.5px] border-white overflow-hidden shadow-sm"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 40}`}
                        alt="avatar"
                        fill
                        sizes="30px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-[1.5px] border-white bg-black text-white flex items-center justify-center text-[8px] font-bold shadow-sm">
                    26+
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back Card (Build Digital Asset) - BELOW IT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[35%] md:top-[20%] left-0 w-[260px] md:w-[280px] bg-white/95 backdrop-blur-md rounded-[24px] p-4 shadow-xl z-20 border border-gray-100"
            >
              <div className="w-full h-[120px] bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                <Image
                  src="/courses/course2.jpg"
                  alt="Course"
                  fill
                  sizes="300px"
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-[9px] font-bold text-gray-800 shadow-sm">
                  17 Lessons
                </div>
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-[#0F172A] text-[15px] leading-tight">
                  Build Digital Asset
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-800">
                  4.5 <Star className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
                </div>
              </div>
              <p className="text-[10px] text-blue-500 font-medium mb-3">
                by purepearl studio
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                  <Signal className="w-3 h-3 text-gray-500" />
                  <span className="text-[10px] font-bold text-gray-600">
                    Beginner
                  </span>
                </div>
                <div className="flex -space-x-1.5 ml-auto">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-200"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 30}`}
                        alt="avatar"
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-5 h-5 rounded-full border border-white bg-black text-white flex items-center justify-center text-[7px] font-bold">
                    26+
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[18px] font-black text-blue-600">
                  $25
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  /lifetime
                </span>
              </div>
            </motion.div>

            {/* Bottom Floating Card (Happy Students) - MOVED SLIGHTLY UP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-[72%] md:top-[75%] right-[5%] md:right-[15%] w-[180px] md:w-[210px] bg-[#d9fc36] rounded-[20px] p-3 shadow-[0_20px_40px_rgba(217,252,54,0.3)] z-40 border-[1.5px] border-white/40"
            >
              <div className="text-left mb-2">
                <h4 className="font-bold text-[11px] md:text-[12px] text-[#0F172A]">
                  Happy Students
                </h4>
                <div className="flex items-center text-[9px] md:text-[10px] font-bold mt-0.5">
                  <span className="text-[#0F172A]">4.5</span>
                  <span className="text-gray-600 ml-1 font-medium">(240)</span>
                  <Star className="w-2.5 h-2.5 fill-[#0F172A] text-[#0F172A] ml-1" />
                </div>
              </div>
              <div className="flex -space-x-1.5 md:-space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="relative w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-[#d9fc36] overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 50}`}
                      alt="avatar"
                      fill
                      sizes="30px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-[#d9fc36] bg-[#0F172A] text-[#d9fc36] flex items-center justify-center text-[8px] md:text-[9px] font-bold">
                  2K+
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Neon Pyramid */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [10, -5, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] left-[-5%] md:left-[0%] z-40  w-20 h-20 md:w-24 md:h-24 drop-shadow-2xl"
            >
              <Image
                src="/icon/icon2.jpg"
                alt="Neon Pyramid"
                fill
                sizes="100px"
                className="object-contain brightness-125 contrast-125"
              />
            </motion.div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN (Compact Login Form)          */}
        {/* ========================================== */}
        <div className="w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-[420px] relative z-50"
          >
            <div className="bg-white w-full rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-50">
              <div className="mb-8">
                <span className="text-blue-600 font-bold text-[12px] uppercase tracking-wider">
                  Sign In
                </span>
                <h2 className="text-[32px] md:text-[36px] font-black text-[#0F172A] tracking-tight mt-1">
                  Welcome Back
                </h2>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {/* Email Input */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="text-[12px] font-bold text-gray-700 ml-1 group-focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="designer@example.com"
                    className="w-full h-[50px] rounded-xl border border-gray-200 bg-gray-50/50 px-5 text-[14px] text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1.5 group">
                  <label className="text-[12px] font-bold text-gray-700 ml-1 group-focus-within:text-blue-600 transition-colors">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full h-[50px] rounded-xl border border-gray-200 bg-gray-50/50 px-5 text-[14px] text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 tracking-widest"
                  />
                </div>

                {/* Sign In Button */}
                <div className="flex justify-end mt-2">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 8px 20px rgba(217, 252, 54, 0.4)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="bg-[#d9fc36] text-[#0F172A] font-bold text-[14px] px-8 py-3.5 rounded-full transition-shadow duration-300"
                  >
                    Sign In
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="h-px bg-gray-100 flex-1"></div>
                  <span className="text-[11px] font-medium text-gray-400">
                    or continue with
                  </span>
                  <div className="h-px bg-gray-100 flex-1"></div>
                </div>

                {/* Social Logins */}
                <div className="flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[60px] h-[48px] rounded-xl border border-gray-200 flex items-center justify-center text-[#0F172A] transition-colors group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 group-hover:text-blue-600 transition-colors"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[60px] h-[48px] rounded-xl border border-gray-200 flex items-center justify-center text-[#0F172A] transition-colors group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 group-hover:text-rose-500 transition-colors"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Footer text */}
                <div className="text-center mt-5">
                  <p className="text-[13px] text-gray-500 font-medium">
                    New user?{" "}
                    <Link
                      href="/register"
                      className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
