"use client";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "FashionHub",
      type: "commercial",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      description:
        "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout.",
      image: "/images/projects/ecommerce.jpg",
      demoUrl: "#",
      category: "nextjs",
    },
    {
      id: 2,
      title: "University Portal",
      client: "College Project",
      type: "academic",
      technologies: ["React", "Firebase", "Material UI"],
      description:
        "A student portal for managing courses, assignments, and grades with real-time updates.",
      image: "/images/projects/university.jpg",
      demoUrl: "#",
      category: "react",
    },
    {
      id: 3,
      title: "Restaurant Website",
      client: "TasteBuds",
      type: "commercial",
      technologies: ["HTML", "CSS", "JavaScript", "SEO"],
      description:
        "A responsive website with online reservation system and menu display.",
      image: "/images/projects/restaurant.jpg",
      demoUrl: "#",
      category: "seo",
    },
    {
      id: 4,
      title: "Task Management App",
      client: "College Project",
      type: "academic",
      technologies: ["React", "Redux", "Node.js"],
      description:
        "A collaborative task management application with real-time updates.",
      image: "/images/projects/taskapp.jpg",
      demoUrl: "#",
      category: "react",
    },
    {
      id: 5,
      title: "Marketing Agency",
      client: "GrowthMasters",
      type: "commercial",
      technologies: ["Next.js", "Tailwind CSS", "SEO"],
      description:
        "A high-performance marketing agency website with lead capture forms.",
      image: "/images/projects/marketing.jpg",
      demoUrl: "#",
      category: "nextjs",
    },
    {
      id: 6,
      title: "Portfolio Website",
      client: "Creative Studio",
      type: "commercial",
      technologies: ["HTML", "CSS", "JavaScript", "SEO"],
      description:
        "A minimalist portfolio website for a creative design studio.",
      image: "/images/projects/portfolio.jpg",
      demoUrl: "#",
      category: "seo",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.technologies.some(
              (tech) => tech.toLowerCase() === activeFilter
            )
        );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our skills and
            expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["all", "react", "nextjs", "seo"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
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

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
