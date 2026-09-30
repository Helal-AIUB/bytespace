import { Navbar } from "../../../components/navigation/Navbar";
import { Footer } from "../../../components/navigation/Footer";
import { coursesData } from "../../../data/courses";
import { CourseCard } from "../../../components/courses/CourseCard";
import Image from "next/image";
import { Filter, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const resolvedParams = await params;
  const creatorId = resolvedParams.id;

  const creatorsMap: Record<string, { name: string; role: string; avatar: string; bio: string; productsCount: number; followersCount: number }> = {
    "1": {
      name: "PurePearl Studio",
      role: "Passionate UI/UX, Web designer",
      avatar: "/hero/creator.jpg",
      bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
      productsCount: 6,
      followersCount: 12,
    },
    "purepearl-studio": {
      name: "PurePearl Studio",
      role: "Passionate UI/UX, Web designer",
      avatar: "/courses/course1.jpg",
      bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
      productsCount: 6,
      followersCount: 12,
    },
  };

  const creator = creatorsMap[creatorId] || creatorsMap["1"];

  if (!creator) {
    notFound();
  }

  const creatorCourses = coursesData;

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#d9fc36] selection:text-[#0F172A]">
      
      <Navbar />

      <section className="relative w-full bg-[#0c40e8] pt-28 md:pt-32 pb-28 px-6 md:px-12 lg:px-20 overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl flex-shrink-0">
                <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                    {creator.name}
                  </h1>
                  <span className="bg-[#d9fc36] text-[#0F172A] text-xs font-black px-3.5 py-1 rounded-full shadow-md">
                    Creator
                  </span>
                </div>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {creator.role}
                </p>
              </div>
            </div>

            <button className="bg-[#d9fc36] text-[#0F172A] font-extrabold text-sm px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(217,252,54,0.3)] hover:scale-105 active:scale-95 transition-all w-fit cursor-pointer">
              Follow
            </button>
          </div>

          <div className="max-w-4xl">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
              {creator.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="bg-white text-[#0F172A] font-bold text-xs px-5 py-2.5 rounded-full shadow-md flex items-center gap-2">
              <span className="text-[#0c40e8] font-black">{creator.productsCount}</span> Products
            </div>
            <div className="bg-white text-[#0F172A] font-bold text-xs px-5 py-2.5 rounded-full shadow-md flex items-center gap-2">
              <span className="text-[#0c40e8] font-black">{creator.followersCount}</span> Followers
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Level</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Category</span>
            </button>
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer">
              <span>Most relevant</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </section>

      <Footer />

    </main>
  );
}