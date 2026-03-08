import React from "react";
import { Code } from "lucide-react";

export default function ServicesPage2() {
  const services = [
    {
      title: "Website Development",
      desc: "Custom, high-performance websites built for speed, scalability and long-term business growth.",
      gradient: "from-blue-50 to-indigo-50/30",
    },
    {
      title: "Web Application Development",
      desc: "Modern web applications designed for performance, usability and seamless user experience.",
      gradient: "from-indigo-50 to-purple-50/30",
      highlight: true,
    },
    {
      title: "UI / UX Design",
      desc: "User-focused interfaces that combine clean design with intuitive digital experiences.",
      gradient: "from-purple-50 to-pink-50/30",
    },
    {
      title: "SEO Optimization",
      desc: "Technical SEO and performance improvements to help your website rank better and load faster.",
      gradient: "from-blue-50 to-indigo-50/30",
    },
    {
      title: "E-commerce Development",
      desc: "Scalable online stores with secure payments, optimized performance and conversion-focused design.",
      gradient: "from-indigo-50 to-purple-50/30",
      highlight: true,
    },
    {
      title: "Website Maintenance",
      desc: "Continuous updates, performance monitoring and security improvements to keep your site reliable.",
      gradient: "from-purple-50 to-pink-50/30",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 tracking-wide leading-tight">
            Digital Services Built
            <br />
            for Performance & Growth
          </h2>
        </div>

        {/* SERVICES GRID - Smaller gap as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            // Alternate gradient direction based on index
            const gradientDirection =
              index % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-bl";
            const hoverDirection =
              index % 2 === 0
                ? "hover:bg-gradient-to-bl"
                : "hover:bg-gradient-to-br";

            return (
              <div
                key={index}
                className={`group relative p-6 md:p-8 text-center rounded-xl transition-all duration-700 ease-in-out overflow-hidden
                  ${gradientDirection} ${service.gradient} bg-white
                  ${service.highlight ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
              >
                {/* Gradient overlay that moves on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out
                    ${hoverDirection} ${service.gradient}`}
                  style={{
                    backgroundSize: "200% 200%",
                    backgroundPosition: index % 2 === 0 ? "0% 0%" : "100% 0%",
                  }}
                ></div>

                {/* Content with relative positioning to appear above gradient */}
                <div className="relative z-10">
                  {/* ICON */}
                  <div className="flex justify-center mb-4 md:mb-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-400 transition-colors duration-300">
                      <Code size={20} className="md:w-6 md:h-6 text-gray-700" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3 text-gray-800">
                    {service.title}
                  </h3>

                  {/* DIVIDER - Thinner and lighter */}
                  <div className="w-10 h-px bg-gray-300 mx-auto mb-3 md:mb-4 group-hover:bg-gray-400 transition-colors duration-300"></div>

                  {/* DESCRIPTION */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
