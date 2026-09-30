"use client";

import Image from "next/image";
import { CheckCircle2, Video, Star } from "lucide-react";
import { useState } from "react";
import { Course } from "../../data/coursesData";

export function CourseMainContent({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState("About");
  const [activeRatingFilter, setActiveRatingFilter] = useState("All rating");

  const modules = [
    {
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 720, percent: "80%" },
    { stars: 4, count: 120, percent: "30%" },
    { stars: 3, count: 21, percent: "12%" },
    { stars: 2, count: 12, percent: "6%" },
    { stars: 1, count: 16, percent: "8%" },
  ];

  const reviewsList = [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=11",
      review:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=12",
      review:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=13",
      review:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "https://i.pravatar.cc/100?img=14",
      review:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-8 font-sans">
      
      {/* Tabs */}
      <div className="flex items-center gap-3 pb-2">
        {["About", "Lesson", "Reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === tab
                ? "bg-[#d9fc36] text-[#0F172A] shadow-md shadow-[#d9fc36]/20"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 1. ABOUT TAB CONTENT */}
      {activeTab === "About" && (
        <div className="bg-transparent pt-2 flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-4">Description</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Sneak Peak / Image Gallery Grid */}
            <h4 className="text-lg font-bold text-[#0F172A] mb-4">Sneak Peak</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm group border border-gray-100"
                >
                  <Image
                    src={course.image}
                    alt="Gallery Preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Key Points</h3>
            <div className="grid grid-cols-1 gap-3.5">
              {course.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 py-1">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-50 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. LESSON TAB CONTENT */}
      {activeTab === "Lesson" && (
        <div className="bg-transparent pt-2 flex flex-col gap-10">
          <div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-3">Explore the Modules</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
            </p>

            <h4 className="text-lg font-bold text-[#0F172A] mb-6">Lesson List</h4>
            <div className="flex flex-col gap-6">
              {modules.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#d9fc36] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Video className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm md:text-base text-[#0F172A] mb-1">
                      {mod.title}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Lesson Content</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Lesson Progress Tracking</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            <div className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm">
              <span className="text-xs font-semibold text-gray-500 block mb-1">
                Learning Progress
              </span>
              <span className="text-3xl font-black text-[#0F172A] block mb-4">
                55%
              </span>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#d9fc36] rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. REVIEWS TAB CONTENT */}
      {activeTab === "Reviews" && (
        <div className="bg-transparent pt-2 flex flex-col gap-10">
          <div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-3">What Learners Are Saying</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>

            {/* Ratings Overview Card */}
            <div className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-2xl bg-[#d9fc36] flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-xs font-semibold text-[#0F172A]/80 mb-1">Ratings</span>
                <span className="text-4xl font-black text-[#0F172A]">4.7</span>
              </div>

              <div className="flex-1 w-full flex flex-col gap-2.5">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#d9fc36] rounded-full"
                        style={{ width: row.percent }}
                      />
                    </div>
                    <div className="flex items-center gap-0.5 text-gray-700">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gray-800 text-gray-800" />
                      ))}
                    </div>
                    <span className="w-8 text-right font-medium">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews Filter */}
          <div>
            <h4 className="text-base font-bold text-[#0F172A] mb-4">Individual Reviews:</h4>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveRatingFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeRatingFilter === filter
                      ? "bg-[#d9fc36] text-[#0F172A]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Reviews Cards List */}
            <div className="flex flex-col gap-4">
              {reviewsList.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[#0F172A]">{item.name}</h5>
                        <p className="text-xs text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}