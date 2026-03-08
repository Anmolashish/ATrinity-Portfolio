"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "I'm Varun Anand, a Shayar, and Atrinity perfectly captured my vision. They created a stunning poetry portfolio website that truly reflects my style and emotions.",
      author: {
        name: "Varun Anand",
        role: "Shayar",
        avatar: "/images/testimonials/client1.jpg",
      },
    },
    {
      id: 2,
      content:
        "We at Steelmans have worked with Atrinity on multiple websites. Their rates are much lower than the market, and the quality is truly professional.",
      author: {
        name: "Bikram Dhindsa",
        role: "Owner (Steelmans)",
        avatar: "/images/testimonials/client2.jpg",
      },
    },
    {
      id: 3,
      content:
        "The Gear Edges got a modern, user-friendly website from Atrinity. Their work is professional and the result speaks for itself.",
      author: {
        name: "Harman Sharma",
        role: "HR (The Gear Edges)",
        avatar: "/images/testimonials/client3.jpg",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds (2 seconds visible + 2 seconds transition)

    return () => clearInterval(interval);
  }, [isAnimating, testimonials.length]);

  const getTestimonialPosition = (index) => {
    const positions = [
      { translateY: "-110%", scale: 0.85, opacity: 0.7, zIndex: 10 }, // Top - moved further up
      { translateY: "0%", scale: 1, opacity: 1, zIndex: 20 }, // Center (active)
      { translateY: "110%", scale: 0.85, opacity: 0.7, zIndex: 10 }, // Bottom - moved further down
    ];
    return positions[
      (index - currentIndex + testimonials.length) % testimonials.length
    ];
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    // Restart animation after a short delay
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl max-md:text-center font-serif leading-tight">
            WHAT OUR <br /> CLIENTS SAYS
          </h2>

          <p className="mt-6 text-gray-600 max-md:text-center leading-relaxed">
            Honest, real-world feedback from clients who trusted us to design
            and build websites that actually perform, look sharp and support
            their business growth.
          </p>
        </div>

        {/* Mobile: Static Layout */}
        <div className="lg:hidden space-y-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-gradient-to-r from-gray-100 to-white p-6 pl-8"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                  <Image
                    src={t.author.avatar}
                    alt={t.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t.author.name},{" "}
                    <span className="font-normal text-gray-600">
                      {t.author.role}
                    </span>
                  </h4>

                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                    {t.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Animated Carousel */}
        <div className="hidden lg:block relative h-[600px] min-h-fit">
          <div className="absolute inset-0 flex items-center justify-center">
            {testimonials.map((t, index) => {
              const position = getTestimonialPosition(index);

              return (
                <div
                  key={t.id}
                  className="absolute w-full max-w-xl transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateY(${position.translateY}) scale(${position.scale})`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                  onMouseEnter={() => setIsAnimating(false)}
                  onMouseLeave={() => setIsAnimating(true)}
                >
                  <div className="relative bg-gradient-to-r from-gray-100 to-white p-8 pl-10  mx-auto">
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />

                    <div className="flex items-center gap-6">
                      {/* Avatar */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                        <Image
                          src={t.author.avatar}
                          alt={t.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="font-semibold text-lg">
                          {t.author.name},{" "}
                          <span className="font-normal text-gray-600">
                            {t.author.role}
                          </span>
                        </h4>

                        <p className="mt-3 text-gray-700 leading-relaxed">
                          {t.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots indicator - Desktop only */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hidden ${
                  currentIndex === index
                    ? "bg-blue-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
