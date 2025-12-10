"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/LOGO.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const departments = [
    { name: "Computer Science", href: "/resources?dept=cs" },
    { name: "Mathematics", href: "/resources?dept=math" },
    { name: "Physics", href: "/resources?dept=physics" },
    { name: "Chemistry", href: "/resources?dept=chemistry" },
    { name: "Biology", href: "/resources?dept=biology" },
    { name: "Engineering", href: "/resources?dept=engineering" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsResourceDropdownOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200 dark:border-gray-800 shadow-lg"
          : "border-transparent"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-156 h-56 bg-linear-to-br from-blue-600 via-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -right-40 animate-pulse"></div>
        <div className="absolute w-46 h-46 bg-linear-to-br from-purple-300 via-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-20 right-20"></div>
      </div>

      <div className=" border mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline space-x-2 group shrink-0"
            onClick={closeMobileMenu}
          >
            <div className="w-12 h-12  overflow-hidden  transform group-hover:scale-110 transition-transform duration-200 ">
              <Image
                src={Logo}
                alt="StudyHub Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-bold font-serif items-center text-3xl bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent sm:inline tracking-tight transform group-hover:scale-110 transition-transform duration-200">
              StudyHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center px-[2vw] space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 font-sans  hover:scale-105"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 font-sans  flex items-center gap-2 hover:scale-105">
                Resources
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 overflow-hidden backdrop-blur-sm">
                {departments.map((dept) => (
                  <Link
                    key={dept.name}
                    href={dept.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 text-sm border-l-4 border-transparent hover:border-blue-500"
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 font-sans text-sm hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 font-sans text-sm hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/request-resource"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 font-sans text-sm hover:scale-105"
            >
              Request Resource
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 mobile-menu-button"
          >
            <div
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 w-60 max-w-full backdrop-blur-sm dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 z-50 transition-transform duration-300 ease-in-out mobile-menu translate-x-0">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b  border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                StudyHub
              </span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="h-[calc(100vh-80px)] bg-black/70 backdrop-blur-lg overflow-y-auto">
            <nav className="p-6 space-y-6 flex flex-col items-end">
              {/* Main Navigation Links */}
              <div className="space-y-3  ">
                <Link
                  href="/"
                  className="block py-3 px-4 text-gray-200 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-sans text-lg"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <button
                    onClick={() =>
                      setIsResourceDropdownOpen(!isResourceDropdownOpen)
                    }
                    className="w-full flex items-center justify-between py-3 px-4 text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-sans text-lg"
                  >
                    Resources
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isResourceDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  {isResourceDropdownOpen && (
                    <div className="pl-6 space-y-3 border-l-2 border-gray-200 dark:border-gray-700 ml-4">
                      {departments.map((dept) => (
                        <Link
                          key={dept.name}
                          href={dept.href}
                          className="block py-2 text-gray-200 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-base transition-all duration-200 hover:translate-x-1"
                          onClick={closeMobileMenu}
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block py-3 px-4 text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-sans text-lg"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block py-3 px-4 text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-sans text-lg"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>

                <Link
                  href="/request-resource"
                  className="block py-3 px-4 text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-sans text-lg"
                  onClick={closeMobileMenu}
                >
                  Request Resource
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
