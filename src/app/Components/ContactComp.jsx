'use client';

import { useState } from 'react';

export default function ContactComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative text-white py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50">
            <span className="text-white text-sm font-bold tracking-wider">WE'RE HERE TO HELP</span>
          </div>
          <p className="text-xl md:text-2xl text-slate-900 max-w-3xl mx-auto leading-relaxed font-bold">
            Get in touch with <span className="text-orange-500 font-black">MAK Engineers</span> for advanced metalizing solutions
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 mb-8">
                Get In <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              
              {/* Email Card */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-3xl p-8 hover:shadow-orange-500/20 transition-all duration-500 border border-gray-700 hover:border-orange-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                    <a href="mailto:info@makengineers.com" className="text-orange-500 hover:text-orange-400 transition-colors text-lg block mb-1 font-medium">
                      info@makengineers.com
                    </a>
                    <a href="mailto:sales@makengineers.com" className="text-orange-500 hover:text-orange-400 transition-colors text-lg font-medium">
                      sales@makengineers.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-3xl p-8 hover:shadow-orange-500/20 transition-all duration-500 border border-gray-700 hover:border-orange-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                    <a href="tel:+911234567890" className="text-orange-500 hover:text-orange-400 transition-colors text-lg block mb-1 font-medium">
                      +91 123 456 7890
                    </a>
                    <a href="tel:+911234567891" className="text-orange-500 hover:text-orange-400 transition-colors text-lg font-medium">
                      +91 123 456 7891
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-3xl p-8 hover:shadow-orange-500/20 transition-all duration-500 border border-gray-700 hover:border-orange-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-5">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                    <p className="text-orange-500 leading-relaxed text-lg">
                      MAK Engineers<br />
                      Industrial Area, Sector 5<br />
                      Manufacturing Hub<br />
                      City, State - 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-3xl border border-gray-300 hover:border-orange-500 overflow-hidden transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2063926718037!2d77.20902431508044!3d28.628694982422855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683921af7%3A0x8d4e0d7d0b0d0b0d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-3xl border border-gray-300 hover:border-orange-500 p-10 overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="relative">
              <h2 className="text-4xl font-black text-slate-900 mb-3">
                Send Us A <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-slate-600 font-sans font-semibold mb-10 text-lg leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-3 tracking-wide">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-300 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none placeholder-gray-400 hover:border-orange-300"
                    placeholder="Enter Your Full Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-3 tracking-wide">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-300 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none placeholder-gray-400 hover:border-orange-300"
                      placeholder="Enter Your Email Address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-3 tracking-wide">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-300 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none placeholder-gray-400 hover:border-orange-300"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-3 tracking-wide">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-300 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none placeholder-gray-400 hover:border-orange-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-3 tracking-wide">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-300 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none resize-none placeholder-gray-400 hover:border-orange-300"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/70 text-lg tracking-wide"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="relative bg-slate-50 py-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-block mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 group-hover:border-orange-500 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 hover:-translate-y-2 transform">
                <div className="text-orange-500 text-4xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <p className="text-slate-900 text-lg font-bold">Support Available</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="inline-block mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 group-hover:border-orange-500 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 hover:-translate-y-2 transform">
                <div className="text-orange-500 text-4xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">&lt;24h</div>
                <p className="text-slate-900 text-lg font-bold">Response Time</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="inline-block mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 group-hover:border-orange-500 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 hover:-translate-y-2 transform">
                <div className="text-orange-500 text-4xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-slate-900 text-lg font-bold">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}