"use client";
import React, { useState, useEffect } from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage1() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filters = [
    { id: "all", label: "All" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "seo", label: "SEO" },
    { id: "education", label: "Education" },
  ];

  // SEO-optimized headings and descriptions based on category
  const getSEOText = (filterId) => {
    const seoContent = {
      all: {
        heading: "Web Development Projects",
        description:
          "Atrinity IT Agency in Jalandhar, Punjab specializes in creating cutting-edge web solutions. Explore our portfolio of custom websites, web applications, and digital experiences built with modern technologies. We deliver fast, secure, and SEO-optimized websites that help businesses grow in the digital landscape.",
      },
      react: {
        heading: "React JS Development Projects",
        description:
          "Expert React JS development services in Jalandhar, Punjab. Our portfolio showcases dynamic single-page applications, interactive UIs, and complex web solutions built with React. We leverage component-based architecture to create fast, scalable, and maintainable applications for businesses.",
      },
      nextjs: {
        heading: "Next.js Development Projects",
        description:
          "Leading Next.js development agency in Jalandhar, Punjab. Discover our server-side rendered applications, static sites, and full-stack solutions built with Next.js. We create SEO-friendly, high-performance websites that deliver exceptional user experiences and ranking advantages.",
      },
      seo: {
        heading: "SEO Optimized Web Projects",
        description:
          "SEO-focused web development agency in Jalandhar, Punjab. View our projects that combine stunning design with search engine optimization. We build websites with clean code, fast loading times, and structured data to ensure maximum visibility on search engines.",
      },
      education: {
        heading: "Education & E-Learning Projects",
        description:
          "Innovative e-learning solutions from our Jalandhar, Punjab agency. Explore our educational platforms, learning management systems, and interactive course websites. We create engaging digital experiences that make learning accessible and effective.",
      },
    };
    return seoContent[filterId] || seoContent.all;
  };

  const currentSEO = getSEOText(activeFilter);

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

  // Filter projects based on active filter
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return (
      project.category?.toLowerCase() === activeFilter ||
      project.technologies?.some((tech) => tech.toLowerCase() === activeFilter)
    );
  });

  // Get other filter categories (excluding current active filter)
  const getOtherCategories = () => {
    // Get all filters except "all"
    const otherFilters = filters.filter((f) => f.id !== "all");

    return otherFilters
      .map((filter) => {
        // Find a project that matches this filter category
        const categoryProject = projects.find(
          (p) =>
            p.category?.toLowerCase() === filter.id ||
            p.technologies?.some((tech) => tech.toLowerCase() === filter.id),
        );

        return {
          id: filter.id,
          label: filter.label,
          project: categoryProject || projects[0], // Fallback to first project if no match
        };
      })
      .slice(0, 3); // Limit to 3 categories
  };

  const otherCategories = getOtherCategories();

  // Get current projects to display
  const currentProjects = filteredProjects.slice(0, visibleProjects);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  // Extended description length
  const truncateText = (text = "", maxLength = 300) => {
    if (!text) return "";
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="py-20 flex flex-col items-center">
      {/* Dynamic SEO Headings */}
      <h1 className="font-serif text-[35px] sm:text-4xl lg:text-5xl leading-[1.1] font-light text-center tracking-tight mb-4 uppercase">
        {currentSEO.heading}
      </h1>
      <p className="text-center font-light text-sm max-w-[1080px] w-[90%] mb-6">
        {currentSEO.description}
      </p>

      {/* Filter Buttons */}
      <div className="w-full flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => {
              setActiveFilter(filter.id);
              setVisibleProjects(4);
            }}
            className={`rounded-full py-2 px-6 transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-[#2A66FF] border-[#2A66FF] border-2 text-white"
                : "border-[#2A66FF] border-2 text-[#2A66FF] hover:bg-[#2A66FF] hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Error State */}
      {error && (
        <div className="w-full max-w-[1080px] text-center text-red-600 mb-8 bg-red-50 p-4 rounded-xl">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-[#2A66FF] text-white rounded-lg hover:bg-blue-600"
          >
            Retry Loading
          </button>
        </div>
      )}

      {/* Projects Display */}
      <div className="w-full flex flex-col gap-8 items-center">
        {loading ? (
          // Loading Skeletons
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full max-w-[1222px] animate-pulse">
              <div className="bg-gray-200 h-64 rounded-xl mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))
        ) : currentProjects.length > 0 ? (
          // Actual Projects - Alternating Left and Right layout
          currentProjects.map((project, index) => {
            const ProjectComponent =
              index % 2 === 0 ? ProjectLeft : ProjectRight;
            return (
              <ProjectComponent
                key={project._id || project.id}
                category={project.category || "Client"}
                title={project.title}
                description={truncateText(project.description, 300)}
                demoUrl={project.demoUrl || ""}
                projectDetails={`/projects/${project._id || project.id}`}
                image={project.image || project.images?.[0]}
                technologies={project.technologies}
              />
            );
          })
        ) : (
          // No Projects State
          <div className="text-center py-16">
            <p className="text-gray-700 text-lg mb-4">
              No projects found for this filter.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-6 py-3 bg-[#2A66FF] text-white font-medium rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>

      {/* View More Button */}
      {!loading && !error && visibleProjects < filteredProjects.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewMore}
            className="text-center font-bold hover:text-[#2A66FF] transition-colors duration-300 cursor-pointer"
          >
            View more
          </button>
        </div>
      )}

      {/* More Categories Section - Always show when not loading and projects exist */}
      {!loading && projects.length > 0 && (
        <div className="max-w-[1222px] w-full mt-20 max-md:px-4">
          <h2 className="font-serif text-[35px] sm:text-4xl lg:text-5xl leading-[1.1] font-light tracking-tight uppercase mb-4">
            More Categories
          </h2>
          <p className="font-light text-sm max-w-[720px] w-[90%] mb-8">
            Explore our expertise across different technologies and domains.
            Each category showcases our commitment to excellence in web
            development.
          </p>

          {/* Other Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveFilter(item.id);
                  setVisibleProjects(4);
                  // Scroll to top smoothly
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group block relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer text-left w-full"
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      item.project?.image ||
                      item.project?.images?.[0] ||
                      "/default-project.jpg"
                    }
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Category Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {item.project
                        ? truncateText(item.project.description, 100)
                        : `Explore our ${item.label} projects and case studies`}
                    </p>
                  </div>
                </div>

                {/* View Category Link */}
                <div className="p-4 flex justify-between items-center bg-white">
                  <span className="text-sm font-medium text-gray-700">
                    View {item.label} Projects
                  </span>
                  <svg
                    className="w-5 h-5 text-[#2A66FF] transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
