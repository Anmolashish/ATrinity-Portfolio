import React from "react";

export default function ServicesPage3() {
  return (
    <div className="w-full py-20 md:py-30 flex items-center justify-center px-4 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-xl p-6 md:p-8 rounded-[20px] flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-500">
                Experience
              </span>

              <h2 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mt-3">
                2+
              </h2>

              <p className="text-sm max-sm:text-xs text-gray-600 mt-4 max-w-[260px]">
                Years of hands-on experience building fast, scalable and modern
                web applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-xl p-6 md:p-8 rounded-[20px] flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-500">
                Projects Built
              </span>

              <h2 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mt-3">
                15+
              </h2>

              <p className="text-sm max-sm:text-xs text-gray-600 mt-4 max-w-[260px]">
                Internal builds and client-focused projects developed across
                multiple technologies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-xl p-6 md:p-8 rounded-[20px] flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-500">
                Development Hours
              </span>

              <h2 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mt-3">
                1000+
              </h2>

              <p className="text-sm max-sm:text-xs text-gray-600 mt-4 max-w-[260px]">
                Hours spent designing, building and refining high-performance
                digital products.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-xl p-6 md:p-8 rounded-[20px] flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-500">
                Tech Stack
              </span>

              <h2 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mt-3">
                10+
              </h2>

              <p className="text-sm max-sm:text-xs text-gray-600 mt-4 max-w-[260px]">
                Tools and technologies used to deliver scalable and modern web
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT BLUE CARD */}
        <div className="bg-blue-400 shadow-xl rounded-[20px] p-8 md:p-10 flex flex-col justify-between text-white min-h-[300px] lg:min-h-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <span className="uppercase tracking-wider text-sm font-medium">
              Atrinity
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-[400px] mt-12 lg:mt-0">
            We build fast, scalable digital experiences.
          </h3>
        </div>
      </div>
    </div>
  );
}
