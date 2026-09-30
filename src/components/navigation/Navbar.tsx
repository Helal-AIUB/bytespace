"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to trigger the sticky glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/search" },
    { name: "Creators", href: "/creators/1" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-primary/90 backdrop-blur-md shadow-lg py-4 border-b border-white/10"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center group relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-8 h-8 md:w-9 md:h-9 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icon/logo.jpg"
                alt="ByteSpace Logo"
                fill
                sizes="40px"
                className="object-contain mix-blend-screen"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary-foreground -ml-1.5">
              ByteSpace
            </span>
          </Link>

          {/* Center Navigation Links (Desktop & Large Tablet) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-1 group overflow-hidden"
              >
                <span className="group-hover:text-accent transition-colors duration-300">
                  {item.name}
                </span>
                {/* Animated underline effect on hover */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Actions (Desktop & Large Tablet) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-foreground">
            <Link
              href="/login"
              className="hover:text-accent transition-colors duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="hover:text-accent transition-colors duration-300"
            >
              Join Us
            </Link>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative group cursor-pointer">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Controls (Small Devices) */}
          <div className="flex md:hidden items-center gap-3 text-primary-foreground relative z-50">
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative group cursor-pointer">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-8 pb-6 border-t border-white/10 mt-4">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-primary-foreground text-lg font-medium hover:text-accent transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-[1px] w-full bg-white/10 my-2" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground text-lg font-medium hover:text-accent transition-colors duration-300 py-2"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-accent text-[#0F172A] text-center text-lg font-bold py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 shadow-[0_5px_15px_rgba(217,252,54,0.2)]"
                  >
                    Join Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}