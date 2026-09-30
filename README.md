<div align="center">

# 🚀 ByteSpace

**A premium, highly interactive frontend web application for a modern course platform, built with a focus on fluid animations, responsive design, and exceptional user experience.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ByteSpace-0c40e8?style=for-the-badge&logo=vercel)](https://bytespace-com.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styled-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animated-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

<br />

[Live Demo](https://bytespace-com.vercel.app/) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📸 Project Preview

*(Note: Replace these placeholder image paths with actual screenshots from your project directory)*

### Desktop Experience
<img width="1897" height="860" alt="home" src="https://github.com/user-attachments/assets/b3d3ab49-342b-43bf-9f4b-e1ef859e93e6" />

### Tablet & Mobile Adaptability
<img width="600" height="777" alt="tab" src="https://github.com/user-attachments/assets/820e18cf-371a-41af-a1eb-9a31d1bdfbd1" />
<img width="257" height="588" alt="phone2" src="https://github.com/user-attachments/assets/5b1e8df7-c43f-4fc5-b4a2-a00de468209d" />



---

## 💡 About ByteSpace

ByteSpace is a modern frontend interface designed for an online learning and course creation platform. The goal of this project was to translate high-fidelity Figma designs into a pixel-perfect, fully responsive, and highly interactive web application. 

It provides users with a seamless browsing experience to discover courses, view creator profiles, and track learning progress. The design philosophy centers around a bold signature blue and neon yellow color palette, enhanced by fluid micro-interactions, parallax scrolling effects, and glassmorphism elements to create a premium, engaging environment.

---

## ✨ Key Features

- **Dynamic Interactive UI:** High-performance, staggered entrance animations and smooth hover states for course cards and interactive elements.
- **Advanced Parallax Scrolling:** Implementation of scroll-linked floating 3D geometric shapes to create depth and immersion.
- **Smart Course Filtering:** Client-side dynamic filtering and pagination for course discovery based on categories and search queries.
- **Dynamic Routing:** Seamless navigation to individual course details and dedicated creator profiles using Next.js App Router.
- **Responsive Navigation:** A sticky, glassmorphism-styled navigation bar that smoothly transitions into a fluid, animated drawer menu on mobile devices.
- **Custom Error Handling:** A beautifully designed custom 404 (`not-found`) page that maintains the overarching design system.
- **Grid Patterns & Layouts:** CSS-based precision grid backgrounds to establish a consistent, modern aesthetic without heavy image assets.

---

## 📱 Responsive Design

This application was engineered with a mobile-first approach and meticulously tested across device breakpoints to ensure a flawless experience everywhere.

- **📱 Mobile (Small Screens):** Simplified navigation drawer, stacked vertical layouts, optimized touch targets, and scaled-down typography/animations to maintain performance and readability.
- **📲 Tablet (Medium Screens):** Two-column grid adaptations, balanced padding, and repositioned interactive elements to utilize mid-sized real estate effectively.
- **💻 Desktop (Large Screens):** Full-width immersive layouts, complex multi-column grids, expansive parallax effects, and detailed interactive hover states.

---

## 🛠️ Technologies Used

The tech stack was carefully chosen for performance, maintainability, and modern development standards:

- **[React](https://reactjs.org/) & [Next.js (App Router)](https://nextjs.org/):** Core framework providing server-side rendering architecture, file-based dynamic routing, and optimized image/font handling.
- **[TypeScript](https://www.typescriptlang.org/):** Ensures type safety, predictable code behavior, and robust component props interfaces.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework used for rapid UI development, strict design system adherence, and complex responsive styling.
- **[Framer Motion](https://www.framer.com/motion/):** Powers the complex UI choreography, including scroll-linked parallax, staggered list entrances, spring-based interactions, and the `AnimatePresence` mobile menu.
- **[Lucide React](https://lucide.dev/):** Lightweight, scalable vector icons used consistently throughout the interface.

---

## 🧩 Project Structure

A clean, modular, component-based architecture for maintainability:

```text
src/
├── app/
│   ├── (routes)/
│   │   ├── courses/[id]/page.tsx
│   │   ├── creators/[id]/page.tsx
│   │   └── search/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── navigation/       # Navbar, Footer, MobileMenu
│   ├── home/             # HeroSection, ProfessionalGrowth, CreatorSection
│   ├── courses/          # CourseGrid, CourseCard
│   └── course-details/   # CourseSidebar, VideoModal, Testimonials
├── data/                 # Mock static data (courses, creators)
└── styles/
    └── globals.css       # Global styles, Tailwind directives, font variables
