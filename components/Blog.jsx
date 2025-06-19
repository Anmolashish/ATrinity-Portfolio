"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlogIndex() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const maxSlides = 4; // Maximum 4 carousel slides
  const postsPerSlide = 3;

  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Sort by date (newest first)
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogPosts(sortedData);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides, limited to maxSlides
  const totalSlides = Math.min(
    Math.ceil(blogPosts.length / postsPerSlide),
    maxSlides
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Get posts for current slide (newest first)
  const visiblePosts = isMobile
    ? blogPosts.slice(0, postsPerSlide * maxSlides) // Show first 12 posts on mobile
    : blogPosts.slice(
        currentSlide * postsPerSlide,
        (currentSlide + 1) * postsPerSlide
      );

  // Function to truncate excerpt
  const truncateExcerpt = (text, maxLength = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12"
      id="blog"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header - Always visible */}
        <div className="text-center mb-16">
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

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center mb-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mb-16 text-center">
            <p>Error loading blog posts: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              Try again
            </button>
          </div>
        )}

        {/* Blog Posts - Only render when not loading and no error */}
        {!loading && !error && blogPosts.length > 0 && (
          <div className="relative mb-16">
            {!isMobile && totalSlides > 1 && (
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
                      src={post.image || "/images/blogs/default.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={true}
                      onError={(e) => {
                        e.currentTarget.src = "/images/blogs/default.jpg";
                      }}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,..."
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
                        href={`/blogs/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-5">
                      {truncateExcerpt(post.excerpt)}
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={
                              post.author?.image || "/images/team/default.jpg"
                            }
                            alt={post.author?.name || "Author"}
                            fill
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 50px, 10vw"
                            onError={(e) => {
                              e.currentTarget.src = "/images/team/default.jpg";
                            }}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author?.name || "Unknown Author"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {post.author?.role || "Team Member"}
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
            {!isMobile && totalSlides > 1 && (
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

            {/* View More Button */}
            <div className="text-center mt-8">
              <Link
                href="/blogs"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </div>
        )}

        {/* Newsletter Signup - Always visible */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center w-full shadow-sm">
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
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200 bg-white"
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
