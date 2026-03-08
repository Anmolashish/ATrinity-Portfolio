import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ServicesPage1() {
  const services = [
    "Web Development",
    "UI / UX Design",
    "SEO Optimization",
    "E-commerce",
    "Landing Pages",
    "Performance",
    "Maintenance",
    "Custom Solutions",
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
            Atrinity Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6">
            Websites That Work
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 text-sm sm:text-base">
            Atrinity builds fast, modern and SEO-ready websites designed for
            performance and long-term growth. From custom development to
            high-quality UI/UX design, every project focuses on speed,
            scalability and real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/projects"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/contact"
              className="border border-indigo-500 text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-center text-sm sm:text-base"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CIRCLE STRUCTURE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          {/* Row 1 */}
          <ServicePill text={services[0]} />

          {/* Row 2 */}
          <div className="flex gap-10">
            <ServicePill text={services[1]} />
            <ServicePill text={services[2]} />
          </div>

          {/* Row 3 (widest row) */}
          <div className="flex gap-30">
            <ServicePill text={services[3]} />
            <ServicePill text={services[4]} />
          </div>

          {/* Row 4 */}
          <div className="flex gap-10">
            <ServicePill text={services[5]} />
            <ServicePill text={services[6]} />
          </div>

          {/* Row 5 */}
          <ServicePill text={services[7]} />
        </div>
      </div>
    </section>
  );
}

function ServicePill({ text }) {
  return (
    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full whitespace-nowrap text-xs sm:text-sm font-medium shadow-[0_10px_25px_rgba(99,102,241,0.25)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.35)] transition-shadow duration-300">
      {text}
    </div>
  );
}
