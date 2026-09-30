"use client";

import Image from "next/image";
import { PlayCircle, Award, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Course } from "../../data/coursesData";

export function CourseSidebar({ course }: { course: Course }) {
  return (
    <div className="w-full lg:w-[420px] flex-shrink-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100"
      >
        
        {/* Lessons Summary Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
          <h4 className="font-black text-[#0F172A] text-lg whitespace-nowrap">
            Lessons ({course.lessons.length})
          </h4>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
            24 hours
          </span>
        </div>

        {/* Lessons List (Scrollable if many lessons) */}
        <div className="flex flex-col gap-3 mb-8 max-h-[260px] overflow-y-auto pr-1">
          {course.lessons.map((lesson, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-800 truncate">
                  {idx + 1}. {lesson.title}
                </span>
              </div>
              {lesson.preview && (
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full flex-shrink-0">
                  Preview
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1.5 mb-5">
            <span className="text-3xl md:text-4xl font-black text-blue-600">${course.price}</span>
            <span className="text-sm text-gray-400 font-medium">/lifetime</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(217, 252, 54, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#d9fc36] text-[#0F172A] font-bold text-base py-4 rounded-full shadow-lg text-center transition-all"
          >
            Enroll Now
          </motion.button>
        </div>

        {/* Course Features / Includes */}
        <div className="mb-8 pt-6 border-t border-gray-100">
          <h5 className="font-bold text-[#0F172A] text-sm mb-4">This course include:</h5>
          <div className="flex flex-col gap-3 text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Learning Resources</span>
            </div>
            <div className="flex items-center gap-2.5">
              <PlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Quality Lesson Videos</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Private Consultation</span>
            </div>
          </div>
        </div>

        {/* Creator Profile */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
              <Image src={course.creator.avatar} alt="Creator" fill className="object-cover" />
            </div>
            <div>
              <h6 className="font-bold text-sm text-[#0F172A]">{course.creator.name}</h6>
              <p className="text-xs text-gray-500 font-medium">{course.creator.role}</p>
            </div>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline flex-shrink-0">
            View Profile
          </button>
        </div>

      </motion.div>
    </div>
  );
}