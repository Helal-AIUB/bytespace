import { Course } from "../types/course";

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", 
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", 
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", 
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking"
];

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "pumpion studio",
    image: "/courses/course1.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "UI/UX Design", "Graphic Design"]
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "pumpion studio",
    image: "/courses/course2.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "Marketing", "Freelance & Entrepreneurship"]
  },
  {
    id: "3",
    title: "The Power of Big Data",
    author: "pumpion studio",
    image: "/courses/course3.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "Data Science", "Web Development"]
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    author: "pumpion studio",
    image: "/courses/course4.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "Productivity", "Social Media"]
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    author: "pumpion studio",
    image: "/courses/course5.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "Freelance & Entrepreneurship"]
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    author: "pumpion studio",
    image: "/courses/course6.jpg",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    category: ["Featured", "Creative Marketing", "Freelance & Entrepreneurship"]
  }
];