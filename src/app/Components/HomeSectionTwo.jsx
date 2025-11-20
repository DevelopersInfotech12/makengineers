"use client"

import React, { useState, useEffect } from 'react';
import { Scale, Award, Target, ArrowRight, Phone, Mail, Users, Wrench } from 'lucide-react';

const HomeSectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Premium Metalizing Systems",
      description:
        "We manufacture robust, high-performance metalizing equipment engineered for precision, reliability, and long-term industrial use."
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Engineering Excellence",
      description:
        "Every machine is designed with superior craftsmanship, ensuring consistent coating quality, reduced downtime, and exceptional durability."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Performance You Can Trust",
      description:
        "Our thermal spray and metalizing systems deliver top-tier results across fabrication, automotive, energy, and heavy engineering industries."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer-Focused Support",
      description:
        "We offer complete after-sales service, maintenance, and training to ensure uninterrupted performance of your metalizing operations. Our expert team provides timely support and tailored solutions to maximize the efficiency and lifespan of your coating systems."
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Machines Delivered', icon: '⚙️' },
    { number: 15, suffix: '+', label: 'Years of Expertise', icon: '🏭' },
    { number: 40, suffix: '+', label: 'Industries Served', icon: '📊' },
    { number: 2000, suffix: '+', label: 'Satisfied Clients', icon: '🤝' }
  ];

  const CountUpNumber = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(target * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [target, duration, isVisible]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section className="relative bg-slate-50 pb-20 pt-8 overflow-hidden">

      {/* Animated Orange Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-6">

        {/* Header with Orange Accents */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                Why Choose Us
                <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-bold">
                  MAK Engineers
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
          </div>

          <p className="text-base font-sans font-semibold max-w-2xl mx-auto text-slate-600 font-light leading-relaxed">
            Delivering advanced metalizing equipment engineered for durability, precision, and consistent industrial-grade performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-[90%] mx-auto">

          {/* Left - Features with Orange Theme */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className={`group transform text-justify transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative flex gap-8 items-start p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-orange-500 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden group-hover:-translate-y-1">

                  {/* Orange Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon with Orange Gradient */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50 flex items-center justify-center text-white group-hover:shadow-xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] font-sans font-semibold leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image/Visual Section with Orange Effects */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

            {/* Main Visual Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-500 group">

              {/* Orange Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

              {/* Header */}
              <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MAK Engineers</h3>
                    <p className="text-slate-300">Leaders in Metalizing Equipment</p>
                  </div>
                </div>
              </div>

              {/* Engineering Image Section */}
              <div className="relative h-[410px] overflow-hidden">
                <img
                  src="/images/img12.jpg"
                  alt="Industrial metalizing equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                {/* <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="font-bold text-lg">High-Performance Metalizing Solutions</p>
                  <p className="text-sm opacity-90">Engineered for demanding industrial environments</p>
                </div> */}
              </div>
            </div>

            {/* Floating Orange Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Quote with Orange Accent */}
            <div className="absolute -top-4 left-8 bg-white p-6 shadow-xl hover:shadow-orange-500/30 rounded-lg border-l-4 border-orange-500 max-w-xs transform hover:scale-105 transition-all duration-300 animate-pulse">
              <p className="text-sm text-slate-600 italic mb-2 font-semibold">
                "Precision engineering and cutting-edge metalizing technology—built for superior surface protection."
              </p>
              <div className="text-xs text-orange-600 font-bold">MAK Engineers</div>
            </div>

            {/* Additional Decorative Badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl shadow-orange-500/50 transform rotate-6 hover:rotate-12 hover:scale-110 transition-all duration-300">
              <Award className="w-8 h-8" />
            </div>

          </div>
        </div>

        {/* Full-Width Customer-Focused Support Card */}
        <div className={`mt-8 max-w-[90%] mx-auto transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '450ms' }}>
          <div className="group relative flex gap-8 items-start p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-orange-500 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden hover:-translate-y-1">

            {/* Orange Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon with Orange Gradient */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50 flex items-center justify-center text-white group-hover:shadow-xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                {features[3].icon}
              </div>
            </div>

            {/* Content */}
            <div className="relative flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {features[3].title}
              </h3>
              <p className="text-slate-600 text-[15px] font-sans font-semibold leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section with Orange Theme */}
        <div className="relative mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-6 px-8 overflow-hidden">

          {/* Orange Background Blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Stats Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-block mb-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300 shadow-xl group-hover:shadow-orange-500/50">
                  <div className='flex'>
                    <div className="text-4xl mb-3">{stat.icon}</div>

                    <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                      <CountUpNumber target={stat.number} suffix={stat.suffix} />
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative text-center mt-2">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 text-lg">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSectionTwo;