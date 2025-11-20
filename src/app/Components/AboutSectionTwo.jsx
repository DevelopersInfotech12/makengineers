"use client"

import React, { useEffect, useRef, useState } from 'react';

const AboutSectionTwo = () => {
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
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6 overflow-hidden" ref={sectionRef}>
      
      {/* Enhanced Orange Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section with Orange Accents */}
        <div
          className="text-center mb-12 transition-all duration-1000 ease-out"
          data-id="header"
          style={{
            opacity: isVisible.header ? 1 : 0,
            transform: isVisible.header ? 'translateY(0)' : 'translateY(-30px)'
          }}
        >
          <h2 className="text-3xl sm:text-4xl text-center lg:text-[50px] font-bold text-gray-900 leading-tight mb-2">
            Our <span className='text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-black'>Background</span>
          </h2>
          <div
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full shadow-lg shadow-orange-500/50 transition-all duration-1000 ease-out"
            style={{
              width: isVisible.header ? '96px' : '0px'
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content with Orange Theme */}
          <div className="space-y-6">
            <div
              className="group relative bg-white rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:border-orange-600 hover:shadow-orange-500/20 transition-all duration-700 ease-out overflow-hidden"
              data-id="card1"
              style={{
                opacity: isVisible.card1 ? 1 : 0,
                transform: isVisible.card1 ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              {/* Orange Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="relative text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                India's Leading Metallurgy & Thermal Spray Equipment Company
              </h3>
              <p className="relative text-gray-600 leading-relaxed font-sans text-sm text-justify font-semibold">
                KEC is a leading name in the metallurgy and surface-engineering sector, specializing 
                in the design, manufacturing, and deployment of high-precision thermal spray and 
                metalizing equipment. We deliver end-to-end engineering solutions covering system 
                development, automation integration, project execution, and after-sales technical 
                support for industrial coating applications.
              </p>
            </div>

            <div
              className="group relative bg-white rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:border-orange-600 hover:shadow-orange-500/20 transition-all duration-700 ease-out overflow-hidden"
              data-id="card2"
              style={{
                opacity: isVisible.card2 ? 1 : 0,
                transform: isVisible.card2 ? 'translateX(0)' : 'translateX(-50px)',
                transitionDelay: '150ms'
              }}
            >
              {/* Orange Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="relative text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Large-Scale Industrial Metallurgy Projects
              </h3>
              <p className="relative text-gray-600 leading-relaxed font-sans text-sm text-justify font-semibold">
                We handle high-value metallurgy and coating system installations across India. Our 
                expertise includes turnkey metalizing plants, robotic thermal spray systems, 
                industrial coating lines, and automated surface-preparation setups engineered for 
                maximum durability, safety, and operational efficiency.
              </p>
            </div>
          </div>

          {/* Industries Section with Orange Theme */}
          <div
            className="group relative bg-white rounded-xl p-8 shadow-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-700 ease-out overflow-hidden"
            data-id="industries"
            style={{
              opacity: isVisible.industries ? 1 : 0,
              transform: isVisible.industries ? 'translateX(0)' : 'translateX(50px)'
            }}
          >
            {/* Orange Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="relative text-2xl font-bold text-gray-800 mb-6 group-hover:text-orange-600 transition-colors duration-300">
              Industries We Serve
            </h3>

            <div className="relative space-y-4 font-sans text-sm">
              {[
                { color: 'bg-orange-500', text: 'Thermal Spray & Metalizing Plants' },
                { color: 'bg-orange-600', text: 'Robotic & Automated Coating Lines' },
                { color: 'bg-orange-500', text: 'Foundry & Casting Industries' },
                { color: 'bg-orange-600', text: 'Steel Plants & Rolling Mills' },
                { color: 'bg-orange-500', text: 'Aerospace & Defense Coating Applications' },
                { color: 'bg-orange-600', text: 'Oil, Gas & Petrochemical Equipment Protection' },
                { color: 'bg-orange-500', text: 'Heavy Machinery & Manufacturing Units' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group/item flex items-center space-x-3 p-2 rounded-lg hover:bg-orange-50 transition-all duration-500 ease-out"
                  style={{
                    opacity: isVisible.industries ? 1 : 0,
                    transform: isVisible.industries ? 'translateX(0)' : 'translateX(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`w-3 h-3 ${item.color} rounded-full shadow-lg shadow-orange-500/50 group-hover/item:scale-125 transition-transform duration-300`}></div>
                  <span className="text-gray-700 font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section with Orange Theme */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2015', label: 'Founded', color: 'text-orange-600' },
            { value: '350+', label: 'Systems Installed Across India', color: 'text-orange-600' },
            { value: '50+', label: 'Industries Served in Metallurgy', color: 'text-orange-600' },
            { value: '100+', label: 'Turnkey & Automated Plants', color: 'text-orange-600' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-orange-500/30 text-center transition-all duration-700 ease-out hover:scale-105 overflow-hidden"
              data-id={`stat${index}`}
              style={{
                opacity: isVisible[`stat${index}`] ? 1 : 0,
                transform: isVisible[`stat${index}`] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Orange Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Orange Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`relative text-3xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="relative text-gray-600 font-sans text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section with Orange Theme */}
        <div className="relative mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-12 px-8 overflow-hidden">
          
          {/* Orange Background Blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Partner with Industry Experts?
            </h3>
            <p className="text-gray-300 text-base mb-6 font-semibold max-w-2xl mx-auto">
              Discover how our metallurgy solutions can transform your manufacturing operations
            </p>
            
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70">
              Learn More About Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;