"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: `"I'm Varun Anand, a Shayar, and Atrinity perfectly captured my vision. They created a stunning poetry portfolio website that truly reflects my style and emotions. Highly recommended!"`,
      author: {
        name: "Varun Anand",
        role: "Shayar",
        avatar: "/images/testimonials/client1.jpg",
      },
    },
    {
      id: 2,
      content: `"We at Steelmans have worked with Atrinity on multiple websites. Their rates are much lower than the market, and the quality is truly professional. Highly recommended!"`,
      author: {
        name: "Bikram Dhindsa",
        role: "Owner (Steelsman)",
        avatar: "/images/testimonials/client2.jpg",
      },
    },
    {
      id: 3,
      content: `"The Gear Edges got a modern, user-friendly website from Atrinity. Their work is professional, and they signed all documents before starting. Really happy with the result!"`,
      author: {
        name: "Harman Sharma",
        role: "HR (The gear edges)",
        avatar: "/images/testimonials/client3.jpg",
      },
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 sm:px-6"
                >
                  <div className="bg-gray-50 rounded-xl  p-6 md:p-8 lg:p-10 h-full flex flex-col mx-auto w-full">
                    {/* Testimonial Content */}
                    <div className="relative mb-6 md:mb-8 flex-grow max-w-[900px] w-[30%]">
                      <p className="text-base md:text-lg lg:text-xl italic text-gray-700 relative z-10 break-words whitespace-normal">
                        {testimonial.content}
                      </p>
                      <span className="absolute top-0 left-0 text-6xl md:text-7xl text-blue-100 font-serif -mt-3 md:-mt-4 -ml-1 md:-ml-2 z-0">
                        "
                      </span>
                      <span className="absolute bottom-0 right-0 text-6xl md:text-7xl text-blue-100 font-serif -mb-6 md:-mb-8 -mr-1 md:-mr-2 z-0">
                        "
                      </span>
                    </div>

                    {/* Testimonial Author */}
                    <div className="flex items-center mt-auto pt-4">
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-3 md:mr-4">
                        <Image
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                          {testimonial.author.name}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2 sm:px-4">
            <button
              onClick={prevTestimonial}
              className="bg-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
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
