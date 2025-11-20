"use client"

import React, { useEffect, useRef, useState } from 'react';

const HomeSectionFour = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [activeTab, setActiveTab] = useState(0);

  const clients = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" }
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Happy Clients", icon: "👥" },
    { number: 10, suffix: "K+", label: "Projects Done", icon: "🚀" },
    { number: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
    { number: 50, suffix: "+", label: "Team Members", icon: "💼" }
  ];

  const features = [
    { title: "Premium Quality", desc: "Industrial-grade equipment built to last" },
    { title: "Innovation First", desc: "Cutting-edge metalizing technology" },
    { title: "Expert Support", desc: "24/7 technical assistance available" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.floor(increment * currentStep), stat.number);
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-white overflow-hidden">
      
      {/* Enhanced Orange Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Layout Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300">
              Trusted by Industry Leaders
            </span>

            <div className="flex items-center mb-2">
              <div className="">
                <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                  Our Trusted
                  <div className='flex items-center'>
                    <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-bold">
                      Clients
                    </span>
                    <div className="h-px bg-gradient-to-r from-orange-400 via-orange-500 to-transparent flex-1 max-w-2xl ml-4"></div>
                  </div>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed font-semibold">
              Advanced metalizing equipment engineered for durability, precision, and consistent industrial-grade performance.
            </p>
            
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70">
              <span className="flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Feature Tabs with Orange Theme */}
          <div
            className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500 shadow-lg hover:shadow-orange-500/20 transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            {/* Orange Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="flex gap-2 mb-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-600 text-lg font-semibold">
                  {features[activeTab].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Grid with Orange Hover Effects */}
        <div
          className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl border-2 shadow-lg border-gray-200 p-4 flex items-center justify-center hover:border-orange-500 hover:shadow-orange-500/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Orange Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img
                  src={client.logo}
                  alt={client.name}
                  className="relative z-10 max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += `<div class="text-gray-400 text-xs font-bold text-center">${client.name}</div>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards with Orange Theme */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-3xl hover:shadow-orange-500/30 border-2 border-gray-200 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Orange Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Orange Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-4">
                <div className='flex'>
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-4xl font-black text-gray-900">
                  {counters[index]}<span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">{stat.suffix}</span>
                </div>
                 </div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide group-hover:text-orange-600 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Animated Orange Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section with Orange Theme */}
        <div className="relative mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-16 px-8 overflow-hidden">
          
          {/* Orange Background Blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-gray-300 text-lg mb-8 font-semibold max-w-2xl mx-auto">
              Join hundreds of industry leaders who trust MAK Engineers for their metalizing solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-3xl shadow-orange-500/50 hover:shadow-orange-500/70">
                <span className="flex items-center justify-center gap-2">
                  Schedule a Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/20 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFour;