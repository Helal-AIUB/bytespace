"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "../../components/navigation/Navbar";
import { SearchHero } from "../../components/search/SearchHero";
import { SearchFilters } from "../../components/search/SearchFilters";
import { CourseGrid } from "../../components/search/CourseGrid";
import { Footer } from "../../components/navigation/Footer";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  const [selectedTab, setSelectedTab] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#d9fc36] selection:text-[#0F172A]">
      <Navbar />
      
      {/* 1. Hero & Search Bar */}
      <SearchHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 2. Filters & Categories */}
      <SearchFilters selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* 3. Course Cards Grid & Pagination */}
      <CourseGrid selectedTab={selectedTab} searchQuery={searchQuery} />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c40e8]" />}>
      <SearchContent />
    </Suspense>
  );
}