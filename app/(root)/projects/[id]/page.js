import ProjectDetailsClient from "@/components/ProjectDetails.client";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return {
      title: "Project Not Found | Atrinity",
      description: "The requested project could not be found.",
    };
  }

  const project = await res.json();

  return {
    title: `${project.title} | Atrinity Portfolio`,
    description: project.description?.slice(0, 150),
    openGraph: {
      title: project.title,
      description: project.description?.slice(0, 150),
      images: [project.images?.[0] || "/images/default-project.jpg"],
    },
  };
}

export default async function ProjectDetails({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Error Loading Project
          </h2>
          <p className="text-gray-600 mb-4">Failed to fetch project data.</p>
          <Link
            href="/#portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const project = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <ProjectDetailsClient project={project} />
      </div>
    </main>
  );
}
