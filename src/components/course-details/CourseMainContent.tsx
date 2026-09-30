"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Course } from "../../data/coursesData";

export function CourseMainContent({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-8">
      
      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
        {["About", "Lessons", "Reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === tab
                ? "bg-[#0c40e8] text-white shadow-md shadow-blue-500/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description Section */}
      <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <h3 className="text-2xl font-black text-[#0F172A] mb-4">Description</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          {course.description}
        </p>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src={course.image} 
                alt="Gallery Preview" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>

        {/* Key Points / Learning Objectives */}
        <h3 className="text-xl font-bold text-[#0F172A] mb-6">What You Will Learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-bold text-gray-800">{point}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}