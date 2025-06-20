// File: app/blogs/[slug]/page.js

import Image from "next/image";
import Link from "next/link";

// 1. Generate Metadata
export async function generateMetadata({ params }) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"
    }/api/blogs/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      title: "Blog Not Found | Atrinity",
      description: "The requested blog post could not be found.",
    };
  }

  const post = await res.json();

  return {
    title: `${post.title} | Atrinity Blog`,
    description: post.excerpt || post.content.slice(0, 150),
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 150),
      images: [post.image || "/images/default-blog.jpg"],
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"
      }/blogs/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.content.slice(0, 150),
      images: [post.image || "/images/default-blog.jpg"],
    },
  };
}

// 2. Page Component
export default async function BlogPost({ params }) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"
    }/api/blogs/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl text-red-600 font-semibold mb-2">Error</h2>
          <p className="mb-4 text-gray-600">Blog post not found.</p>
          <Link
            href="/blogs"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const post = await res.json();

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">• {post.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-200">
            <Image
              src={post.author?.image || "/images/default-avatar.jpg"}
              alt={post.author?.name || "Author"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {post.author?.name || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
      </header>

      <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
        <Image
          src={post.image || "/images/default-blog.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
