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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Truncate text function
  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength || showFullDescription) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/projects/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Skeleton */}
            <div className="lg:w-1/2 space-y-4">
              <div className="bg-gray-200 rounded-xl h-96 w-full animate-pulse"></div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 w-20 h-20 rounded-md animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="lg:w-1/2 space-y-4">
              <div className="bg-gray-200 h-10 w-3/4 rounded animate-pulse"></div>
              <div className="bg-gray-200 h-6 w-1/4 rounded animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 h-4 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Error Loading Project
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link
            href="/#portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg inline-block"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Project Not Found
          </h2>
          <Link
            href="/#portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg inline-block"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | CodeCrew</title>
        <meta
          name="description"
          content={truncateText(project.description, 100)}
        />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Gallery */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden mb-4 bg-gray-100 aspect-video flex items-center justify-center">
                {project.images?.[activeImage] ? (
                  <img
                    src={project.images[activeImage]}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                    onError={(e) => {
                      e.target.src = "/images/default-project.jpg";
                    }}
                  />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}
              </div>
              <div className="flex gap-2">
                {project.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === index
                        ? "border-blue-600"
                        : "border-transparent"
                    } bg-gray-100 flex items-center justify-center`}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
                        }}
                      />
                    ) : (
                      <div className="text-xs text-gray-400">No image</div>
                    )}
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
                    : project.type === "academic"
                    ? "Academic Project"
                    : "Personal Project"}
                </span>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-gray-600 font-medium">Client:</span>
                  <span className="ml-2 text-gray-800">
                    {project.client || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Date:</span>
                  <span className="ml-2 text-gray-800">
                    {project.date || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className="ml-2 text-gray-800">
                    {project.category || "N/A"}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description with Read More */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project Description
                </h3>
                <p className="text-gray-600 mb-2">
                  {truncateText(project.description)}
                </p>
                {project.description?.length > 150 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Challenges & Solutions
                  </h3>
                  <p className="text-gray-600">{project.challenges}</p>
                </div>
              )}

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
    </>
  );
}
