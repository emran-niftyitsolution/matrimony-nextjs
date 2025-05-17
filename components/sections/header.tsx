"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-pink-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=64&h=64&q=80"
                alt="Matrimony Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Matrimony
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className={`relative text-[15px] font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white hover:text-pink-200"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                Home
              </a>
              <a
                href="#"
                className={`relative text-[15px] font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white hover:text-pink-200"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                Search
              </a>
              <a
                href="#"
                className={`relative text-[15px] font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white hover:text-pink-200"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                Success Stories
              </a>
              <a
                href="#"
                className={`relative text-[15px] font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white hover:text-pink-200"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                About Us
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className={`hidden sm:inline-flex ${
                  isScrolled
                    ? "border-pink-200 bg-pink-50/50 hover:bg-pink-100 text-pink-600 hover:text-pink-700"
                    : "border-white/20 bg-white/10 hover:bg-white/20 text-white hover:text-white"
                }`}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className={`${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    : "bg-white text-pink-600 hover:bg-pink-50"
                }`}
              >
                Register
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  isScrolled
                    ? "text-pink-500 hover:text-pink-600"
                    : "text-white hover:text-pink-200"
                }`}
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Page Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Menu
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="hover:bg-pink-50 text-pink-500 hover:text-pink-600"
              >
                <FaTimes className="w-5 h-5" />
              </Button>
            </div>
            <nav className="space-y-6">
              <a
                href="#"
                className="block text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors"
              >
                Search
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors"
              >
                About Us
              </a>
              <div className="pt-6 border-t border-gray-100">
                <Button
                  variant="outline"
                  className="w-full mb-4 border-pink-200 bg-pink-50/50 hover:bg-pink-100 text-pink-600 hover:text-pink-700"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                  Register
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
