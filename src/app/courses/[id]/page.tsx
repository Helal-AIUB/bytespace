import { Navbar } from "../../../components/navigation/Navbar";
import { Footer } from "../../../components/navigation/Footer";
import { CourseHero } from "../../../components/course-details/CourseHero";
import { CourseMainContent } from "../../../components/course-details/CourseMainContent";
import { coursesData } from "../../../data/courses";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;

  // Find the basic course from courses.ts
  const foundCourse = coursesData.find((c) => String(c.id) === String(courseId));

  if (!foundCourse) {
    notFound();
  }

  // Map the basic course data to match the detailed Course interface required by CourseHero/Sidebar
  const course = {
    id: foundCourse.id,
    title: foundCourse.title,
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    studio: `by ${foundCourse.author}`,
    level: foundCourse.level,
    rating: foundCourse.rating,
    reviewsCount: foundCourse.comments * 10,
    studentsCount: 759,
    price: foundCourse.price,
    image: foundCourse.image,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "${foundCourse.title}". This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content, from foundational concepts to advanced techniques.`,
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcases and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practice"
    ],
    lessons: Array.from({ length: foundCourse.lessons }, (_, i) => ({
      title: `Lesson ${i + 1}: Core Concepts & Practice`,
      duration: "15 mins",
      preview: i < 3
    })),
    creator: {
      name: foundCourse.author,
      role: "Professional Creator",
      avatar: "https://i.pravatar.cc/100?img=60"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans selection:bg-[#d9fc36] selection:text-[#0F172A]">
      <Navbar />
      
      {/* 1. Hero Section with Title, Video Box & Floating Sidebar */}
      <CourseHero course={course} />

      {/* 2. Main Content (Description, Tabs, Key Points) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <CourseMainContent course={course} />
          {/* Empty spacer div to maintain grid alignment since sidebar is absolute in hero */}
          <div className="hidden lg:block lg:w-1/3 flex-shrink-0" />
        </div>
      </div>

      <Footer />
    </main>
  );
}