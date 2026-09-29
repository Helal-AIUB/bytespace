"use client";

import { motion, Variants } from "framer-motion";
import { PenTool, Smartphone, Laptop, Building2, Megaphone, Camera } from "lucide-react";

const paths = [
  { id: 1, name: "Design", icon: PenTool },
  { id: 2, name: "Development", icon: Smartphone },
  { id: 3, name: "IT & Software", icon: Laptop },
  { id: 4, name: "Business", icon: Building2 },
  { id: 5, name: "Marketing", icon: Megaphone },
  { id: 6, name: "Photography", icon: Camera },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export function LearningPaths() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6 tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#64748B] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various 
            fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.id}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-3xl cursor-pointer hover:border-transparent hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-[#bef264] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-[#0F172A]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[#0F172A] font-semibold text-base md:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                  {path.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}