"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/product" },
    { name: "SERVICES", href: "/services" },
    { name: "BROCHURE", href: "/brochure" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const aboutDropdownItems = [
    { name: "Our Attorneys", href: "/attorneys" },
    { name: "Asterisms Legal", href: "/about" }
  ];

  // Function to determine active tab based on current pathname
  const getActiveTab = () => {
    const currentItem = navItems.find(item => item.href === pathname);
    return currentItem ? currentItem.name : null;
  };

  // Set active tab based on current route
  const activeTab = getActiveTab();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const clickedInside =
          (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
          (aboutDropdownRef.current && aboutDropdownRef.current.contains(event.target));

        if (!clickedInside) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const handleDropdownItemClick = (href) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    router.push(href);
  };

  const handleNavItemClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const getDropdownItems = (menuName) => {
    if (menuName === "ABOUT US") return aboutDropdownItems;
    return [];
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white shadow-2xl border-b border-slate-700 px-4 sm:px-6 lg:px-10">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-center justify-between h-[70px] gap-2">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-slate-800 flex flex-col items-center cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="Asterisms Legal Logo"
                  width={150}
                  height={200}
                  className="rounded-md w-[100px] h-auto lg:w-[150px]"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative"
                  ref={item.name === "PRACTICE AREAS" ? dropdownRef :
                    item.name === "ABOUT US" ? aboutDropdownRef : null}>

                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center px-2 py-3 text-sm font-semibold rounded-lg transition border text-gray-900 ${activeDropdown === item.name
                        ? "text-yellow-400 bg-black border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                        }`}
                      onClick={(e) => toggleDropdown(item.name, e)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform text-yellow-400 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleNavItemClick}
                      className={`px-6 py-3 text-base font-semibold rounded-lg transition border ${activeTab === item.name
                        ? "text-yellow-400 bg-slate-700 border-yellow-400"
                        : "text-gray-900 hover:text-yellow-400 hover:bg-slate-700 border-transparent hover:border-yellow-400"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-yellow-400 py-3 z-50">
                      {getDropdownItems(item.name).map((dropdownItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDropdownItemClick(dropdownItem.href)}
                          className="block w-full text-left px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition border-l-4 border-transparent hover:border-yellow-400"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="tel:+919680971885">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-1 rounded-lg font-bold shadow-lg flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <Phone className="w-4 h-4" />
                    <span className="font-bold">ASK FOR QUOTE</span>
                  </div>
                  <span className="text-[18px] font-bold">9680971885</span>
                </button>
              </Link>
            </div>

            {/* Mobile CTA & Menu Button */}
            <div className="flex lg:hidden items-center gap-1.5">
              <Link href="tel:+919680971885">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1.5 rounded-lg font-bold shadow-lg flex flex-col items-center justify-center">
                  <span className="text-[10px]">ASK FOR QUOTE</span>
                  <div className="flex gap-1">
                    <Phone className="w-3.5 h-3.5 mb-0.5" />
                    <span className="text-[10px] whitespace-nowrap leading-tight">9680971885</span>
                  </div>
                </button>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-white border border-slate-600 hover:bg-slate-700"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t-2 border-orange-500 px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, idx) => (
              <div key={idx}>

                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className={`w-full flex justify-between items-center px-4 py-3 text-sm font-semibold rounded-lg border ${activeDropdown === item.name
                        ? "text-yellow-400 bg-slate-700 border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-slate-700 border-slate-600"
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 text-yellow-400 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {getDropdownItems(item.name).map((dropdownItem, i) => (
                          <button
                            key={i}
                            onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-lg"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleNavItemClick}
                    className={`block px-4 py-3 text-sm font-semibold rounded-lg border ${activeTab === item.name
                      ? "text-yellow-400 bg-slate-700 border-yellow-400"
                      : "text-white hover:text-yellow-400 hover:bg-slate-700 border-slate-600"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}

              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;