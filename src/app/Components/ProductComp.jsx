"use client"

import React, { useState } from 'react';
import { Award, Zap, Shield, Star, ChevronRight, Settings } from 'lucide-react';

const ProductComp = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Arc Spray Metalizing System",
            category: "Premium Series",
            description: "High-performance arc spray system for thermal coating applications with superior bond strength and coating quality.",
            image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
            features: ["High Velocity", "Uniform Coating", "Heavy Duty"],
            price: "Contact for Quote"
        },
        {
            id: 2,
            name: "Flame Spray Equipment",
            category: "Professional Series",
            description: "Advanced flame spray technology for precision metalizing with excellent surface preparation and adhesion.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
            features: ["Precise Control", "Multi-Material", "Energy Efficient"],
            price: "Contact for Quote"
        },
        {
            id: 3,
            name: "Zinc Spray Metalizing Unit",
            category: "Industrial Series",
            description: "Specialized zinc metalizing system for corrosion protection with long-lasting industrial-grade performance.",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
            features: ["Anti-Corrosion", "High Coverage", "Low Maintenance"],
            price: "Contact for Quote"
        },
        {
            id: 4,
            name: "Plasma Spray System Pro",
            category: "Advanced Series",
            description: "State-of-the-art plasma spray technology delivering ultra-high temperature coatings for demanding applications.",
            image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&q=80",
            features: ["High Temperature", "Dense Coating", "Precision Control"],
            price: "Contact for Quote"
        },
        {
            id: 5,
            name: "Wire Arc Spray Machine",
            category: "Heavy Duty Series",
            description: "Robust wire arc system engineered for continuous operation and high-volume metalizing applications.",
            image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
            features: ["24/7 Operation", "Fast Deposition", "Automated Feed"],
            price: "Contact for Quote"
        },
        {
            id: 6,
            name: "Thermal Coating Station",
            category: "Standard Series",
            description: "Versatile thermal spray solution offering professional results for various substrate materials and applications.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
            features: ["Multi-Purpose", "User Friendly", "Portable Design"],
            price: "Contact for Quote"
        },
        {
            id: 7,
            name: "HVOF Coating System",
            category: "Premium Series",
            description: "High Velocity Oxygen Fuel system delivering superior density and bond strength for critical applications.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
            features: ["Ultra Dense", "Superior Bond", "Low Porosity"],
            price: "Contact for Quote"
        },
        {
            id: 8,
            name: "Aluminum Spray Unit",
            category: "Professional Series",
            description: "Specialized aluminum metalizing equipment for lightweight coating solutions with excellent thermal properties.",
            image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
            features: ["Lightweight", "Thermal Barrier", "Quick Setup"],
            price: "Contact for Quote"
        },
        {
            id: 9,
            name: "Powder Flame Spray System",
            category: "Industrial Series",
            description: "Advanced powder-based flame spray technology for complex alloy coatings and specialized surface treatments.",
            image: "https://images.unsplash.com/photo-1581092446550-3c6a6c5c3eb2?w=800&q=80",
            features: ["Alloy Flexibility", "Fine Control", "Quality Finish"],
            price: "Contact for Quote"
        },
        {
            id: 10,
            name: "Cold Spray Equipment",
            category: "Advanced Series",
            description: "Cutting-edge cold spray technology for temperature-sensitive applications with minimal oxidation.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
            features: ["Low Temperature", "No Oxidation", "Pure Coatings"],
            price: "Contact for Quote"
        },
        {
            id: 11,
            name: "Dual Wire Arc Sprayer",
            category: "Heavy Duty Series",
            description: "High-capacity dual wire system maximizing productivity for large-scale industrial metalizing operations.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
            features: ["Double Output", "High Efficiency", "Industrial Scale"],
            price: "Contact for Quote"
        },
        {
            id: 12,
            name: "Portable Metalizing Kit",
            category: "Standard Series",
            description: "Compact and mobile metalizing solution ideal for on-site repairs and field maintenance operations.",
            image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&q=80",
            features: ["Portable", "Field Ready", "Quick Deploy"],
            price: "Contact for Quote"
        },
        {
            id: 13,
            name: "Ceramic Coating System",
            category: "Specialty Series",
            description: "Specialized ceramic metalizing equipment for wear-resistant coatings in extreme operating conditions.",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
            features: ["Wear Resistant", "High Hardness", "Extreme Duty"],
            price: "Contact for Quote"
        },
        {
            id: 14,
            name: "Robotic Spray System",
            category: "Automated Series",
            description: "Fully automated robotic metalizing station with programmable paths for consistent, repeatable results.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
            features: ["Automated", "Programmable", "Consistent Quality"],
            price: "Contact for Quote"
        },
        {
            id: 15,
            name: "Stainless Steel Sprayer",
            category: "Professional Series",
            description: "Premium stainless steel metalizing equipment for corrosion-resistant coatings in harsh environments.",
            image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
            features: ["Corrosion Free", "Food Grade", "Chemical Resistant"],
            price: "Contact for Quote"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
            
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

            {/* Products Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                {/* Header with Orange Accents */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-bold shadow-lg shadow-orange-500/50 animate-pulse">
                        Premium Equipment Collection
                    </div>
                    <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text mb-6">
                        Our Premium Metalizing Systems
                    </h2>
                    <p className="text-slate-600 text-xl max-w-3xl mx-auto font-semibold">
                        Explore our comprehensive range of advanced metalizing equipment designed for various industrial applications
                    </p>
                </div>

                {/* Products Grid with Orange Theme */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-orange-500/30 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-500"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Orange Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-slate-900">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                                
                                {/* Orange Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Category Badge with Orange */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">
                                        {product.category}
                                    </span>
                                </div>

                                {/* Floating Icon with Orange */}
                                <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full border-2 border-orange-300 transform transition-all duration-500 ${hoveredProduct === product.id ? 'rotate-12 scale-110 shadow-lg shadow-orange-500/50' : 'rotate-0 scale-100'
                                    }`}>
                                    <Settings className="w-6 h-6 text-orange-500" />
                                </div>

                                {/* Orange Animated Line */}
                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 transition-all duration-1000 ease-out shadow-lg shadow-orange-500/50 ${hoveredProduct === product.id ? 'w-full' : 'w-0'}`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-slate-600 mb-5 leading-relaxed font-semibold">
                                    {product.description}
                                </p>

                                {/* Features with Orange Theme */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-bold border border-orange-300 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer with Orange Button */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                    <span className="text-slate-900 font-bold text-lg">{product.price}</span>
                                    <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70">
                                        Details
                                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Border Animation */}
                            <div className={`absolute inset-0 border-4 border-orange-500 rounded-2xl transition-opacity duration-300 pointer-events-none ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                                }`}></div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Bar with Orange Theme */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl mx-auto overflow-hidden">
                
                {/* Orange Background Blobs */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

                        <div className="flex items-center gap-5 group cursor-pointer">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-full shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-all duration-300">
                                <Shield className="w-8 h-8 text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl group-hover:text-orange-400 transition-colors duration-300">Precision Engineering</h3>
                                <p className="text-gray-300 font-semibold">Built for Excellence</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group cursor-pointer">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-full shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-all duration-300">
                                <Zap className="w-8 h-8 text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl group-hover:text-orange-400 transition-colors duration-300">Cutting-Edge Technology</h3>
                                <p className="text-gray-300 font-semibold">Superior Performance</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group cursor-pointer">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-full shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-all duration-300">
                                <Star className="w-8 h-8 text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl group-hover:text-orange-400 transition-colors duration-300">Industrial-Grade Quality</h3>
                                <p className="text-gray-300 font-semibold">Reliable Solutions</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductComp;