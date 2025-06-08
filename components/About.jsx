"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector(".skill-progress");
            const width = progressBar.getAttribute("data-width");
            progressBar.style.width = width;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      title: "Fast Execution",
      description:
        "Our streamlined processes and teamwork allow us to deliver projects faster than traditional agencies.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Modern Technologies",
      description:
        "We specialize in React, Next.js, and modern web technologies that ensure your site is fast and future-proof.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprises. We offer competitive rates with clear, upfront pricing.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
      ),
    },
  ];

  const skills = [
    { name: "React.js", percent: "95%" },
    { name: "Next.js", percent: "90%" },
    { name: "JavaScript", percent: "92%" },
    { name: "SEO Optimization", percent: "85%" },
    { name: "UI/UX Design", percent: "80%" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* About Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Our Story
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                We met in our freshman year computer science class and quickly
                bonded over our shared passion for web development. What started
                as study sessions turned into collaborative projects, and before
                we knew it, we were building real solutions for real clients.
              </p>

              <p className="text-gray-700">
                After graduating, we decided to formalize our partnership and
                turn our side hustle into a full-fledged web development team.
                Our college experience gave us a unique perspective on teamwork,
                problem-solving, and delivering quality work under tight
                deadlines.
              </p>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
                <p className="text-blue-800 font-medium italic">
                  "We believe in building websites that don't just look good,
                  but solve real business problems and deliver measurable
                  results."
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Why Choose Us?
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Our Skills
          </h3>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                ref={(el) => (skillRefs.current[index] = el)}
                className="skill-item"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-gray-600">{skill.percent}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full skill-progress"
                    data-width={skill.percent}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
