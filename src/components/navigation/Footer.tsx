"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  // Restructured to fix TypeScript "Object is possibly undefined" error
  const footerColumns = [
    {
      title: "Column 1",
      links: [
        "Featured Courses",
        "Featured Categories",
        "Business",
        "IT",
        "Design",
      ],
    },
    {
      title: "Column 2",
      links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
    },
    {
      title: "Column 3",
      links: [
        "Become a Creator",
        "Affiliate Program",
        "Contact",
        "Help",
        "About",
      ],
    },
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* === Top Section (Newsletter & Links) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Left Column: Logo & Newsletter */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/icon/logo.jpg"
                  alt="ByteSpace Logo"
                  fill
                  sizes="32px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[22px] font-black tracking-tight text-[#0F172A]">
                ByteSpace
              </span>
            </Link>

            <p className="text-[13px] text-gray-500 mb-6 font-medium leading-relaxed max-w-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Input & Button */}
            <form
              className="flex w-full max-w-md gap-3 mb-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[46px] rounded-full border border-gray-200 px-5 text-[14px] text-gray-700 outline-none focus:border-[#d9fc36] focus:ring-2 focus:ring-[#d9fc36]/20 transition-all placeholder:text-gray-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="h-[46px] px-8 bg-[#d9fc36] text-[#0F172A] font-bold text-[14px] rounded-full hover:shadow-lg hover:shadow-[#d9fc36]/20 transition-shadow"
              >
                Search
              </motion.button>
            </form>

            <p className="text-[11px] text-gray-400 leading-relaxed max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links with Premium Interactive Hover Effect */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-4 pt-2 lg:pt-0">
            {footerColumns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`flex flex-col gap-4 ${colIndex === 2 ? "col-span-2 sm:col-span-1 mt-4 sm:mt-0" : ""}`}
              >
                {col.links.map((link, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="group relative flex items-center text-[13px] text-gray-500 font-medium hover:text-blue-600 transition-colors duration-300 w-fit"
                  >
                    {/* The dash that appears on hover */}
                    <span className="absolute left-[-10px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 text-blue-600">
                      -
                    </span>
                    {/* The text that slides right on hover */}
                    <span className="group-hover:translate-x-3 transition-transform duration-300">
                      {link}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* === Bottom Divider === */}
        <div className="w-full h-px bg-gray-200 mb-6" />

        {/* === Bottom Section (Copyright & Legal) === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-500 font-medium">
            @ 2026 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[12px] text-gray-500 font-medium hover:text-[#0F172A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[12px] text-gray-500 font-medium hover:text-[#0F172A] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[12px] text-gray-500 font-medium hover:text-[#0F172A] transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
