"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id;

  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "FashionHub",
      type: "commercial",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      description:
        "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout. The platform was built with a focus on performance and user experience, resulting in a 30% increase in conversion rates for the client.",
      challenges:
        "The main challenge was handling high traffic during peak shopping periods. We implemented server-side rendering with Next.js and optimized database queries to ensure fast page loads even during traffic spikes. We also added a robust caching layer to reduce server load.",
      images: [
        "/images/projects/ecommerce.jpg",
        "/images/projects/ecommerce-2.jpg",
        "/images/projects/ecommerce-3.jpg",
      ],
      date: "May 2023",
      category: "E-commerce",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "University Portal",
      client: "College Project",
      type: "academic",
      technologies: ["React", "Firebase", "Material UI"],
      description:
        "A student portal for managing courses, assignments, and grades with real-time updates. The system features role-based access control for students, professors, and administrators.",
      challenges:
        "The challenge was implementing real-time updates across different user roles while maintaining data security. We used Firebase's real-time database and implemented strict security rules to ensure data integrity and privacy.",
      images: [
        "/images/projects/university.jpg",
        "/images/projects/university-2.jpg",
        "/images/projects/university-3.jpg",
      ],
      date: "March 2023",
      category: "Education",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  useEffect(() => {
    if (id) {
      const selectedProject = projects.find((p) => p.id === parseInt(id));
      setProject(selectedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | CodeCrew</title>
        <meta name="description" content={project.description} />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="CodeCrew Logo"
                className="h-10"
              />
              <span className="ml-3 text-xl font-bold text-blue-600">
                CodeCrew
              </span>
            </Link>

            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-white md:bg-transparent p-6 md:p-0`}
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                {[
                  "Home",
                  "Services",
                  "Portfolio",
                  "Team",
                  "About",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Gallery */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.images[activeImage]}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === index
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {project.title}
                </h1>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    project.type === "commercial"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.type === "commercial"
                    ? "Client Project"
                    : "College Project"}
                </span>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-gray-600 font-medium">Client:</span>
                  <span className="ml-2 text-gray-800">{project.client}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Date:</span>
                  <span className="ml-2 text-gray-800">{project.date}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className="ml-2 text-gray-800">{project.category}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project Description
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Challenges & Solutions
                </h3>
                <p className="text-gray-600">{project.challenges}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
                  >
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    View Code
                  </a>
                )}
                <Link
                  href="/#portfolio"
                  className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-4">
                <img
                  src="/images/logo-light.svg"
                  alt="CodeCrew Logo"
                  className="h-8"
                />
                <span className="ml-2 text-xl font-bold">CodeCrew</span>
              </Link>
              <p className="text-gray-400 mb-4">
                College friends turned web development experts. We build fast,
                modern, and SEO-friendly websites.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Services",
                  "Portfolio",
                  "Team",
                  "About",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "React.js Development",
                  "Next.js Solutions",
                  "SEO Optimization",
                  "Web Maintenance",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on our latest projects and web
                development tips.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CodeCrew. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
