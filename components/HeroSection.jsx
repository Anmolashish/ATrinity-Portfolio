"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 to-blue-800  py-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              College Friends Turned{" "}
              <span className="text-yellow-300">Web Experts</span>
            </h1>
            <p className="text-xl mb-8 text-white">
              We turn ideas into exceptional digital experiences using modern
              web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                See Our Work
              </Link>
              <Link
                href="#contact"
                className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Hire Our Team
              </Link>
            </div>
          </div>

          {/* Specialties */}
          <div className="md:w-1/2 bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">We specialize in:</h3>
            <ul className="space-y-3">
              {[
                "React.js Development",
                "Next.js Solutions",
                "SEO Optimization",
              ].map((specialty, index) => (
                <li
                  key={specialty}
                  className="flex items-center animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <span className="bg-yellow-400 text-blue-900 rounded-full p-1 mr-3 flex items-center justify-center w-6 h-6">
                    ✓
                  </span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
