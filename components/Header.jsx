"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.svg" alt="CodeCrew Logo" className="h-10" />
            <span className="ml-3 text-xl font-bold text-blue-600">
              CodeCrew
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                "home",
                "services",
                "portfolio",
                "team",
                "about",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src="/images/logo.svg"
                  alt="CodeCrew Logo"
                  className="h-10"
                />
                <span className="ml-3 text-xl font-bold text-blue-600">
                  CodeCrew
                </span>
              </Link>
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="space-y-6">
                {[
                  "home",
                  "services",
                  "portfolio",
                  "team",
                  "about",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item}`}
                      className="block text-gray-700 hover:text-blue-600 text-xl font-medium capitalize py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
