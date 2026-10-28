"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobsLogo from "./GlobsLogo";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function GlobsNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "What We Do",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Institution Services", href: "/services#institution" },
        { name: "Industry Services", href: "/services#industry" },
        { name: "10-Pillar Model", href: "/about#pillars" },
        { name: "Transformation Journey", href: "/#journey" },
      ],
    },
    { name: "Institutions", href: "/services#institution" },
    { name: "Industries", href: "/industries" },
    { name: "Our Work", href: "/case-studies" },
    { name: "Insights", href: "/knowledge-hub" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <GlobsLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15.5px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setWhatWeDoOpen(true)}
                    onMouseLeave={() => setWhatWeDoOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-semibold transition-colors py-1 ${
                        isActive
                          ? "text-[#0D9488]"
                          : "text-slate-700 hover:text-[#0D9488]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          whatWeDoOpen ? "rotate-180 text-[#0D9488]" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {whatWeDoOpen && (
                      <div className="absolute top-full left-0 pt-2 w-60 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 py-2.5 flex flex-col space-y-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="px-3.5 py-2 text-[13.5px] font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0D9488] rounded-lg transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-semibold transition-colors py-1 ${
                    isActive
                      ? "text-[#0D9488]"
                      : "text-slate-700 hover:text-[#0D9488]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0D9488] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://innoveity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#07182C] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow group"
            >
              <span>INNOVEITY TECH SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="https://innoveity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B2545] text-white text-[10px] font-bold px-3 py-1.5 rounded-full"
            >
              TECH SOLUTIONS →
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0D9488] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "text-[#0D9488] font-bold"
                    : "text-slate-700 hover:text-[#0D9488]"
                }`}
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 space-y-2 border-l-2 border-emerald-100 my-1">
                  {link.dropdownItems?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-600 hover:text-[#0D9488] py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#0D9488] text-white font-semibold py-2.5 rounded-full text-xs"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
