import React from 'react';
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 py-8 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-3 border border-slate-900/10">
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span className="text-slate-900 font-bold text-sm tracking-wide">PREMIUM INDUSTRIAL SOLUTIONS</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-4xl font-black text-slate-900 mb-2 max-w-5xl mx-auto leading-tight tracking-tight">
            Looking for Metalizing Equipment or Coating Solutions?
          </h2>

          <p className="text-xl md:text-2xl text-slate-800/90 mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Get expert guidance on thermal spray systems, coating machinery, and customized industrial solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
            <a
              href="/contact"
              className="group relative bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-slate-900/50 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+919811898418"
                className="group flex items-center gap-3 text-base font-bold bg-white/95 backdrop-blur-sm hover:bg-white text-slate-900 px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <div className="bg-yellow-500 p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-slate-900" />
                </div>
                <span className="whitespace-nowrap">+91-9811898418</span>
              </a>

              <a
                href="tel:+919910356257"
                className="group flex items-center gap-3 text-base font-bold bg-white/95 backdrop-blur-sm hover:bg-white text-slate-900 px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <div className="bg-yellow-500 p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-slate-900" />
                </div>
                <span className="whitespace-nowrap">+91-9910356257</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 pt-12 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company Showcase */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-8 pb-6 border-b border-slate-700/30">
            <div className="mb-12 lg:mb-0 max-w-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-28 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/20 p-1">
                  <div className="w-full h-full rounded-3xl flex items-center justify-center">
                    <img src="/images/logo.png" alt="MAK Engineers Logo" className="w-36 h-24 object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white tracking-tight mb-2">MAK ENGINEERS</h3>
                  <p className="text-yellow-400 font-bold text-lg tracking-wide">Metallurgy & Machine Expert</p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                Engineered coating systems and metalizing solutions designed to elevate industrial productivity with unmatched precision and reliability.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-600/30">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300 font-semibold">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-600/30">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300 font-semibold">20+ Years</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-500 shadow-xl group-hover:shadow-yellow-500/50 group-hover:scale-110 border border-slate-600/30">
                  <Clock className="w-10 h-10 text-yellow-400 group-hover:text-slate-900 transition-colors duration-500" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Always Available</p>
              </div>
              
              <div className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-500 shadow-xl group-hover:shadow-yellow-500/50 group-hover:scale-110 border border-slate-600/30">
                  <MapPin className="w-10 h-10 text-yellow-400 group-hover:text-slate-900 transition-colors duration-500" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Delhi Office</h4>
                <p className="text-gray-400 text-sm">Prime Location</p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
            
            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-black text-yellow-400 mb-6 tracking-wide flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                PRACTICE AREAS
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: "🔥", text: "Thermal Spray" },
                  { icon: "⚙️", text: "Metalizing Equipment" },
                  { icon: "🎨", text: "Industrial Coating" },
                  { icon: "🛡️", text: "Surface Engineering" },
                  { icon: "🤖", text: "Robotic Coating" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-base"
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-black text-yellow-400 mb-6 tracking-wide flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                COMPANY
              </h4>
              <ul className="space-y-3">
                {["About Us", "Our Team", "Practices", "Career"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-base"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-400">→</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-black text-yellow-400 mb-6 tracking-wide flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                CONTACT
              </h4>
              <div className="space-y-5">
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-700/50 p-2.5 rounded-xl group-hover:bg-yellow-500 transition-all duration-300">
                      <Phone className="w-5 h-5 text-yellow-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <a href="tel:+919811898418" className="text-gray-300 hover:text-yellow-400 transition-colors block text-base font-medium mb-1">
                        +91-9680971885
                      </a>
                      <a href="tel:+919910356257" className="text-gray-300 hover:text-yellow-400 transition-colors block text-base font-medium">
                        +91-9910356257
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-700/50 p-2.5 rounded-xl group-hover:bg-yellow-500 transition-all duration-300">
                      <Mail className="w-5 h-5 text-yellow-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <a href="mailto:makengineers@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors text-base font-medium break-all">
                      makengineers@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-xl font-black text-yellow-400 mb-6 tracking-wide flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/asterismslegal?igsh=bHNiNXRzZWRjNHRx" 
                  className="group w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-yellow-500/50 hover:scale-110 border border-slate-600/30"
                >
                  <Instagram className="w-7 h-7 text-yellow-400 group-hover:text-slate-900 transition-colors duration-500" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/asterisms-legal/posts/?feedView=all" 
                  className="group w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-yellow-500/50 hover:scale-110 border border-slate-600/30"
                >
                  <Linkedin className="w-7 h-7 text-yellow-400 group-hover:text-slate-900 transition-colors duration-500" />
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/30">
                <p className="text-gray-400 text-sm mb-3 font-semibold">Subscribe to Newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 bg-slate-800 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-slate-600/30"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-4 py-2 rounded-xl transition-all duration-300 font-bold">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative bg-slate-900 py-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Terms of Service</a>
              <span className="text-slate-700">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Privacy Policy</a>
              <span className="text-slate-700">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Legal Notice</a>
            </div>
            
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2025 <span className="text-yellow-400 font-bold">MAK Engineers</span>. Designed by{" "}
              <a
                href="https://developersinfotech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors font-bold"
              >
                Developersinfotech.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;