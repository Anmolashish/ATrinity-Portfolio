"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DEFAULT_IMAGE = "/default-project.jpg";
const MAX_PROJECTS = 6;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "seo", label: "SEO" },
    { id: "education", label: "Education" },
  ];

  const truncateText = (text = "", maxLength = 100) =>
    text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => setError(err.message || "Error fetching projects"))
      .finally(() => setLoading(false));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter(
      (p) =>
        p.category?.toLowerCase() === activeFilter ||
        p.technologies?.some((tech) => tech.toLowerCase() === activeFilter)
    );
  }, [projects, activeFilter]);

  const displayedProjects = useMemo(() => {
    return showAll ? filteredProjects : filteredProjects.slice(0, MAX_PROJECTS);
  }, [filteredProjects, showAll]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false); // Reset showAll when changing filters
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our skills.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full capitalize text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="text-center text-red-600 mb-6">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              Retry
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project, idx) => (
                  <article
                    key={project._id || project.id}
                    className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-48 md:h-52">
                      <Image
                        src={
                          project.image || project.images?.[0] || DEFAULT_IMAGE
                        }
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading={idx > 2 ? "lazy" : "eager"}
                        priority={idx === 0}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800">
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.type === "commercial"
                              ? "bg-green-100 text-green-800"
                              : project.type === "academic"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {project.type === "commercial"
                            ? "Client"
                            : project.type === "academic"
                            ? "Academic"
                            : "Personal"}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {truncateText(project.description)}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies?.length > 4 && (
                          <span className="text-xs text-gray-600">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <Link
                          href={`/projects/${project._id || project.id}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          View Details →
                        </Link>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center col-span-full">
                  <p className="text-gray-600">
                    No projects match this filter.
                  </p>
                  <button
                    onClick={() => setActiveFilter("all")}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Show all projects
                  </button>
                </div>
              )}
            </div>

            {/* Show More/Less Button */}
            {filteredProjects.length > MAX_PROJECTS && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
