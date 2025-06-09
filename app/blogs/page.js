// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";

// Sample blog data (in a real app, you'd fetch this from an API or CMS)
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
    slug: "seo-for-react-apps",
    title: "SEO Best Practices for React Applications",
    excerpt:
      "Learn how to make your React apps more search-engine friendly with these practical tips.",
    date: "April 28, 2023",
    category: "SEO",
    readTime: "7 min read",
    image: "/images/blog/seo.jpg",
    author: {
      name: "Taylor Smith",
      role: "SEO Specialist",
      image: "/images/team/taylor.jpg",
    },
  },
  {
    slug: "nextjs-performance",
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover techniques to make your Next.js apps lightning fast and improve user experience.",
    date: "June 10, 2023",
    category: "Next.js",
    readTime: "6 min read",
    image: "/images/blog/performance.jpg",
    author: {
      name: "Sam Wilson",
      role: "Backend Developer",
      image: "/images/team/sam.jpg",
    },
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            CodeCrew Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team of web development
            experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest blog posts and web
            development tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
