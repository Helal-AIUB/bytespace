export interface Lesson {
  title: string;
  duration: string;
  preview: boolean;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  studio: string;
  level: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  image: string;
  videoUrl: string;
  description: string;
  keyPoints: string[];
  lessons: Lesson[];
  creator: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const coursesData: Record<string, Course> = {
  "build-digital-asset": {
    id: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    studio: "by purepearl studio",
    level: "Intermediate",
    rating: 4.5,
    reviewsCount: 510,
    studentsCount: 759,
    price: 25,
    image: "/courses/course1.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder demo video
    description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide". This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcases and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practice",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio"
    ],
    lessons: [
      { title: "Introduction to Digital Assets", duration: "12 mins", preview: true },
      { title: "Design Principles for Impactful", duration: "24 mins", preview: true },
      { title: "Advanced Techniques in Digital Creation", duration: "45 mins", preview: true },
      { title: "Optimizing Asset Workflow", duration: "30 mins", preview: false },
      { title: "Monetization and Management", duration: "35 mins", preview: false }
    ],
    creator: {
      name: "PurePearl Studio",
      role: "Professional Creator",
      avatar: "https://i.pravatar.cc/100?img=60"
    }
  },
  "the-power-of-big-data": {
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Master analytics and large-scale data processing systems",
    studio: "by purepearl studio",
    level: "Beginner",
    rating: 4.8,
    reviewsCount: 320,
    studentsCount: 1240,
    price: 25,
    image: "/courses/course3.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: `Discover how big data is transforming modern industries. This course provides a robust introduction to data pipelines, visualization tools, and database management frameworks.`,
    keyPoints: [
      "Introduction to Big Data Ecosystem",
      "Data Cleaning and Preprocessing",
      "Real-time Analytics Dashboard Setup",
      "Introduction to Spark & Hadoop"
    ],
    lessons: [
      { title: "What is Big Data?", duration: "15 mins", preview: true },
      { title: "Setting up Environment", duration: "25 mins", preview: true },
      { title: "Pipeline Architecture", duration: "50 mins", preview: false }
    ],
    creator: {
      name: "PurePearl Studio",
      role: "Professional Creator",
      avatar: "https://i.pravatar.cc/100?img=60"
    }
  }
};