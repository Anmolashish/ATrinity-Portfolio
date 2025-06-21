"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
            aria-label="CodeCrew Home"
          >
            <div className="relative w-20 h-20">
              <Image
                src="/logo.webp"
                alt="CodeCrew company logo"
                width={100}
                height={100}
                // Removed priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block" aria-label="Desktop navigation">
            <ul className="flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    aria-label={`Go to ${item.label} section`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ease-in-out"
            aria-hidden={!isMenuOpen}
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = "auto";
                  }}
                  aria-label="CodeCrew Home"
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/logo.svg"
                      alt="CodeCrew company logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="ml-3 text-xl font-bold text-blue-600">
                    CodeCrew
                  </span>
                </Link>
                <button
                  className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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

              <nav className="flex-1" aria-label="Mobile navigation">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/#${item.id}`}
                        className="block text-gray-700 hover:text-blue-600 text-lg font-medium capitalize py-3 px-2 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = "auto";
                        }}
                        aria-label={`Go to ${item.label} section`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
