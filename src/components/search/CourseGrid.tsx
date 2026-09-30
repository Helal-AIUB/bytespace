"use client";

import Image from "next/image";
import { Star, Signal, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface CourseGridProps {
  selectedTab: string;
  searchQuery?: string; // সার্চ কুয়েরি রিসিভ করার জন্য
}

export function CourseGrid({ selectedTab, searchQuery = "" }: CourseGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      studio: "by purepearl studio",
      image: "/courses/course1.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "UI/UX Design",
    },
    {
      id: 2,
      title: "Build Digital Asset",
      studio: "by purepearl studio",
      image: "/courses/course2.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "Featured",
    },
    {
      id: 3,
      title: "the Power of Big Data",
      studio: "by purepearl studio",
      image: "/courses/course3.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "Featured",
    },
    {
      id: 4,
      title: "Balancing Productivity and...",
      studio: "by purepearl studio",
      image: "/courses/course1.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "Marketing",
    },
    {
      id: 5,
      title: "Mastering Money Management",
      studio: "by purepearl studio",
      image: "/courses/course2.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "Business",
    },
    {
      id: 6,
      title: "From Idea to Startup Success",
      studio: "by purepearl studio",
      image: "/courses/course3.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      category: "Featured",
    },
    {
      id: 7,
      title: "Advanced Animation Techniques",
      studio: "by purepearl studio",
      image: "/courses/course1.jpg",
      lessons: "14 Lessons",
      duration: "1 hours 45 mins",
      comments: "32 Comments",
      rating: 4.8,
      level: "Intermediate",
      price: 35,
      category: "Animation",
    },
    {
      id: 8,
      title: "Social Media Growth Hacks",
      studio: "by purepearl studio",
      image: "/courses/course2.jpg",
      lessons: "12 Lessons",
      duration: "1 hours 20 mins",
      comments: "41 Comments",
      rating: 4.6,
      level: "Beginner",
      price: 20,
      category: "Social Media",
    },
    {
      id: 9,
      title: "Creative Marketing Masterclass",
      studio: "by purepearl studio",
      image: "/courses/course3.jpg",
      lessons: "20 Lessons",
      duration: "3 hours 10 mins",
      comments: "88 Comments",
      rating: 4.9,
      level: "Advanced",
      price: 45,
      category: "Creative Marketing",
    },
  ];

  // Smart Search & Category Filtering Logic
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = 
      selectedTab === "Featured" || 
      course.category.toLowerCase() === selectedTab.toLowerCase();

    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 font-sans">
      
      {filteredCourses.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No courses found</h3>
          <p className="text-gray-500">Try searching with a different keyword or category.</p>
        </div>
      ) : (
        <>
          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[24px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative w-full h-[180px] bg-gray-100 rounded-xl mb-4 overflow-hidden group">
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between gap-1 z-20">
                      <span className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold text-gray-800">
                        {course.lessons}
                      </span>
                      <span className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold text-gray-800">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[#0F172A] text-lg leading-snug">{course.title}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-gray-800 bg-amber-50 px-2 py-0.5 rounded-full">
                      <span>{course.rating}</span>
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-medium mb-5">{course.studio}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Signal className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-xs font-bold text-gray-700">{course.level}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                          <Image src={`https://i.pravatar.cc/100?img=${i + (idx * 4)}`} alt="avatar" fill sizes="30px" className="object-cover" />
                        </div>
                      ))}
                      <div className="w-7 h-7 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[9px] font-bold shadow-sm">
                        26+
                      </div>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-blue-600">${course.price}</span>
                    <span className="text-xs text-gray-400 font-medium">/lifetime</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex items-center justify-center gap-3 mt-14">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-bold transition-all shadow-sm ${
                  currentPage === page 
                    ? "bg-[#d9fc36] text-[#0F172A]" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-500"
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}

    </section>
  );
}