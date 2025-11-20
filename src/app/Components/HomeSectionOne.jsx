'use client';

import { useState, useEffect } from 'react';
import { Scale, Users, Award, BookOpen, ArrowRight, Star, CheckCircle, Shield, Gavel, TrendingUp } from 'lucide-react';

const HomeSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '200+', label: 'Projects Delivered', icon: <Award className="w-6 h-6" />, color: 'from-emerald-500 to-emerald-600' },
    { number: '50+', label: 'Industries Served', icon: <Star className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { number: '20+', label: 'Years Expertise', icon: <Users className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
    { number: 'ISO', label: 'Certified Quality', icon: <CheckCircle className="w-6 h-6" />, color: 'from-orange-500 to-orange-600' }
  ];

  const features = [
    { icon: <Scale className="w-6 h-6" />, title: 'Precision Metalizing Systems', desc: 'Designed for accuracy & consistency' },
    { icon: <Shield className="w-6 h-6" />, title: 'Heavy-Duty Durability', desc: 'Engineered for extreme industrial use' },
    { icon: <Gavel className="w-6 h-6" />, title: 'Advanced Coating Technology', desc: 'Superior adhesion & extended protection' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Performance-Driven Design', desc: 'Optimized for efficiency & output' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 overflow-hidden">

      {/* Animated Background Elements with Orange Glow */}
      <div className="absolute inset-0">
        {/* Orange animated blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>

        {/* Additional purple/blue accents */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header with Orange Badge */}
        <div className={`text-center mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-3 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300">
            <Scale className="w-5 h-5" />
            WE'RE HERE TO HELP
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
              <div className="mx-8">
                <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                  Welcome to.....
                  <span className="block text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text font-bold">
                    MAK Engineers
                  </span>
                </h1>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced metalizing equipment engineered for precision, durability, and superior surface protection across diverse industrial applications.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">

          {/* Left Visual with Orange Glow */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 group hover:shadow-orange-500/20 transition-all duration-500">
                <div className="aspect-square rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="/images/img10.jpg"
                    alt="Metalizing Equipment"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Floating Badges with Orange Theme */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl shadow-orange-500/50 transform rotate-6 hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse">
                <Award className="w-8 h-8" />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-orange-100 hover:scale-110 hover:border-orange-300 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">20+</div>
                  <div className="text-sm text-slate-600 font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-[15px] text-gray-600 leading-relaxed text-justify font-semibold">
                  <span className="text-2xl font-sans text-slate-600 bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text font-bold">
                    MAK Engineers Solutions
                  </span> is a leading manufacturer of advanced metalizing and surface-coating equipment. Our systems enhance durability, corrosion resistance, and overall component performance across automotive, power, fabrication, and heavy engineering industries.
                </p>

                <p className="text-[15px] text-gray-600 leading-relaxed text-justify font-semibold">
                  With decades of expertise in thermal spray technology, arc metalizing, and high-performance coating machinery, we deliver turnkey solutions built for reliability and long-term industrial use. Our engineering excellence ensures machines that increase productivity, reduce maintenance, and deliver superior, consistent results.
                </p>
              </div>
            </div>

            {/* Features Grid with Orange Hover Effects */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-4 py-5 bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-3">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded-lg shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h4>
                      <p className="text-sm font-sans text-gray-600 font-semibold">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70">
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        </div>

        {/* Stats Section with Orange Theme */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-6 px-8 overflow-hidden mb-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-block mb-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 transition-all duration-300 shadow-xl ${hoveredStat === index ? 'border-orange-500 shadow-orange-500/50 scale-110' : 'border-gray-700'
                  }`}>
                  <div className='flex gap-2'>
                    <div className={`bg-gradient-to-r ${stat.color} text-white p-2 rounded-xl mb-3 inline-block shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                  </div>

                  <p className="text-gray-300 text-md font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSectionOne;