// pages/blog/[slug].js
"use client";
import { useParams } from "next/navigation";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Sample blog data (in a real app, you'd fetch this from an API or CMS)
const blogPosts = [
  {
    slug: "why-nextjs-is-the-future",
    title: "Why Next.js is the Future of React Development",
    date: "May 15, 2023",
    category: "Next.js",
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
    content: `
      <p>Next.js has emerged as one of the most popular React frameworks, and for good reason. It solves many of the challenges that come with building production-ready React applications.</p>
      
      <h2>The Power of Server-Side Rendering</h2>
      <p>One of the biggest advantages of Next.js is its built-in support for server-side rendering (SSR). Unlike traditional React apps that render entirely in the browser, Next.js can render pages on the server, delivering fully formed HTML to the client.</p>
      
      <p>This approach offers several benefits:</p>
      <ul>
        <li>Improved SEO as search engines can crawl your content more effectively</li>
        <li>Faster initial page loads, especially on slower devices or networks</li>
        <li>Better social media sharing with proper meta tags</li>
      </ul>
      
      <h2>Static Site Generation for Blazing Fast Performance</h2>
      <p>Next.js also supports static site generation (SSG), where pages are pre-rendered at build time. This is perfect for content that doesn't change frequently, like blog posts or marketing pages.</p>
      
      <p>With SSG, you get:</p>
      <ul>
        <li>Instant page loads since HTML is already generated</li>
        <li>Reduced server load and costs</li>
        <li>Excellent performance scores out of the box</li>
      </ul>
      
      <h2>API Routes for Full-Stack Applications</h2>
      <p>Next.js includes API routes, allowing you to build your frontend and backend in the same project. This is perfect for:</p>
      <ul>
        <li>Handling form submissions</li>
        <li>Creating custom endpoints</li>
        <li>Integrating with databases or external APIs</li>
      </ul>
      
      <p>The combination of these features makes Next.js an incredibly versatile framework that can handle everything from simple static sites to complex web applications.</p>
    `,
    author: {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/images/team/alex.jpg",
    },
  },
  // Add other blog posts here...
];

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | CodeCrew Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">• {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {post.author.role} at CodeCrew with expertise in modern web
                technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-16">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
