"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full flex justify-center">
      {" "}
      <footer className="bg-black rounded-t-3xl w-full text-white md:max-w-7xl">
        {/* Top decorative border */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="rounded-t-[32px] bg-black pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Main footer content with side gaps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* LOGO SECTION - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/logo-2.png"
                          alt="Atrinity Logo"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 48px, 48px"
                        />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">
                        Atrinity
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                      We craft digital experiences that transform businesses and
                      inspire innovation.
                    </p>
                  </div>
                </div>

                {/* EXPLORE SECTION - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Explore
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 md:gap-x-0 gap-y-2">
                      {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Projects", href: "/projects" },
                        { name: "Blogs", href: "/blogs" },
                        { name: "Prices", href: "/pricing" },
                        { name: "History", href: "/history" },
                        { name: "Testimonials", href: "/testimonials" },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-xs text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300 flex-shrink-0"></span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* NEED HELP & SOCIAL SECTION - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col gap-8">
                    {/* NEED HELP */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Need Help
                      </h4>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <a
                            href="https://www.needhelp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-300 hover:text-white transition-colors duration-300 underline underline-offset-2"
                          >
                            atrinity9928@gmail.com
                          </a>
                          <p className="text-xs text-gray-500 mt-1">
                            Typically responds within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Follow Us
                      </h4>
                      <div className="flex gap-4">
                        {[
                          {
                            icon: Facebook,
                            href: "#",
                            label: "Facebook",
                            color: "hover:bg-blue-600",
                          },
                          {
                            icon: Twitter,
                            href: "#",
                            label: "Twitter",
                            color: "hover:bg-sky-500",
                          },
                          {
                            icon: Instagram,
                            href: "#",
                            label: "Instagram",
                            color: "hover:bg-pink-600",
                          },
                        ].map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300`}
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* LOCATION SECTION - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Location
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div className="text-xs text-gray-300 space-y-1">
                          <p>Street no 9, Tagore Nagar,</p>
                          <p>Jalandhar, Punjab, India</p>
                        </div>
                      </div>

                      {/* Map Preview (Optional) */}
                      <div className="relative h-40 rounded-lg overflow-hidden border border-gray-800 mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                          <div className="text-center p-4">
                            <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                            <p className="text-xs text-gray-500">
                              Interactive map view
                            </p>
                            <a
                              href="https://maps.google.com/?q=Street+no+9,+Tagore+Nagar,+Jalandhar,+Punjab,+India"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-xs text-gray-400 hover:text-white transition-colors duration-300"
                            >
                              Open in Maps →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Copyright */}
                  <div className="text-sm text-gray-500">
                    © {currentYear} Atrinity Technologies. All rights reserved.
                  </div>

                  {/* Legal Links */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/cookies"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      href="/sitemap"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Sitemap
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </footer>
    </section>
  );
}
