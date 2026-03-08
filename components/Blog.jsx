"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ----------------------------------
   DEMO DATA (temporary, safe to delete later)
----------------------------------- */
const DEMO_BLOGS = [
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
  {
    slug: "#",
    title: "",
    excerpt: "",
    image: "/demo1.png",
    date: "",
  },
];

export default function BlogIndex() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ----------------------------------
     REAL API (enable when blogs exist)
  ----------------------------------- */
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();

        if (data?.length) {
          setBlogPosts(
            data.sort((a, b) => new Date(b.date) - new Date(a.date))
          );
        } else {
          // If API returns empty but no error, use demo data
          setBlogPosts(DEMO_BLOGS);
        }
      } catch (err) {
        console.warn("Using demo blogs due to error:", err.message);
        setError(err.message);
        setBlogPosts(DEMO_BLOGS);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Structure the posts for layout
  const [featured, ...rest] =
    loading || blogPosts.length === 0
      ? [null, ...Array(6).fill(null)]
      : blogPosts;
  const middle = rest.slice(0, 3);
  const right = rest.slice(3, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-center text-4xl font-light mb-26">
        Featured{" "}
        <span className="text-blue-600 font-medium">Atrinity Blogs</span>
      </h2>

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-center">
          <p className="text-red-600 text-sm">
            Could not load blogs: {error}. Using demo content.
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT — BIG FEATURE */}
        <div className="relative rounded-2xl overflow-hidden group h-[400px]">
          {loading ? (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl" />
          ) : featured ? (
            <Link href={`/blogs/${featured.slug}`} className="block h-full">
              <Image
                src={featured.image}
                alt={featured.title}
                width={600}
                height={700}
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-semibold">
                  {featured.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center rounded-2xl">
              <p className="text-gray-500">No featured blog available</p>
            </div>
          )}
        </div>

        {/* MIDDLE — STACKED SMALL */}
        <div className="flex flex-col gap-8">
          {middle.map((post, index) => (
            <div key={index} className="flex gap-4 items-start">
              {loading ? (
                <>
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded mb-2 w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded w-full"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded w-5/6"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded w-2/3"></div>
                    </div>
                  </div>
                </>
              ) : post ? (
                <Link
                  href={`/blogs/${post.slug}`}
                  className="flex gap-4 items-start w-full"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{post.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-3 mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="w-full p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 text-sm">No blog post</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — TWO MEDIUM */}
        <div className="flex flex-col gap-10">
          {right.map((post, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group h-[200px]"
            >
              {loading ? (
                <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl" />
              ) : post ? (
                <Link href={`/blogs/${post.slug}`} className="block h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                    <h4 className="text-white text-xl font-semibold">
                      {post.title}
                    </h4>
                    <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center rounded-2xl">
                  <p className="text-gray-500">No blog post</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View More - Only show when not loading and have posts */}
      {!loading && blogPosts.length > 0 && (
        <div className="text-center mt-16">
          <Link
            href="/blogs"
            className="text-sm font-medium inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            view more →
          </Link>
        </div>
      )}
    </section>
  );
}
