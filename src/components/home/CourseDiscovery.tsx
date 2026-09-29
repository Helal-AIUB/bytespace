"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, coursesData } from "../../data/courses";
import { CourseCard } from "../courses/CourseCard";

export function CourseDiscovery() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses = coursesData.filter((course) =>
    course.category.includes(activeCategory)
  );

  return (
    <section className="w-full bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4 tracking-tight">
            Discover Your Passion, <br className="hidden md:block" /> Build Your Skills
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-5xl"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#bef264] text-gray-900 shadow-sm"
                  : "bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
            + More
          </button>
        </motion.div>

        {/* Course Grid with Layout Animations */}
        <motion.div 
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}