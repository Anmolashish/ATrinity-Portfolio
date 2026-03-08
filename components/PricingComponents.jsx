"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const DEFAULT_IMAGE = "/default-project.jpg";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "seo", label: "SEO" },
    { id: "education", label: "Education" },
  ];

  const truncateText = (text = "", maxLength = 100) =>
    text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message || "Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter(
      (p) =>
        p.category?.toLowerCase() === activeFilter ||
        p.technologies?.some((tech) => tech.toLowerCase() === activeFilter),
    );
  }, [projects, activeFilter]);

  // Calculate slides
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const slidesPerView = getSlidesPerView();
  const totalSlides = Math.ceil(filteredProjects.length / slidesPerView);

  // Next/previous slide
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Featured Portfolio Projects | Web Development & Design</title>
        <meta
          name="description"
          content="Explore our featured portfolio of web development projects including React, Next.js, SEO optimization, and educational platforms. See our latest digital creations."
        />
        <meta
          name="keywords"
          content="portfolio, web development, React, Next.js, SEO, education, digital projects"
        />
        <meta property="og:title" content="Featured Portfolio Projects" />
        <meta
          property="og:description"
          content="Discover our latest digital creations that drive real results and deliver exceptional user experiences."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/portfolio" />
      </Head>

      <section
        id="portfolio"
        className="py-16 md:py-24 bg-white"
        aria-label="Portfolio Section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <div
              className="inline-flex items-center gap-3 mb-4"
              aria-hidden="true"
            >
              <div className="w-4 h-0.5 bg-blue-500"></div>
              <span className="text-sm font-semibold text-blue-600 tracking-widest">
                OUR WORK
              </span>
              <div className="w-4 h-0.5 bg-blue-500"></div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              <span className="text-gray-800">Featured</span>{" "}
              <span className="text-transparent bg-clip-text font-medium bg-blue-600 ">
                Portfolio
              </span>
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Discover our latest digital creations that drive{" "}
              <span className="font-semibold text-blue-600">real results</span>{" "}
              and deliver exceptional user experiences.
            </p>
          </header>

          {/* Filter Buttons */}
          <nav
            className="flex flex-wrap justify-center gap-3 mb-12"
            aria-label="Portfolio Filters"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setCurrentSlide(0);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                aria-pressed={activeFilter === filter.id}
                aria-label={`Filter by ${filter.label}`}
              >
                {filter.label}
              </button>
            ))}
          </nav>

          {error && (
            <div
              className="text-center text-red-600 mb-8 bg-red-50 p-4 rounded-xl"
              role="alert"
            >
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                aria-label="Retry loading projects"
              >
                Retry Loading
              </button>
            </div>
          )}

          {/* Projects Carousel */}
          <div className="relative">
            {/* Carousel Container - Changed back to overflow-hidden and added pb-8 for shadow visibility */}
            <div ref={containerRef} className="relative overflow-hidden pb-8">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {loading ? (
                  // Loading Skeletons
                  Array.from({ length: totalSlides || 1 }).map(
                    (_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="w-full flex-shrink-0"
                        style={{ minWidth: "100%" }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                          {Array.from({ length: slidesPerView }).map(
                            (_, idx) => (
                              <div
                                key={idx}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse h-full"
                              >
                                <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                                <div className="p-6">
                                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                  <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ),
                  )
                ) : filteredProjects.length > 0 ? (
                  // Actual Projects
                  Array.from({ length: totalSlides }).map((_, slideIndex) => {
                    const start = slideIndex * slidesPerView;
                    const slideProjects = filteredProjects.slice(
                      start,
                      start + slidesPerView,
                    );

                    return (
                      <div
                        key={slideIndex}
                        className="w-full flex-shrink-0"
                        style={{ minWidth: "100%" }}
                        role="group"
                        aria-label={`Slide ${slideIndex + 1} of ${totalSlides}`}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                          {slideProjects.map((project) => (
                            <article
                              key={project._id || project.id}
                              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
                              itemScope
                              itemType="https://schema.org/CreativeWork"
                            >
                              {/* Project Image */}
                              <figure className="relative h-48 overflow-hidden flex-shrink-0">
                                <Image
                                  src={
                                    project.image ||
                                    project.images?.[0] ||
                                    DEFAULT_IMAGE
                                  }
                                  alt={project.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                  loading="lazy"
                                />

                                {/* Gradient Overlay */}
                                <div
                                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                                  aria-hidden="true"
                                ></div>

                                {/* Category Badge */}
                                <figcaption className="absolute top-4 left-4">
                                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1.5 rounded-full">
                                    {project.category || "Web"}
                                  </span>
                                </figcaption>
                              </figure>

                              {/* Project Content - Made flex-grow to push button to bottom */}
                              <div className="p-6 flex flex-col flex-grow">
                                <h2
                                  className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                                  itemProp="name"
                                >
                                  {project.title}
                                </h2>

                                <p
                                  className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3"
                                  itemProp="description"
                                >
                                  {truncateText(project.description, 120)}
                                </p>

                                {/* Technologies */}
                                {project.technologies && (
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies
                                      .slice(0, 3)
                                      .map((tech, i) => (
                                        <span
                                          key={i}
                                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                          itemProp="keywords"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    {project.technologies.length > 3 && (
                                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                        +{project.technologies.length - 3}
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* Action Buttons - Will stick to bottom */}
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                                  <Link
                                    href={`/projects/${
                                      project._id || project.id
                                    }`}
                                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
                                    aria-label={`View details for ${project.title}`}
                                  >
                                    View Details
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                      />
                                    </svg>
                                  </Link>

                                  {project.demoUrl && (
                                    <a
                                      href={project.demoUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                      aria-label={`Live demo for ${project.title} (opens in new tab)`}
                                    >
                                      Live Demo
                                    </a>
                                  )}
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // No Projects State
                  <div
                    className="w-full flex-shrink-0"
                    style={{ minWidth: "100%" }}
                  >
                    <div className="text-center py-16">
                      <div className="max-w-md mx-auto">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-gray-700 text-lg mb-4 font-medium">
                          No projects found for this filter.
                        </h3>
                        <button
                          onClick={() => setActiveFilter("all")}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-shadow duration-300"
                          aria-label="Show all projects"
                        >
                          Show all projects
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > slidesPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                    currentSlide === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50 hover:shadow-xl"
                  } md:left-6 z-10`}
                  aria-label="Previous slide"
                  aria-disabled={currentSlide === 0}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= totalSlides - 1}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                    currentSlide >= totalSlides - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50 hover:shadow-xl"
                  } md:right-6 z-10`}
                  aria-label="Next slide"
                  aria-disabled={currentSlide >= totalSlides - 1}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}

            {/* Slide Dots Indicator */}
            {totalSlides > 1 && (
              <div
                className="flex justify-center gap-2 mt-8"
                role="tablist"
                aria-label="Slide indicators"
              >
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-selected={index === currentSlide}
                    role="tab"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
