"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Define navigation items with their paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="z-50 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image
              src="/headerlogo.png"
              alt="Atrinity logo"
              width={130}
              height={130}
              priority={true}
              className="w-auto h-auto"
              sizes="130px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex justify-between text-sm space-x-6 lg:space-x-[60px]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <div className="bg-blue-700 rounded-3xl px-6 py-2 text-white text-sm hover:bg-blue-800 transition-colors duration-150">
              Contact us
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="md:hidden bg-white z-40 px-4 sm:px-6 py-4 border-t"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block text-gray-700 text-lg font-medium py-3 hover:text-blue-600 transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-6 pt-4 border-t">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block bg-blue-700 rounded-3xl px-6 py-3 text-white text-center hover:bg-blue-800 transition-colors duration-150"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
