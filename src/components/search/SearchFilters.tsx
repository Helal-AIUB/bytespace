"use client";

import { Filter, SlidersHorizontal, ChevronDown, ArrowUpDown } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export function SearchFilters({ selectedTab, setSelectedTab }: SearchFiltersProps) {
  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-8 mb-12 font-sans">
      
      {/* Top Filter Buttons & Sort */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        
        {/* Left Filters */}
        <div className="flex items-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all shadow-sm">
            <Filter className="w-4 h-4 text-gray-500" />
            <span>Filter</span>
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <span>Level</span>
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all shadow-sm">
            <span>Category</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Right Sort Dropdown */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all shadow-sm">
            <ArrowUpDown className="w-4 h-4 text-gray-500" />
            <span>Most relevant</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

      </div>

      {/* Category Pills Slider / Wrap */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedTab === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                isSelected 
                  ? "bg-[#d9fc36] text-[#0F172A] shadow-md shadow-[#d9fc36]/20" 
                  : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

    </div>
  );
}