"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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
        (a, b) => new Date(b.date) - new Date(a.date)
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

  if (loading && page === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Latest Articles
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CodeCrew <span className="text-blue-600">Blog</span>
            </h1>
            <div className="flex justify-center">
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CodeCrew <span className="text-blue-600">Blog</span>
            </h1>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <p>Error loading blog posts: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Header */}
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

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Post Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/images/blogs/default.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={page === 1}
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

            {loading && page > 1 && (
              <div className="flex justify-center mt-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            )}

            {!hasMore && (
              <div className="text-center mt-8 text-gray-500">
                Youve reached the end of our blog posts
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found</p>
            <Link
              href="/"
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Return Home
            </Link>
          </div>
        )}

        {/* Newsletter Signup */}
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
    </div>
  );
}
