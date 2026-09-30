"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Signal, BookOpen, Clock, MessageSquare } from "lucide-react";
import { Course } from "../../types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <motion.div 
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
      >
        {/* Thumbnail Area with Inner Overlay Stats */}
        <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden bg-gray-100 p-2 md:p-2.5">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Overlay Stats at the bottom of the image */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 md:gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-2.5 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-semibold text-gray-700 shadow-sm border border-white/20">
                <BookOpen className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                <span>{course.lessons} Lessons</span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-2.5 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-semibold text-gray-700 shadow-sm border border-white/20">
                <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-2.5 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-semibold text-gray-700 shadow-sm border border-white/20">
                <MessageSquare className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                <span>{course.comments}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1.5">
            <h3 className="font-bold text-[17px] md:text-[18px] text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 ml-2 bg-yellow-50 px-2 py-1 rounded-md">
              <span className="text-sm font-bold text-gray-800">{course.rating}</span>
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#FACC15] text-[#FACC15]" />
            </div>
          </div>

          <p className="text-xs md:text-[13px] text-blue-500 font-medium mb-6">
            by {course.author}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 group-hover:border-blue-100 transition-colors">
              <Signal className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
              <span className="text-xs font-semibold text-gray-600">{course.level}</span>
            </div>

            {/* Overlapping Avatars */}
            <div className="flex -space-x-2.5 md:-space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-200 z-10 flex items-center justify-center text-[10px] overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" width={32} height={32} className="object-cover" />
                </div>
              ))}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#bef264] z-10 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-gray-900 shadow-sm group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: "250ms" }}>
                2K+
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-100 my-4 md:my-5 group-hover:bg-blue-50 transition-colors duration-300" />

          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black text-blue-600">${course.price}</span>
            <span className="text-[11px] md:text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-400 transition-colors duration-300">/lifetime</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}