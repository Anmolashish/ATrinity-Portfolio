"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: `"CodeCrew delivered our e-commerce platform ahead of schedule and under budget. Their React implementation is flawless and our conversion rates have improved significantly."`,
      author: {
        name: "Sarah Johnson",
        role: "CEO, FashionHub",
        avatar: "/images/testimonials/client1.jpg",
      },
    },
    {
      id: 2,
      content: `"Working with this team was a breath of fresh air. They understood our requirements perfectly and their Next.js solution has dramatically improved our site's performance."`,
      author: {
        name: "Michael Chen",
        role: "CTO, TechStart",
        avatar: "/images/testimonials/client2.jpg",
      },
    },
    {
      id: 3,
      content: `"The SEO work CodeCrew performed tripled our organic traffic in just 3 months. Their technical expertise combined with strategic thinking delivered outstanding results."`,
      author: {
        name: "David Wilson",
        role: "Marketing Director, GrowthCo",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-xl p-8 md:p-10">
                    {/* Testimonial Content */}
                    <div className="relative mb-8">
                      <p className="text-xl italic text-gray-700 relative z-10">
                        {testimonial.content}
                      </p>
                      <span className="absolute top-0 left-0 text-7xl text-blue-100 font-serif -mt-4 -ml-2 z-0">
                        "
                      </span>
                      <span className="absolute bottom-0 right-0 text-7xl text-blue-100 font-serif -mb-8 -mr-2 z-0">
                        "
                      </span>
                    </div>

                    {/* Testimonial Author */}
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {testimonial.author.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
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
          <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2">
            <button
              onClick={prevTestimonial}
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-blue-600"
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
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-blue-600"
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
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
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
