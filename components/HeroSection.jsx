"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const slides = [
    "Jalandhar's trusted IT agency for custom websites, web applications and high-performance digital solutions.",
    "Delivering fast, secure and SEO-ready digital experiences for modern brands.",
    "From design to deployment, we craft pixel-perfect digital products.",
  ];

  const [index, setIndex] = useState(0);

  // Simple autoplay
  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(auto);
  }, [slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full pt-12 pb-32 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-15 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT SIDE - No animations */}
        <div className="lg:col-span-7 flex flex-col gap-8 pt-12">
          <h1 className="font-serif text-[45px] sm:text-5xl lg:text-[64px] leading-[1.1] font-light tracking-tight">
            IT PROFESSIONALS
            <br />
            DELIVERING{" "}
            <span className="text-[#2A66FF]">
              WEB
              <br />
              EXCELLENCE
            </span>
          </h1>

          <p className="text-base pl-1 font-[var(--font-istok)] max-w-[520px] text-gray-700">
            Professional Web Development & Web Design Agency in Jalandhar,
            building fast, secure and SEO-ready digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href={"/projects"}>
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 hover:bg-gray-900 transition shrink-0">
                See our work
                <ArrowUpRight size={20} />
              </button>
            </Link>

            <div className="flex -space-x-3 shrink-0">
              {[1, 2, 3, 4].map((n) => (
                <Image
                  key={n}
                  src={`/faces/${n}.png`}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white w-10 h-10"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="w-full border-b border-gray-300 mt-4"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-600 max-w-[420px] text-sm font-[var(--font-istok)]">
              {slides[index]}
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border hover:bg-gray-50 transition"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border hover:bg-gray-50 transition"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - No animations */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-6 mt-5 md:mt-10 relative">
            <div className="flex flex-col gap-6 my-auto">
              <div className="bg-gradient-to-b from-[#b9b9b9] to-[#ECECEC] shadow-lg p-5 sm:p-6 rounded-3xl relative flex flex-col justify-between gap-[15px] md:gap-[20px]">
                <div className="absolute -top-8 right-[30px] z-10 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center">
                  <Image
                    src="/logo-3.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 className="text-sm sm:text-xl font-[var(--font-josefin)] leading-tight">
                  Premium Web Development & Creative Digital Solutions for
                  Modern Brands
                </h3>

                <div>
                  <p className="text-gray-600 text-[10px] sm:text-xs mt-3">
                    Attiring Agency crafts responsive, SEO-focused websites and
                    web apps tailored to your business goals.
                  </p>
                  <div className="w-full border-b border-black mt-4"></div>
                </div>
              </div>
              <Link href={"/contact"}>
                <button className="w-full bg-black text-white p-3 px-4 rounded-full flex items-center justify-between gap-2 text-xs md:text-sm font-medium hover:bg-gray-800 transition">
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-blue-700">
                    <Phone size={18} className="text-white" />
                  </div>
                  Get your website now
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <Image
                src="/hero1.png"
                alt="developer"
                width={360}
                height={460}
                className="rounded-3xl shadow-xl object-cover w-full h-full"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
                fetchPriority="low"
              />

              <div className="bg-gradient-to-bl from-gray-300 to-white rounded-3xl">
                <Image
                  src="/hero2man.png"
                  alt="guy"
                  width={360}
                  height={390}
                  className="rounded-3xl shadow-xl object-cover w-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fetchPriority="low"
                />
              </div>
            </div>

            <div className="w-60 h-60 rounded-full absolute blur-2xl -z-1 -bottom-10 bg-black opacity-50 -right-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
