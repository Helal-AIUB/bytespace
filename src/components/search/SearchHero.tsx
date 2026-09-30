"use client";

import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Propertie-gulo define korchi
interface SearchHeroProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export function SearchHero({ searchQuery = "", setSearchQuery }: SearchHeroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Courses");

  const categories = ["Courses", "Categories", "Business", "IT", "Design", "Marketing"];

  return (
    <section className="relative w-full bg-[#0c40e8] pt-12 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === Main Heading & Search Bar === */}
        <div className="flex flex-col items-center text-center mt-6">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight mb-10"
          >
            Find Your Next Course
          </motion.h1>

          {/* Search Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-3xl"
          >
            {/* Search Input */}
            <div className="relative flex-1 w-full bg-white rounded-full shadow-lg flex items-center px-6 h-[56px]">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder="Search" 
                className="w-full bg-transparent border-none outline-none text-[#0F172A] text-base font-medium placeholder:text-gray-400"
              />
            </div>

            {/* Dropdown Button */}
            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full sm:w-[140px] h-[56px] bg-[#d9fc36] text-[#0F172A] font-bold px-6 rounded-full flex items-center justify-between hover:brightness-105 transition-all shadow-lg"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-[140px] bg-white rounded-2xl shadow-xl overflow-hidden z-50 border border-gray-100 py-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}