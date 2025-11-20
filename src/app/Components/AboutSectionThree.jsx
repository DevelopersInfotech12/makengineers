"use client"

import React, { useEffect, useRef, useState } from 'react';

const AboutSectionThree = () => {
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

  // UPDATED VALUES (METALLURGY INDUSTRY)
  const values = [
    {
      icon: "⚙️",
      title: "Engineering Excellence",
      description:
        "We deliver high-precision metallurgy and thermal spray equipment built on advanced engineering standards. Our focus is on accuracy, durability, and reliable performance to ensure superior coating quality across industrial applications."
    },
    {
      icon: "🔥",
      title: "Thermal Spray Innovation",
      description:
        "We continuously refine our metalizing and coating technologies through research-driven development. Our systems are designed to enhance coating adhesion, improve durability, and meet modern industry demands for protective surface engineering."
    },
    {
      icon: "🛡️",
      title: "Industrial Reliability",
      description:
        "Our commitment is to provide dependable solutions that protect critical industrial assets. Through robust machinery and high-performance coating systems, we help industries increase lifespan, operational efficiency, and long-term safety."
    }
  ];

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
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          
          {/* Header with Orange Accents */}
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-bold text-gray-800 mb-3 transition-all duration-800 ease-out"
              data-id="header"
              style={{
                opacity: isVisible.header ? 1 : 0,
                transform: isVisible.header ? 'translateY(0)' : 'translateY(-30px)'
              }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-gray-900 leading-tight mb-2">
                Our <span className='text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-black'>Values</span>
              </h2>
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto shadow-lg shadow-orange-500/50 transition-all duration-1000 ease-out"
              data-id="underline"
              style={{
                width: isVisible.underline ? '96px' : '0px',
                transitionDelay: '200ms'
              }}
            ></div>
          </div>

          {/* Values Cards with Orange Theme */}
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-orange-500/30 p-8 transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-500 overflow-hidden"
                data-id={`card-${index}`}
                style={{
                  opacity: isVisible[`card-${index}`] ? 1 : 0,
                  transform: isVisible[`card-${index}`]
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.9)',
                  transition: 'all 0.7s ease-out',
                  transitionDelay: `${400 + index * 150}ms`
                }}
              >
                {/* Orange Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Orange Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon with Orange Background */}
                <div
                  className="relative text-5xl mb-6 text-center transition-all duration-600"
                  style={{
                    opacity: isVisible[`card-${index}`] ? 1 : 0,
                    transform: isVisible[`card-${index}`] ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                    transitionDelay: `${600 + index * 150}ms`
                  }}
                >
                  <div className="inline-block p-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg shadow-orange-500/50 group-hover:scale-110 group-hover:shadow-orange-500/70 transition-all duration-300">
                    <span className="block" style={{ filter: 'grayscale(0)' }}>{value.icon}</span>
                  </div>
                </div>

                {/* Title with Orange Gradient */}
                <h3
                  className="relative text-2xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text mb-4 text-center transition-all duration-600"
                  style={{
                    opacity: isVisible[`card-${index}`] ? 1 : 0,
                    transform: isVisible[`card-${index}`] ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${700 + index * 150}ms`
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className="relative text-gray-600 leading-relaxed font-sans text-sm text-justify font-semibold transition-all duration-600"
                  style={{
                    opacity: isVisible[`card-${index}`] ? 1 : 0,
                    transform: isVisible[`card-${index}`] ? 'translateY(0)' : 'translateY(15px)',
                    transitionDelay: `${800 + index * 150}ms`
                  }}
                >
                  {value.description}
                </p>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section with Orange Theme */}
          <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Quality Focused', desc: 'ISO certified processes' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'On-time project completion' },
              { icon: '🤝', title: 'Customer First', desc: '24/7 support available' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                data-id={`feature-${index}`}
                style={{
                  opacity: isVisible[`feature-${index}`] ? 1 : 0,
                  transform: isVisible[`feature-${index}`] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.7s ease-out',
                  transitionDelay: `${1200 + index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="text-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-semibold">{feature.desc}</p>
                  </div>
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
                Experience Our Values in Action
              </h3>
              <p className="text-gray-300 text-base mb-6 font-semibold max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust our metallurgy expertise
              </p>
              
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70">
                Discover Our Solutions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSectionThree;