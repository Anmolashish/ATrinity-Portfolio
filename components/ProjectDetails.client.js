"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const ProjectImageGallery = dynamic(() =>
  import("./ProjectImageGallery.client")
);
const DescriptionWithToggle = dynamic(() =>
  import("./DescriptionWithToggle.client")
);

export default function ProjectDetailsClient({ project }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ProjectImageGallery images={project.images} title={project.title} />

      <div className="lg:w-1/2">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              project.type === "commercial"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {project.type === "commercial"
              ? "Client Project"
              : project.type === "academic"
              ? "Academic Project"
              : "Personal Project"}
          </span>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-gray-600 font-medium">Client:</span>
            <span className="ml-2 text-gray-800">
              {project.client || "N/A"}
            </span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Date:</span>
            <span className="ml-2 text-gray-800">{project.date || "N/A"}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Category:</span>
            <span className="ml-2 text-gray-800">
              {project.category || "N/A"}
            </span>
          </div>
        </div>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
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
        )}

        <DescriptionWithToggle description={project.description} />

        {project.challenges && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Challenges & Solutions
            </h3>
            <p className="text-gray-600">{project.challenges}</p>
          </div>
        )}

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
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg"
            >
              View Code
            </a>
          )}
          <Link
            href="/#portfolio"
            className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-2 px-6 rounded-lg"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
