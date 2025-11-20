"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // Slider data with background images and corresponding text
const slides = [
  {
    background: '/images/img1.webp',
    title: 'METALIZING',
    subtitle: 'MADE POWERFUL',
    quote: '"Delivering high-performance metalizing solutions engineered for lasting protection and superior surface strength."'
  },
  {
    background: '/images/img2.webp',
    title: 'BUILD FOR',
    subtitle: 'INDUSTRIAL TOUGHNESS',
    quote: '"Our equipment is designed to withstand demanding environments, ensuring durability and performance in every application."'
  },
  {
    background: '/images/img4.webp',
    title: 'STRENGTH',
    subtitle: 'THROUGH INNOVATION',
    quote: '"Innovative metalizing technology that enhances efficiency, boosts reliability, and elevates your production standards."'
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images - Each slide as a separate layer */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Blue gradient overlay to maintain your color scheme */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-800/40"></div>
        </div>
      ))}

      {/* Background Pattern - very subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #1e3a8a 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, #1e40af 0%, transparent 50%)`
        }}></div>
      </div>
       
      {/* Decorative Elements - more subtle */}
      <div className="absolute inset-0">
        {/* Left pillar silhouettes */}
        <div className="absolute left-0 bottom-0 w-16 h-full bg-gradient-to-t from-slate-800/30 to-transparent opacity-60 transform -skew-x-12"></div>
        <div className="absolute left-12 bottom-0 w-12 h-5/6 bg-gradient-to-t from-slate-700/25 to-transparent opacity-40 transform -skew-x-12"></div>
        <div className="absolute left-20 bottom-0 w-8 h-4/6 bg-gradient-to-t from-slate-600/20 to-transparent opacity-30 transform -skew-x-12"></div>
                
        {/* Right pillar silhouettes */}
        <div className="absolute right-0 bottom-0 w-16 h-full bg-gradient-to-t from-slate-800/30 to-transparent opacity-60 transform skew-x-12"></div>
        <div className="absolute right-12 bottom-0 w-12 h-5/6 bg-gradient-to-t from-slate-700/25 to-transparent opacity-40 transform skew-x-12"></div>
        <div className="absolute right-20 bottom-0 w-8 h-4/6 bg-gradient-to-t from-slate-600/20 to-transparent opacity-30 transform skew-x-12"></div>
      </div>
       
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main Heading with smooth transitions */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold text-white tracking-wide transition-all duration-1000 transform drop-shadow-lg space-y-4">
            <span className="block transition-opacity duration-1000">
              {slides[currentSlide].title}
            </span>
            {/* <br /> */}
            <span 
              className="transition-all duration-1000 transform drop-shadow-lg" 
              style={{color: '#FFC107'}}
            >
              {slides[currentSlide].subtitle}
            </span>
          </h1>
        </div>
         
        {/* Decorative Line with Dots */}
        <div className="flex items-center mb-12">
          <div className="w-24 md:w-32 h-px bg-white opacity-60"></div>
          <div className="flex space-x-2 mx-4">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFC107'}}></div>
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFC107'}}></div>
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFC107'}}></div>
          </div>
          <div className="w-24 md:w-32 h-px bg-white opacity-60"></div>
        </div>
         
        {/* Quote with smooth transitions */}
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl leading-relaxed font-light mb-16 transition-opacity duration-1000 drop-shadow-md">
          {slides[currentSlide].quote}
        </p>

        {/* Slide indicators */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-110 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
         
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="text-white text-sm mb-2 drop-shadow-md">Scroll to Explore</div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors cursor-pointer drop-shadow-lg">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;