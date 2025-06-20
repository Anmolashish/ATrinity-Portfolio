import Link from "next/link";

const specialties = [
  "React.js Development",
  "Next.js Solutions",
  "SEO Optimization",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
            >
              College Friends Turned{" "}
              <span className="text-yellow-300">Web Experts</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white opacity-90 max-w-2xl">
              We turn ideas into exceptional digital experiences using modern
              web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#portfolio"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                aria-label="View our portfolio"
                prefetch={false}
              >
                See Our Work
              </Link>
              <Link
                href="#contact"
                className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                aria-label="Contact our team"
                prefetch={false}
              >
                Hire Our Team
              </Link>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="lg:w-1/2 bg-white bg-opacity-10 p-5 sm:p-6 rounded-xl backdrop-blur-sm w-full">
            <h3 className="text-xl font-semibold mb-4 text-black">
              We specialize in:
            </h3>
            <ul className="space-y-3">
              {specialties.map((specialty, index) => (
                <li
                  key={specialty}
                  className="flex items-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <span
                    className="bg-yellow-400 text-blue-900 rounded-full p-1 mr-3 flex items-center justify-center w-6 h-6 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-black">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Shape Divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"
        aria-hidden="true"
      />
    </section>
  );
}
