"use client";
import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSectionSix = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      quote: "Their investment strategy completely transformed my financial outlook. Within a year, I've seen remarkable growth in my portfolio while keeping my risk managed. The personalized guidance and transparent communication make all the difference. I couldn't ask for better financial partners.",
      name: "Robert J. Hare",
      role: "Investor, Tech Sector",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      quote: "Working with this financial advisory team has been a game-changer for my business. They helped me diversify my investments and create a robust wealth management plan. Their expertise and dedication to understanding my goals set them apart from other firms.",
      name: "Sarah Johnson",
      role: "Business Owner & Investor",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
      quote: "The level of professionalism and financial acumen displayed by this team is exceptional. They navigated me through complex market conditions with clarity and provided actionable investment strategies that delivered consistent returns. Highly recommended for serious investors.",
      name: "Michael Chen",
      role: "Portfolio Manager",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgePop = {
    hidden: { opacity: 0, scale: 0.3, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 py-4 overflow-hidden pt-20">
      
      {/* Enhanced Orange Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary orange blobs with pulse */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Diagonal orange gradient overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        
        {/* Additional orange accent blobs */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Framer Motion animated blobs */}
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title with Orange Accents */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
              <div className="mx-8">
                <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                  What Our Client 
                  <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-bold">
                    Say About Us
                  </span>
                </h1>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
            </div>
            <motion.p
              className="text-gray-700 mt-4 text-lg font-semibold"
              variants={fadeInUp}
            >
              Hear from our satisfied investors and clients about their experience
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            
            {/* Left Side - Image and Rating with Orange Effects */}
            <motion.div
              className="flex flex-col items-center lg:items-start"
              variants={fadeInLeft}
            >
              <div className="relative group">
                {/* Profile Image with Orange Border */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="w-72 h-72 rounded-full overflow-hidden border-8 border-orange-500/40 shadow-2xl shadow-orange-500/30"
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ y: -24 }}
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(249, 115, 22, 0.3)",
                            "0 0 40px rgba(249, 115, 22, 0.5)",
                            "0 0 20px rgba(249, 115, 22, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.img
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover"
                          animate={{
                            filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Quote Icon Badge with Orange Gradient */}
                <motion.div
                  className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/50"
                  variants={badgePop}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Quote className="w-7 h-7 text-white fill-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Star Rating with Orange Theme */}
              <motion.div
                className="mt-8 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg shadow-orange-500/20 border-2 border-orange-300/40"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(249, 115, 22, 0.2)",
                    "0 0 25px rgba(249, 115, 22, 0.4)",
                    "0 0 10px rgba(249, 115, 22, 0.2)"
                  ]
                }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.6 },
                  x: { delay: 0.6, duration: 0.6 },
                  boxShadow: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1
                      }}
                    >
                      <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Testimonial Content with Orange Accents */}
            <motion.div
              className="relative space-y-6 text-justify bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-orange-200/50 hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden group"
              variants={fadeInRight}
            >
              {/* Orange Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="prose prose-lg">
                    <motion.p
                      className="text-gray-700 text-base leading-relaxed font-semibold"
                      animate={{
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {current.quote}
                    </motion.p>
                  </div>

                  {/* Author Info with Orange Accent */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-1"
                      animate={{
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1
                      }}
                    >
                      {current.name}
                      <span className="text-orange-600 font-bold"> /</span>
                    </motion.h3>
                    <p className="text-gray-600 font-sans font-semibold">
                      {current.role}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons with Orange Theme */}
              <motion.div
                className="flex gap-3 pt-4"
                variants={fadeInUp}
              >
                <motion.button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 border-2 border-orange-300/50 hover:bg-orange-500 hover:border-orange-500 group/btn transition-colors duration-300"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -4, 0]
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-orange-600 group-hover/btn:text-white transition-colors duration-300" />
                </motion.button>

                <motion.button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 border-2 border-orange-300/50 hover:bg-orange-500 hover:border-orange-500 group/btn transition-colors duration-300"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -4, 0]
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1
                    }
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-orange-600 group-hover/btn:text-white transition-colors duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSix;