import React from "react";

export default function Aboutpage4() {
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center py-20 mb-10">
      <h1 className="text-4xl md:text-7xl font-serif mb-10 uppercase text-center px-4">
        Our story
      </h1>
      <p className="text-center max-w-[80%] min-w-[280px] md:min-w-[400px] text-sm w-full mb-20 px-4">
        We met during our freshman year in a computer science program, where a
        shared interest in web development, software engineering, and digital
        problem-solving quickly turned into a strong working partnership. What
        began as casual study sessions and late-night debugging evolved into
        collaborative projects focused on building responsive websites, scalable
        web applications, and clean user interfaces.
        <br />
        <br />
        As our technical skills grew, so did our ambition. We started taking on
        real client work, delivering custom web development solutions that
        balanced performance, design, and usability. These early projects helped
        us understand the realities of client expectations, project timelines,
        and the importance of writing maintainable, high-quality code.
        <br />
        <br />
        After graduating, we decided to formalize our partnership and transform
        our side hustle into a dedicated web development team. Our academic
        background, combined with hands-on industry experience, gave us a strong
        foundation in teamwork, problem-solving, and delivering reliable digital
        solutions under tight deadlines.
        <br />
        <br />
        Today, we apply that same disciplined approach to every project we take
        on, helping businesses grow through modern web development,
        performance-focused design, and scalable digital solutions built for
        long-term success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] xl:w-[60%] text-white font-bold gap-4 px-3">
        {/* Fast Execution Card */}
        <div className="bg-[rgb(32,3,255,0.3)] p-6 pb-8 text-lg md:text-xl text-center flex flex-col items-center justify-end min-h-[200px] rounded-[24px] backdrop-blur-sm hover:bg-[rgb(32,3,255,0.4)] transition-all duration-300">
          <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
            {/* Lightning bolt icon for Fast Execution */}
            <path
              d="M35 10L15 35H30L25 50L45 25H30L35 10Z"
              fill="white"
              fillOpacity="0.9"
              stroke="white"
              strokeWidth="1"
            />
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />
          </svg>
          <span className="relative z-10">Fast Execution</span>
        </div>

        {/* Modern Technologies Card */}
        <div className="bg-[rgb(32,3,255,0.3)] p-6 pb-8 text-lg md:text-xl text-center flex flex-col items-center justify-end min-h-[200px] rounded-[24px] backdrop-blur-sm hover:bg-[rgb(32,3,255,0.4)] transition-all duration-300">
          <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
            {/* Modern tech stack / code icon */}
            <rect
              x="15"
              y="15"
              width="30"
              height="30"
              rx="6"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
            />
            <path
              d="M25 25L20 30L25 35M35 25L40 30L35 35"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10 30H15M45 30H50"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="30" cy="30" r="3" fill="white" fillOpacity="0.3" />
          </svg>
          <span className="relative z-10">Modern Technologies</span>
        </div>

        {/* Transparent Pricing Card */}
        <div className="bg-[rgb(32,3,255,0.3)] p-6 pb-8 text-lg md:text-xl text-center flex flex-col items-center justify-end min-h-[200px] rounded-[24px] backdrop-blur-sm hover:bg-[rgb(32,3,255,0.4)] transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
            {/* Transparent pricing / tag with visibility icon */}
            <path
              d="M20 25L30 15L40 25L30 35L20 25Z"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
            />
            <circle cx="30" cy="25" r="3" fill="white" fillOpacity="0.9" />
            <path
              d="M18 38L42 38M20 42L40 42"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 45L45 45"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
            {/* Eye icon for transparency */}
            <path
              d="M30 15C20 15 12 22 10 30C12 38 20 45 30 45C40 45 48 38 50 30C48 22 40 15 30 15Z"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle
              cx="30"
              cy="30"
              r="6"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.9" />
          </svg>
          <span className="relative z-10">Transparent Pricing</span>
        </div>
      </div>
    </div>
  );
}
