"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Signal, BookOpen, Clock, MessageSquare } from "lucide-react";
import { Course } from "../../types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      {/* Thumbnail Area with Inner Overlay Stats */}
      <div className="relative w-full h-[200px] overflow-hidden bg-gray-100 p-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay Stats at the bottom of the image */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-[10px] font-medium text-gray-700">
              <BookOpen className="w-3 h-3 text-gray-500" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-[10px] font-medium text-gray-700">
              <Clock className="w-3 h-3 text-gray-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-[10px] font-medium text-gray-700">
              <MessageSquare className="w-3 h-3 text-gray-500" />
              <span>{course.comments} Comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-[17px] text-gray-900 leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
            <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
          </div>
        </div>
        
        <p className="text-xs text-blue-500 font-medium mb-6">
          by {course.author}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Signal className="w-4 h-4" />
            <span className="text-xs font-medium">{course.level}</span>
          </div>

          {/* Overlapping Avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 z-10 flex items-center justify-center text-[10px] overflow-hidden">
                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" width={28} height={28} />
              </div>
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-white bg-[#bef264] z-10 flex items-center justify-center text-[9px] font-bold text-gray-800">
              2K+
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-100 my-4" />

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">${course.price}</span>
          <span className="text-xs text-blue-300 font-medium bg-blue-50 px-2 py-0.5 rounded-full">/lifetime</span>
        </div>
      </div>
    </motion.div>
  );
}