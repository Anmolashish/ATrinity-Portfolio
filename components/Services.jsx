export default function Services() {
  const services = [
    {
      id: "react-development",
      title: "React.js Development",
      icon: "react.webp",
      description:
        "We build fast, responsive, and interactive user interfaces with React. Our components are optimized for performance and reusability.",
      benefits: [
        "Component-based architecture",
        "State management solutions",
        "Custom hooks for logic reuse",
        "Performance optimization",
      ],
    },
    {
      id: "nextjs-solutions",
      title: "Next.js Solutions",
      icon: "next.webp",
      description:
        "Server-side rendering, static generation, and API routes - we leverage Next.js for SEO-friendly, high-performance applications.",
      benefits: [
        "Improved SEO with SSR/SSG",
        "Built-in API routes",
        "Image optimization",
        "Fast refresh development",
      ],
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      icon: "seo.webp",
      description:
        "We don't just build websites - we ensure they're visible. Our SEO strategies help you rank higher and attract more visitors.",
      benefits: [
        "Technical SEO audits",
        "Keyword research",
        "Content optimization",
        "Performance improvements",
      ],
    },
    {
      id: "web-maintenance",
      title: "Web Maintenance",
      icon: "/icons/maintenance.svg",
      alt: "Maintenance icon",
      description:
        "Ongoing support and updates to keep your website secure, fast, and up-to-date with the latest technologies.",
      benefits: [
        "Security updates",
        "Performance monitoring",
        "Content updates",
        "Backup management",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4"
          >
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We offer comprehensive web development solutions tailored to your
            business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-gray-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300 group"
              aria-labelledby={`${service.id}-title`}
            >
              <div className="bg-blue-100 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-200">
                <img
                  src={service.icon}
                  alt={service.alt}
                  width={32}
                  height={32}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <h3
                id={`${service.id}-title`}
                className="text-lg md:text-xl font-bold text-blue-800 mb-3"
              >
                {service.title}
              </h3>

              <p className="sr-only">{service.description}</p>

              <ul className="space-y-2 md:space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
