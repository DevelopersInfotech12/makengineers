"use client"

import React, { useEffect, useRef, useState } from 'react';

const AboutSectionOne = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('[data-id]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      
      {/* Enhanced Orange Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <section className="relative py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Mission Card with Orange Theme */}
          <div 
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-orange-500/30 p-8 transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-orange-500 overflow-hidden"
            data-id="mission"
            style={{
              opacity: isVisible.mission ? 1 : 0,
              transform: isVisible.mission ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.95)',
              transition: 'all 0.8s ease-out'
            }}
          >
            {/* Orange Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative Orange Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative mb-4">
              <h2 
                className="text-4xl font-bold text-gray-800 mb-4 transition-all duration-700"
                style={{
                  opacity: isVisible.mission ? 1 : 0,
                  transform: isVisible.mission ? 'translateY(0)' : 'translateY(-20px)',
                  transitionDelay: '200ms'
                }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-900 leading-tight mb-2">
                  Our <span className='text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-black'>Mission</span>
                </h2>
              </h2>

              <div 
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible.mission ? '64px' : '0px',
                  transitionDelay: '400ms'
                }}
              ></div>
            </div>

            <p 
              className="relative text-gray-600 leading-relaxed mb-6 font-sans font-semibold text-justify transition-all duration-700"
              style={{
                opacity: isVisible.mission ? 1 : 0,
                transform: isVisible.mission ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '500ms'
              }}
            >
              At KEC, our mission is to advance India's metallurgical and surface-engineering 
              ecosystem by delivering world-class thermal spray and metalizing equipment. 
              We strive to empower industries with high-performance coating technologies that 
              enhance durability, improve operational efficiency, and ensure long-term protection 
              of critical industrial assets.
            </p>

            {/* Orange Themed Badges */}
            <div className="relative flex flex-wrap gap-3">
              {[
                { emoji: '⚙️', text: 'Advanced Engineering', bg: 'bg-orange-100', text_color: 'text-orange-800' },
                { emoji: '🔥', text: 'Thermal Spray Expertise', bg: 'bg-orange-100', text_color: 'text-orange-800' },
                { emoji: '🛡️', text: 'Industrial Protection', bg: 'bg-orange-100', text_color: 'text-orange-800' }
              ].map((badge, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 ${badge.bg} ${badge.text_color} rounded-full text-sm font-bold border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-500`}
                  style={{
                    opacity: isVisible.mission ? 1 : 0,
                    transform: isVisible.mission ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                    transitionDelay: `${700 + index * 100}ms`
                  }}
                >
                  {badge.emoji} {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Vision Card with Orange Gradient */}
          <div 
            className="group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl hover:shadow-orange-500/50 p-8 text-white transform hover:scale-105 transition-all duration-300 overflow-hidden"
            data-id="vision"
            style={{
              opacity: isVisible.vision ? 1 : 0,
              transform: isVisible.vision ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)',
              transition: 'all 0.8s ease-out'
            }}
          >
            {/* Decorative Orange Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative mb-6">
              <h2 
                className="text-3xl font-bold mb-4 transition-all duration-700"
                style={{
                  opacity: isVisible.vision ? 1 : 0,
                  transform: isVisible.vision ? 'translateY(0)' : 'translateY(-20px)',
                  transitionDelay: '200ms'
                }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight mb-2">
                  Our <span className='text-white font-black'>Vision</span>
                </h2>
              </h2>

              <div 
                className="h-1 bg-white bg-opacity-80 rounded-full mb-6 shadow-lg transition-all duration-1000 ease-out"
                style={{
                  width: isVisible.vision ? '64px' : '0px',
                  transitionDelay: '400ms'
                }}
              ></div>
            </div>
            
            <p 
              className="relative leading-relaxed mb-6 text-orange-50 font-sans font-semibold text-justify transition-all duration-700"
              style={{
                opacity: isVisible.vision ? 1 : 0,
                transform: isVisible.vision ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '500ms'
              }}
            >
              To be the leading catalyst in India's metallurgical advancement, creating 
              sustainable industrial solutions that harmonize technological innovation with 
              operational excellence and long-term asset protection.
            </p>

            <div 
              className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-700"
              style={{
                opacity: isVisible.vision ? 1 : 0,
                transform: isVisible.vision ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: '700ms'
              }}
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-2 border-white/30">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Innovation First</h3>
                <p className="text-orange-100 text-sm font-semibold">Leading the metallurgy revolution</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Section with Orange Theme */}
        <div className="relative mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-12 px-8 overflow-hidden">
          
          {/* Orange Background Blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <p className="text-gray-300 text-sm font-semibold">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-gray-300 text-sm font-semibold">Systems Delivered</p>
            </div>
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                ISO
              </div>
              <p className="text-gray-300 text-sm font-semibold">Certified Quality</p>
            </div>
          </div>
        </div>
      </section>    
    </div>
  );
};

export default AboutSectionOne;