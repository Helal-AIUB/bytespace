"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://i.pravatar.cc/150?img=47", // Using high-quality placeholder matching the female avatar
    avatarBg: "bg-[#FBBF24]", // Yellowish background like the design
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://i.pravatar.cc/150?img=11", // Male avatar
    avatarBg: "bg-[#334155]", // Dark slate background
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://i.pravatar.cc/150?img=68", // Male avatar
    avatarBg: "bg-[#E2E8F0]", // Light gray background
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function CommunityTestimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFF] py-24 md:py-32">
      
      {/* Background Gradients: Neon-yellow glow on the right, subtle blue on the left */}
      <div className="absolute top-[-10%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_#eefc95_0%,_transparent_60%)] opacity-70 z-0 pointer-events-none blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_#e0f2fe_0%,_transparent_60%)] opacity-60 z-0 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* === Header Row === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[38px] md:text-5xl lg:text-[54px] font-bold text-[#0F172A] leading-[1.15] tracking-tight"
          >
            Discover What Our <br className="hidden md:block" />
            Community Is Saying
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[15px] md:text-base text-gray-600 leading-relaxed font-medium max-w-xl lg:mt-3"
          >
            At ByteSpace, our vibrant community of learners and creators is at the 
            heart of what we do. Hear directly from those who have experienced the 
            transformative journey of learning and creating on our platform. Explore 
            testimonials that reflect the diverse perspectives of enthusiastic learners 
            and accomplished creators.
          </motion.p>
        </div>

        {/* === Testimonial Cards Grid === */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full group transition-all"
            >
              {/* Avatar & Info */}
              <div className="flex flex-col mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center overflow-hidden mb-5 ${testimonial.avatarBg}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-medium text-[#5B6BF9]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-500 text-[15px] leading-[1.7] flex-grow font-medium">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}