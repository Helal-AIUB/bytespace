"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Signal, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

interface CourseGridProps {
  selectedTab: string;
  searchQuery?: string;
}

export function CourseGrid({ selectedTab, searchQuery = "" }: CourseGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

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
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = 
      selectedTab === "Featured" || 
      course.category.toLowerCase() === selectedTab.toLowerCase();

    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mb-20 font-sans">
      
      {filteredCourses.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">No course available</h3>
          <p className="text-sm md:text-base text-gray-500">wait for upcoming courses.</p>
        </motion.div>
      ) : (
        <>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  layout
                  className="h-full"
                >
                  <Link href={`/courses/${course.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white rounded-[24px] p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(12,64,232,0.08)] border border-gray-100/80 flex flex-col justify-between transition-shadow h-full cursor-pointer group"
                    >
                      <div>
                        <div className="relative w-full aspect-[4/3] sm:h-[180px] bg-gray-100 rounded-xl mb-4 overflow-hidden">
                          <Image 
                            src={course.image} 
                            alt={course.title} 
                            fill 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                          />
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between gap-1 z-20">
                            <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold text-gray-800 shadow-sm">
                              {course.lessons}
                            </span>
                            <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold text-gray-800 shadow-sm">
                              {course.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-start mb-1.5">
                          <h3 className="font-bold text-[#0F172A] text-base md:text-lg leading-snug group-hover:text-blue-600 transition-colors duration-300">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-gray-800 bg-amber-50 px-2 py-1 rounded-full shrink-0 ml-2">
                            <span>{course.rating}</span>
                            <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber-400 text-amber-400" />
                          </div>
                        </div>
                        <p className="text-xs text-blue-600 font-medium mb-5">{course.studio}</p>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100 group-hover:border-blue-50 transition-colors">
                          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                            <Signal className="w-3.5 h-3.5 text-gray-500" />
                            <span className="text-[10px] md:text-xs font-bold text-gray-700">{course.level}</span>
                          </div>
                          
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="relative w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                <Image src={`https://i.pravatar.cc/100?img=${i + (idx * 4)}`} alt="avatar" fill sizes="30px" className="object-cover" />
                              </div>
                            ))}
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[8px] md:text-[9px] font-bold shadow-sm group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: "250ms" }}>
                              26+
                            </div>
                          </div>
                        </div>

                        <div className="flex items-baseline gap-1">
                          <span className="text-xl md:text-2xl font-black text-blue-600">${course.price}</span>
                          <span className="text-[10px] md:text-xs text-gray-400 font-medium">/lifetime</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 md:gap-3 mt-14"
          >
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm active:scale-95 cursor-pointer ${
                  currentPage === page 
                    ? "bg-[#d9fc36] text-[#0F172A] scale-110" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </>
      )}

    </section>
  );
}