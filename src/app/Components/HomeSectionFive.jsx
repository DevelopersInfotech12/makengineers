"use client"

import React, { useState } from 'react';
import { Sprout, Milk, ChevronLeft, ChevronRight, Star, TrendingUp, Shield } from 'lucide-react';

const HomeSectionFive = () => {
    const [agritechIndex, setAgritechIndex] = useState(0);
    const [dairyIndex, setDairyIndex] = useState(0);

    const agritechBusinesses = [
        {
            id: 1,
            title: "Training Program",
            image: "/training.webp",
            description:
                "Metallizing Equipment Co. Pvt. Ltd. is one of the leading manufacturers and service providers of Thermal Spray Equipment. We also offer specialized 'Thermal Spray Training' designed for operators, inspectors, and skilled professionals. The program covers Gas Flame, Arc, Plasma, and HVOF spraying techniques. It enhances the performance of your workforce, improves equipment efficiency, reduces consumable usage, and ensures safe operation.",
            features: [
                "Hands-on training for thermal spray processes",
                "Performance enhancement for operators",
                "Safety-focused skill development"
            ],
            stats: { projects: "120+", efficiency: "90%", clients: "60+" }
        }
        ,
        {
            id: 2,
            title: "Consultancy Services",
            image: "/consultancy.webp",
            description:
                "Planning and simulation form the foundation of operational success. At MEC, our consultancy services help clients maximize the lifecycle performance of their equipment and thermal spray solutions. Through continuous evaluation, system integration support, and expert guidance, we ensure optimal operation. Our certified partners and engineering specialists deliver precise expertise tailored to client needs.",
            features: [
                "Planning & process simulation",
                "System integration consultation",
                "Lifecycle optimization support"
            ],
            stats: { projects: "95+", efficiency: "88%", clients: "45+" }
        },
        {
            id: 3,
            title: "Testing & Calibration",
            image: "/testing.webp",
            description:
                "The R&D Laboratory of Metallizing Equipment Co. Pvt. Ltd. is accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL), India. Certified under ISO/IEC 17025:2005, our facility specializes in mechanical testing and calibration services, ensuring precise performance validation and national standards compliance.",
            features: [
                "NABL-accredited testing facility",
                "ISO/IEC 17025 certified procedures",
                "Mechanical testing & calibration"
            ],
            stats: { projects: "70+", efficiency: "95%", clients: "30+" }
        }


    ];

    const nextAgritech = () => {
        setAgritechIndex((prev) => (prev + 1) % agritechBusinesses.length);
    };

    const prevAgritech = () => {
        setAgritechIndex((prev) => (prev - 1 + agritechBusinesses.length) % agritechBusinesses.length);
    };

    const nextDairy = () => {
        setDairyIndex((prev) => (prev + 1) % dairyBusinesses.length);
    };

    const prevDairy = () => {
        setDairyIndex((prev) => (prev - 1 + dairyBusinesses.length) % dairyBusinesses.length);
    };

    const BusinessCard = ({ business, color, onPrev, onNext, currentIndex, totalItems, type }) => {
        const isGreen = color === 'green';

        return (
            <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-orange-500/20 border-2 border-gray-100 hover:border-orange-500 overflow-hidden transition-all duration-500 group">
                
                {/* Orange Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/20 to-transparent"></div>
                </div>

                {/* Header Section with Orange Theme */}
                <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 p-6 border-b border-orange-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-2xl shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                                {type === 'agritech' ? (
                                    <Sprout className="w-8 h-8 text-white" />
                                ) : (
                                    <Milk className="w-8 h-8 text-white" />
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{business.title}</h2>
                                <div className="flex items-center space-x-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2 font-semibold">4.9 Rating</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls with Orange Theme */}
                        {totalItems > 1 && (
                            <div className="flex space-x-2">
                                <button
                                    onClick={onPrev}
                                    className="bg-white hover:bg-orange-500 rounded-full p-2 shadow-md hover:shadow-orange-500/50 transition-all duration-300 group/btn border-2 border-gray-200 hover:border-orange-500"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-600 group-hover/btn:text-white transition-colors duration-300" />
                                </button>
                                <button
                                    onClick={onNext}
                                    className="bg-white hover:bg-orange-500 rounded-full p-2 shadow-md hover:shadow-orange-500/50 transition-all duration-300 group/btn border-2 border-gray-200 hover:border-orange-500"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover/btn:text-white transition-colors duration-300" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content - Image and Content Side by Side */}
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Image Section with Orange Effects */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-gray-200 hover:border-orange-500 transition-all duration-500 group/img">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={business.image}
                                    alt={business.title}
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover/img:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                
                                {/* Orange Animated Line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 group-hover/img:w-full transition-all duration-1000 ease-out z-20 shadow-lg shadow-orange-500/50"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-between">
                            {/* Description */}
                            <div>
                                <p className="text-gray-600 text-base leading-relaxed mb-6 font-semibold">
                                    {business.description}
                                </p>

                                {/* Features with Orange Theme */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg mr-3 shadow-lg shadow-orange-500/30">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        Key Features
                                    </h3>
                                    <div className="grid gap-4">
                                        {business.features.map((feature, index) => (
                                            <div key={index} className="group/feature relative flex items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:border-orange-500 border-2 border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500"></div>
                                                <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mr-4 flex-shrink-0 shadow-lg shadow-orange-500/50 group-hover/feature:scale-125 transition-transform duration-300"></div>
                                                <span className="relative text-gray-700 font-semibold text-sm">{feature}</span>
                                                <Shield className="relative w-5 h-5 ml-auto text-gray-400 group-hover/feature:text-orange-500 transition-colors duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats with Orange Theme */}
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 group/stat">
                                        <div className="text-2xl font-black text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text group-hover/stat:scale-110 transition-transform duration-300">
                                            {business.stats.projects}
                                        </div>
                                        <div className="text-xs text-gray-600 font-semibold mt-1">Projects</div>
                                    </div>
                                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 group/stat">
                                        <div className="text-2xl font-black text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text group-hover/stat:scale-110 transition-transform duration-300">
                                            {business.stats.efficiency}
                                        </div>
                                        <div className="text-xs text-gray-600 font-semibold mt-1">Efficiency</div>
                                    </div>
                                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 group/stat">
                                        <div className="text-2xl font-black text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text group-hover/stat:scale-110 transition-transform duration-300">
                                            {business.stats.clients}
                                        </div>
                                        <div className="text-xs text-gray-600 font-semibold mt-1">Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 overflow-hidden">
            
            {/* Enhanced Orange Background Blobs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-5 transform rotate-12"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Orange Accents */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
                        <div className="mx-8">
                            <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                                Our Core
                                <span className="block text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text font-bold">
                                    Industry Solutions
                                </span>
                            </h1>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-md"></div>
                    </div>
                    <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto font-semibold">
                        Innovative technology solutions driving the future of agriculture and dairy industries
                    </p>
                </div>

                {/* Business Cards - Vertical Layout */}
                <div className="space-y-16">
                    {/* Agritech Section with Orange Theme */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-full shadow-xl shadow-orange-500/50 animate-pulse">
                                <Sprout className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                                Metallizing Equipment
                            </h2>
                        </div>
                        <BusinessCard
                            business={agritechBusinesses[agritechIndex]}
                            color="green"
                            onPrev={prevAgritech}
                            onNext={nextAgritech}
                            currentIndex={agritechIndex}
                            totalItems={agritechBusinesses.length}
                            type="agritech"
                        />
                    </div>
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
                            Ready to Explore More Solutions?
                        </h3>
                        <p className="text-gray-300 text-base mb-6 font-semibold max-w-2xl mx-auto">
                            Discover our complete range of metalizing equipment and services
                        </p>
                        
                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70">
                            View All Solutions
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

export default HomeSectionFive;