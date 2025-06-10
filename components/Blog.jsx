"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Sample blog data
const blogPosts = [
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    excerpt:
      "Explore how Next.js solves common React problems and why it's becoming the go-to framework for production apps.",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    excerpt:
      "Explore how Next.js solves common React problems and why it's becoming the go-to framework for production apps.",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    excerpt:
      "Explore how Next.js solves common React problems and why it's becoming the go-to framework for production apps.",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    excerpt:
      "Explore how Next.js solves common React problems and why it's becoming the go-to framework for production apps.",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    excerpt:
      "Explore how Next.js solves common React problems and why it's becoming the go-to framework for production apps.",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },

  // ... (other blog posts remain the same)
];

export default function BlogIndex() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const postsPerSlide = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(blogPosts.length / postsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visiblePosts = isMobile
    ? blogPosts
    : blogPosts.slice(
        currentSlide * postsPerSlide,
        (currentSlide + 1) * postsPerSlide
      );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Latest Articles
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CodeCrew <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Insights, tutorials, and updates from our team of web development
            experts.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="relative mb-16">
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            className={
              isMobile
                ? "flex overflow-x-auto space-x-4 scrollbar-hide py-2"
                : "grid grid-cols-1 md:grid-cols-3 gap-8"
            }
          >
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-[70vw] ${
                  isMobile
                    ? "min-w-[85%] flex-shrink-0"
                    : "transform hover:-translate-y-1"
                }`}
              >
                {/* Post Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-5">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Slide Indicators (Desktop only) */}
          {!isMobile && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center w-full shadow-sm animate-fade-in-up">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">
            Stay Updated
          </h3>
          <p className="text-blue-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest blog posts and web
            development tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-blue-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
