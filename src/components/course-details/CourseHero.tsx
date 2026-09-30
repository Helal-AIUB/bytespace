"use client";

import Image from "next/image";
import { Signal, Star, Users, Share2, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { VideoModal } from "./VideoModal";
import { Course } from "../../data/coursesData";
import { CourseSidebar } from "./CourseSidebar";

export function CourseHero({ course }: { course: Course }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#0c40e8] pt-20 pb-36 px-6 md:px-12 lg:px-20 overflow-visible font-sans text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Information & Share */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            >
              {course.title}
            </motion.h1>
            <p className="text-white/80 text-base md:text-lg font-medium mb-4">
              {course.subtitle}
            </p>
            <p className="text-sm font-semibold text-[#d9fc36]">
              {course.studio}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d9fc36] text-[#0F172A] font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg flex-shrink-0"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
          </div>
        </div>

        {/* Badges / Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/10">
            <Signal className="w-3.5 h-3.5 text-[#d9fc36]" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/10">
            <Star className="w-3.5 h-3.5 fill-[#d9fc36] text-[#d9fc36]" />
            <span>{course.rating} ({course.reviewsCount} reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/10">
            <Users className="w-3.5 h-3.5 text-[#d9fc36]" />
            <span>{course.studentsCount} Students</span>
          </div>
        </div>

        {/* Main Layout: Left Video Box & Right Sidebar Card shifted left */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* Left Video Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[620px] flex-shrink-0 aspect-video rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/20 bg-black/40 relative z-20"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image 
              src={course.image} 
              alt={course.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-[#d9fc36] text-[#0F172A] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(217,252,54,0.6)]"
              >
                <Play className="w-7 h-7 fill-[#0F172A] ml-1" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Sidebar Card shifted left using lg:right-16 (or lg:right-20 for more space) */}
          <div className="w-full lg:w-[420px] lg:absolute lg:right-16 lg:top-0 z-30">
            <CourseSidebar course={course} />
          </div>

        </div>

      </div>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl={course.videoUrl} 
      />
    </section>
  );
}