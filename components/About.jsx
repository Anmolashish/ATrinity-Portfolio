"use client";

import Image from "next/image";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [desktopVisible, setDesktopVisible] = useState(false);
  const sectionRef = useRef(null);
  const desktopSectionRef = useRef(null);

  // Mobile animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Desktop animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDesktopVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "100px" }
    );

    if (desktopSectionRef.current) {
      observer.observe(desktopSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Creative Design */}
        <div ref={sectionRef} className="lg:hidden">
          {/* Title with creative styling - CSS-only animation */}
          <div className="relative mb-12 animate-on-scroll">
            <div className="text-center">
              <h1 className=" text-4xl font-light animate-fade-up">
                About Atrinity{" "}
                <span className=" text-[#2A66FF] font-medium">Agency</span>
              </h1>
            </div>
          </div>

          {/* Creative Image Layout */}
          <div className="relative h-[280px] mb-4">
            {/* Background decorative elements */}
            <div className="absolute top-12 left-4 w-32 h-32 rounded-full bg-blue-50 opacity-70 animate-float-slow"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-blue-50 opacity-50 animate-float-slow delay-1000"></div>

            {/* First image */}
            <div
              className={`absolute top-8 left-4 w-[70%] animate-on-scroll-item ${
                isVisible ? "animate-active" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={img1}
                  alt="Team working"
                  width={260}
                  height={180}
                  className="rounded-2xl object-cover shadow-2xl w-full h-44 animate-image-float"
                  placeholder="blur"
                />
                {/* Floating label */}
                <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1.5 rounded-full shadow-lg border animate-label-float">
                  <span className="text-xs font-medium text-gray-700">
                    Web Experts
                  </span>
                </div>
              </div>
            </div>

            {/* Second image */}
            <div
              className={`absolute top-32 right-4 w-[60%] animate-on-scroll-item ${
                isVisible ? "animate-active delay-200" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={img2}
                  alt="Developer coding"
                  width={220}
                  height={150}
                  className="rounded-2xl object-cover shadow-2xl w-full h-40 animate-image-float"
                  placeholder="blur"
                />
                {/* Floating label */}
                <div className="absolute -top-3 -left-3 bg-[#2A66FF] px-3 py-1.5 rounded-full shadow-lg animate-label-float delay-300">
                  <span className="text-xs font-medium text-white">
                    Innovators
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Cards for Text */}
          <div className="space-y-6 mt-0">
            {/* First Card */}
            <div
              className={`animate-on-scroll-item ${
                isVisible ? "animate-active delay-300" : ""
              }`}
            >
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4 animate-number-pulse">
                    <span className="text-lg font-bold text-[#2A66FF]">01</span>
                  </div>
                  <h3 className="text-xl font-semibold animate-text-reveal">
                    Web Expertise
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-14 text-xs animate-text-reveal delay-100">
                  Atrinity Agency is a full-service IT and web development
                  company based in Jalandhar, Punjab, offering custom websites,
                  web applications, and modern web design. We focus on fast,
                  secure and SEO-optimized digital solutions that help
                  businesses improve visibility and grow online.
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div
              className={`animate-on-scroll-item ${
                isVisible ? "animate-active delay-400" : ""
              }`}
            >
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4 animate-number-pulse delay-200">
                    <span className="text-lg font-bold text-[#2A66FF]">02</span>
                  </div>
                  <h3 className="text-xl font-semibold animate-text-reveal">
                    Business Impact
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-14 text-xs animate-text-reveal delay-100">
                  We work with startups and established brands to create
                  e-commerce platforms, responsive UI/UX designs, and ongoing
                  website optimization. Our goal is to build digital experiences
                  that look great, perform well, and deliver real results
                  through strong design, clean code, and search-focused
                  development.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div
            className={`mt-8 animate-on-scroll-item ${
              isVisible ? "animate-active delay-500" : ""
            }`}
          ></div>
        </div>

        {/* Desktop Layout with animations */}
        <div
          ref={desktopSectionRef}
          className="hidden lg:grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT IMAGES with desktop animations */}
          <div className="relative w-fit mx-auto">
            <div className="w-60 h-60 rounded-full absolute blur-2xl bottom-0 bg-black opacity-50 left-1/3 animate-blur-pulse"></div>

            <div className="flex gap-4 z-1">
              {/* Left Image */}
              <div
                className={`translate-y-10 transition-all duration-1000 ease-out ${
                  desktopVisible
                    ? "opacity-100 translate-y-10"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <Image
                  src={img1}
                  alt="Team working"
                  width={320}
                  height={450}
                  className="rounded-2xl object-cover shadow-xl hover-lift-desktop"
                  placeholder="blur"
                />
              </div>

              {/* Right Image */}
              <div
                className={`-translate-y-10 transition-all duration-1000 ease-out delay-300 ${
                  desktopVisible
                    ? "opacity-100 -translate-y-10"
                    : "opacity-0 -translate-y-20"
                }`}
              >
                <Image
                  src={img2}
                  alt="Developer coding"
                  width={320}
                  height={450}
                  className="rounded-2xl object-cover h-full shadow-xl hover-lift-desktop"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT with desktop animations */}
          <div className="z-10">
            <h2
              className={`font-serif text-5xl lg:text-[64px] leading-[1.1] font-light tracking-tight mb-12 transition-all duration-800 ease-out ${
                desktopVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              ABOUT ATRINITY{" "}
              <span
                className={`text-[#2A66FF] inline-block transition-all duration-800 delay-200 ease-out ${
                  desktopVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-5"
                }`}
              >
                AGENCY
              </span>
            </h2>

            <div
              className={`mb-12 transition-all duration-800 ease-out delay-400 ${
                desktopVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-xl font-medium mb-4 animate-text-glow-desktop">
                01 – Web Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Atrinity Agency is a full-service IT and web development company
                based in Jalandhar, Punjab, offering custom websites, web
                applications, and modern web design. We focus on fast, secure
                and SEO-optimized digital solutions that help businesses improve
                visibility and grow online.
              </p>
            </div>

            <div
              className={`transition-all duration-800 ease-out delay-600 ${
                desktopVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-xl font-medium mb-4 animate-text-glow-desktop delay-200">
                02 – Business Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work with startups and established brands to create
                e-commerce platforms, responsive UI/UX designs, and ongoing
                website optimization. Our goal is to build digital experiences
                that look great, perform well, and deliver real results through
                strong design, clean code, and search-focused development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
