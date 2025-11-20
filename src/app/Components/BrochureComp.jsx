'use client';

import { useState } from 'react';
import { Download, FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function BrochureComp() {
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(100);
    const totalPages = 12;

    // ========== ADD YOUR PDF HERE ==========
    const pdfUrl = '/images/K6-BROCHURE_MAK_ENGINEERS.pdf'; // Option 1: Local file in public folder
    // const pdfUrl = 'https://example.com/brochure.pdf'; // Option 2: External URL
    // =======================================

    const handleDownload = () => {
        // Download the PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'company-brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const zoomIn = () => {
        if (zoom < 150) setZoom(zoom + 10);
    };

    const zoomOut = () => {
        if (zoom > 50) setZoom(zoom - 10);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 ">
            {/* Animated Orange Background Blobs */}
           
            <div className="max-w-7xl mx-auto relative">
                {/* Header Section */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-300 hover:border-orange-500 p-6 md:p-8 mb-6 overflow-hidden group transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-3xl">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl shadow-3xl shadow-orange-500/50 group-hover:shadow-xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                                    Company Brochure
                                </h1>
                                <p className="text-slate-600 font-sans font-semibold leading-relaxed">
                                    Explore our complete product catalog and services
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 transition-all duration-300 transform hover:scale-105"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* PDF Viewer */}
                    <div className="lg:col-span-2">
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-300 hover:border-orange-500 overflow-hidden group transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            {/* Controls Bar */}
                            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-12 py-5 flex items-center justify-between overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative flex items-center gap-2 text-white font-bold text-2xl">
                                    MAK ENGINEERS
                                </div>

                                <div className="relative flex items-center gap-2 text-white font-bold text-2xl">
                                    📕BROCHURE
                                </div>
                            </div>

                            {/* PDF Preview Area */}
                            <div className="bg-slate-100 p-8 min-h-[600px] flex items-center justify-center relative">
                                <iframe
                                    src={`${pdfUrl}#page=${currentPage}&zoom=${zoom}`}
                                    className="w-full h-[700px] bg-white rounded-lg shadow-2xl shadow-orange-500/20 transition-all duration-300 group-hover:shadow-orange-500/30"
                                    title="PDF Viewer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* What's Inside */}
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-3xl border border-gray-300 hover:border-orange-500 p-6 overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">What's Inside</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-600 font-sans font-semibold hover:text-orange-600 transition-colors duration-300">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <span>Company Profile & Vision</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 font-sans font-semibold hover:text-orange-600 transition-colors duration-300">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <span>Complete Product Catalogue</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 font-sans font-semibold hover:text-orange-600 transition-colors duration-300">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <span>High-Quality Product Images</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 font-sans font-semibold hover:text-orange-600 transition-colors duration-300">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <span>List of Valued Clients & Projects</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Collaboration CTA */}
                        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-gray-700 hover:border-orange-500 p-6 text-white overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-30 blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                            
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-3">Looking to Collaborate?</h3>
                                <p className="text-gray-300 text-sm font-sans font-semibold mb-4 leading-relaxed">
                                    Partner with us for reliable and long-lasting solutions tailored to your industrial needs.
                                </p>
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 transform hover:scale-105">
                                    Get in Touch
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-3xl border border-gray-300 hover:border-orange-500 p-6 overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
                            
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-all duration-300 hover:scale-105 transform cursor-pointer">
                                    <div className="text-3xl font-black text-orange-500 group-hover:scale-110 transition-transform duration-300">{totalPages}</div>
                                    <div className="text-sm text-slate-600 font-semibold mt-1">Pages</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-all duration-300 hover:scale-105 transform cursor-pointer">
                                    <div className="text-3xl font-black text-orange-500 group-hover:scale-110 transition-transform duration-300">PDF</div>
                                    <div className="text-sm text-slate-600 font-semibold mt-1">Format</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}