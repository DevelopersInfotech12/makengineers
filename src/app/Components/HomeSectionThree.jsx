"use client"

import React from 'react';
import Image from 'next/image';

const HomeSectionThree = () => {
 const products = [
  {
    id: 1,
    title: 'Metalizing Equipment',
    description: 'Precision-engineered thermal spray systems delivering unmatched coating excellence. Ideal for high-performance industrial applications requiring long-lasting protective layers.',
    image: '/images/img1.webp',
    tag: 'Premium',
  },
  {
    id: 2,
    title: 'Surface Coating',
    description: 'Revolutionary coating technology for superior durability and performance. Designed to enhance surface protection across heavy machinery and structural components.',
    image: '/images/img2.webp',
    tag: 'Advanced',
  },
  {
    id: 3,
    title: 'Corrosion Protection',
    description: 'Industry-leading solutions for maximum corrosion resistance and longevity. Engineered to safeguard metal assets exposed to extreme environments and harsh conditions.',
    image: '/images/img3.webp',
    tag: 'Industrial',
  },
];

  return (
    <section className="relative py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      
      {/* Enhanced Orange Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Elegant Header with Orange Accents */}
        <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
               Our Featured
                <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-bold">
                  Products
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
            Experience the pinnacle of metalizing and surface-coating innovation
          </p>
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ 
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

              {/* Orange Glowing Card Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-orange-500/50 via-orange-400/30 to-orange-500/50 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 group-hover:border-orange-500/20 group-hover:scale-[1.02]">
                
                {/* Premium Tag with Orange Theme */}
                <div className="absolute top-6 right-6 z-30">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-wider shadow-lg shadow-orange-500/50">
                    {product.tag}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  {/* Orange Gradient Overlay */}
                  <div className="absolute inset-0 z-20 group-hover:from-slate-900/95 group-hover:via-orange-500/10 transition-all duration-700"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                  
                  {/* Image */}
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Animated Orange Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 group-hover:w-full transition-all duration-1000 ease-out z-30 shadow-lg shadow-orange-500/50"></div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-500">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 font-semibold font-sans leading-relaxed mb-6 text-sm text-justify">
                    {product.description}
                  </p>

                  {/* Elegant Orange Button */}
                  <button className="group/btn relative w-full overflow-hidden">
                    <div className="relative flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm border border-orange-400/30 rounded-2xl group-hover/btn:from-orange-600 group-hover/btn:to-orange-700 group-hover/btn:shadow-xl group-hover/btn:shadow-orange-500/50 transition-all duration-500">
                      <span className="text-white font-bold tracking-wide">Discover More</span>
                      <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-white opacity-0 group-hover/btn:opacity-100 transition-all duration-500"></div>
                        <svg className="w-5 h-5 text-white transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-300/30 to-orange-500/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>

                {/* Orange Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
              </div>

              {/* Orange Shadow Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 rounded-3xl blur-2xl transform scale-95 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Elegant Footer CTA with Orange Theme */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6">
            <button className="group/cta relative px-12 py-5 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-xl shadow-orange-500/50 group-hover/cta:shadow-orange-500/70"></div>
              <div className="absolute inset-[2px] bg-white rounded-full"></div>
              <span className="relative flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold tracking-wide">
                View Complete Collection
                <svg className="w-5 h-5 text-orange-500 transform group-hover/cta:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50"></div>
              <span className="text-gray-600 text-sm font-semibold">20+ Premium Solutions Available</span>
            </div>
          </div>
        </div>

        {/* Additional Bottom Stats with Orange Theme */}
        <div className="relative mt-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-8 px-8 overflow-hidden">
          
          {/* Orange Background Blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-300 text-sm font-semibold">Quality Assured</p>
            </div>
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-gray-300 text-sm font-semibold">Customer Support</p>
            </div>
            <div className="group">
              <div className="text-orange-500 text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">ISO</div>
              <p className="text-gray-300 text-sm font-semibold">Certified Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;