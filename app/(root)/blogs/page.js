"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Contact from "@/components/Contact";
import HeroBlocks from "@/components/CTA";
import TeamSection from "@/components/Team";
import React from "react";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";

export default function BlogIndex() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to truncate excerpt
  const truncateExcerpt = (text, maxLength = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Fetch blog posts from API
  const fetchBlogPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs?page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Sort by date (newest first)
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );

      if (page === 1) {
        setBlogPosts(sortedData);
      } else {
        setBlogPosts((prev) => [...prev, ...sortedData]);
      }

      setHasMore(data.length > 0);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading ||
        !hasMore
      ) {
        return;
      }
      setPage((prev) => prev + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(blogPosts.length - cardsPerView, 0);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + cardsPerView, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  };

  if (loading && page === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center my-20">
            <h1 className="font-serif text-[45px] sm:text-5xl lg:text-[64px] leading-[1.1] font-light tracking-tight">
              INSIGHTS, IDEAS &
              <span className="text-[#2A66FF]">
                <br />
                STORIES
              </span>
            </h1>

            <p className="text-base m-auto mt-5 font-[var(--font-istok)] max-w-[720px] text-gray-700 animate-fade-up delay-100">
              Practical thoughts on web development, design, performance, SEO,
              and building better digital products.
            </p>

            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 mx-auto mt-3 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 hover:bg-gray-900 transition shrink-0">
              Read articles
              <ArrowUpRight size={20} />
            </button>
            <div className="flex justify-center mt-15">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center my-20">
            <h1 className="font-serif text-[45px] sm:text-5xl lg:text-[64px] leading-[1.1] font-light tracking-tight">
              INSIGHTS, IDEAS &
              <span className="text-[#2A66FF]">
                <br />
                STORIES
              </span>
            </h1>

            <p className="text-base m-auto mt-5 font-[var(--font-istok)] max-w-[720px] text-gray-700 animate-fade-up delay-100">
              Practical thoughts on web development, design, performance, SEO,
              and building better digital products.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 mx-auto mt-3 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 hover:bg-gray-900 transition shrink-0"
            >
              Try again
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <PageHeader
          buttonText="Read articles"
          paraText="Practical thoughts on web development, design, performance, SEO, and building better digital products."
          headingText={
            <>
              INSIGHTS, IDEAS &
              <br />
              <span className="text-[#2A66FF]">STORIES</span>
            </>
          }
        />
        {/* Trending Blogs Section */}
        {blogPosts.length > 0 && (
          <section className="mb-24">
            {/* Section Heading */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                Trending Blogs
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Read our latest blogs that get posted on the atrinity website
              </p>
            </div>

            {/* Featured Blog */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Image */}
              <div className="relative w-full max-md:h-[200px] h-[320px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={blogPosts[0].image || "/images/blogs/default.jpg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center h-full">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                  {blogPosts[0].category || "Sub heading here"}
                </p>

                <h3 className="text-4xl max-md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>

                <p className="text-gray-600 max-md:text-sm leading-relaxed max-w-xl text-justify">
                  {truncateExcerpt(blogPosts[0].excerpt, 350)}
                </p>

                <Link
                  href={`/blogs/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 mt-6 text-black font-medium hover:underline"
                >
                  Read more
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Bottom Blog Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {blogPosts.slice(1, 5).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="block"
                >
                  <div className="relative w-full h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={post.image || "/images/blogs/default.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Next.js Blogs Section */}
        {blogPosts.length > 0 && (
          <section className="mb-28">
            {/* Section Header */}
            <div className="mb-14">
              <h2 className="text-3xl font-semibold text-gray-900">
                Next JS blogs
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Read our latest blogs that get posted on the atrinity website
              </p>
            </div>

            {/* Blog List */}
            <div className="space-y-14">
              {blogPosts
                .filter(
                  (post) =>
                    post.category?.toLowerCase() === "next.js" ||
                    post.category?.toLowerCase() === "nextjs" ||
                    post.tags?.some((tag) =>
                      ["nextjs", "next.js", "next-js"].includes(
                        tag.toLowerCase(),
                      ),
                    ),
                )
                .slice(0, 4)
                .map((post, index) => (
                  <article
                    key={post.slug}
                    className="flex gap-8 items-start max-md:gap-4"
                  >
                    {/* Image */}
                    <div className="relative w-full min-w-[150px] max-w-[320px] h-[200px] max-md:h-[140px] bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={post.image || "/images/blogs/default.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center h-full">
                      <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-2">
                        {post.category || "Sub heading here"}
                      </p>

                      <h3 className="text-2xl max-sm:text-sm font-bold text-gray-900 mb-3">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p
                        className={`text-gray-600 leading-relaxed max-w-6xl text-justify ${
                          isMobile ? "text-sm" : "text-base"
                        }`}
                      >
                        {truncateExcerpt(post.excerpt, isMobile ? 100 : 260)}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
      </div>
      <Newsletter />
      <div className="container mx-auto px-4 sm:px-6">
        <section className="mb-32">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Read Our latest blogs
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Read our latest blogs that get posted on the atrinity website
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="mr-6 p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-30"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Cards */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / cardsPerView
                  }%)`,
                }}
              >
                {blogPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="min-w-full sm:min-w-[33.333%] lg:min-w-[25%]"
                  >
                    <div className="bg-white">
                      {/* Image */}
                      <div className="relative h-[220px] bg-gray-200 mb-4">
                        <Image
                          src={post.image || "/images/blogs/default.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {post.category || "Sub heading here"}
                      </p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {truncateExcerpt(post.excerpt, 120)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="ml-6 p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-30"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </div>

      <TeamSection />
      <HeroBlocks />
      <Contact />
    </div>
  );
}
