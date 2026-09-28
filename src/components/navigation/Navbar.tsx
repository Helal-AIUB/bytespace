"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger the sticky glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary/80 backdrop-blur-md shadow-lg py-4 border-b border-white/10" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-accent text-accent-foreground w-8 h-8 rounded flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
            b
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary-foreground">
            ByteSpace
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground">
          {["Home", "Courses", "Creators"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
              className="relative py-1 group overflow-hidden"
            >
              <span className="group-hover:text-accent transition-colors duration-300">
                {item}
              </span>
              {/* Animated underline effect on hover */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-foreground">
          <Link href="/login" className="hover:text-accent transition-colors duration-300">
            Sign In
          </Link>
          <Link href="/register" className="hover:text-accent transition-colors duration-300">
            Join Us
          </Link>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative group">
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </motion.header>
  );
}