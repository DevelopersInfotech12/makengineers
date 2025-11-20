'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Banner({ 
  title, 
  subtitle, 
  backgroundImage ,
  // '/images/img9.jpg',
  showButtons = true ,
  height
}) {
  return (
    <div className="relative  w-full overflow-hidden" style={{ height }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>

          <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
            {subtitle}
          </p>

          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Link href="/product">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:bg-orange-600 text-white font-semibold px-8 py-3 transition-colors uppercase tracking-wide">
                  EXPLORE PRODUCTS
                </button>
              </Link>

              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 transition-colors uppercase tracking-wide">
                  CONTACT US
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}