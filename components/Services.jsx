export default function Services() {
  const services = [
    {
      title: "React.js Development",
      icon: "/icons/react.svg",
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
      title: "Next.js Solutions",
      icon: "/icons/nextjs.svg",
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
      title: "SEO Optimization",
      icon: "/icons/seo.svg",
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
      title: "Web Maintenance",
      icon: "/icons/maintenance.svg",
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web development solutions tailored to your
            business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
