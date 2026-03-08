"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShowcaseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white flex flex-col items-center py-20 pb-30 md:pb-70 px-4">
      <div className="max-w-7xl w-full bg-black h-[40vh] rounded-3xl flex flex-col relative">
        <h2 className="text-center text-white z-10 text-2xl md:text-4xl font-semibold mt-10 mb-16">
          High-Quality Designs for
          <span className="text-[#1A44C9]"> Modern Businesses</span>
        </h2>

        {/* BACKGROUND RADIAL RINGS */}
        <div className="absolute overflow-hidden z-0 w-full h-full">
          <div className="relative flex justify-center">
            <div className="absolute border-blue-600 border-4 rounded-full aspect-square w-full max-w-4xl blur-sm top-6 flex justify-center">
              <div className="absolute border-blue-600 border-4 rounded-full aspect-square w-full max-w-3xl blur-sm top-14 flex justify-center">
                <div className="absolute border-blue-600 border-4 rounded-full aspect-square w-full max-w-2xl blur-sm top-20"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl w-full top-30 max-sm:top-35 absolute z-10 mx-auto max-sm:gap-2
  flex justify-center gap-8
  overflow-hidden
"
        >
          {/* CARD 1 */}
          <div
            className={`rounded-3xl bg-gradient-to-b from-gray-100 to-[#adadad]
    p-4 md:p-6 flex flex-col items-center text-center h-[250px] md:h-[400px] overflow-hidden
    w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] transition-all duration-700 ease-out hover:shadow-2xl
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <p className="text-black font-medium text-[13px] md:text-lg mb-3 md:mb-3 ">
              Clean, responsive layouts for every{" "}
              <span className="text-blue-600">device</span> .
            </p>

            <div className="w-full relative flex justify-center animate-float-slow">
              <div className="w-[200px] md:w-[240px] lg:w-[300px]">
                <Image
                  src="/mockups/mock1.png"
                  alt="Design showcase"
                  width={300}
                  height={400}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className={`rounded-3xl bg-gradient-to-b from-[#adadad] to-gray-100 
  p-4 md:p-6 text-center h-[250px] md:h-[400px] overflow-hidden flex flex-col-reverse
  w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] transition-all duration-700 ease-out delay-200  hover:shadow-2xl
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          >
            <p className="text-black font-medium text-[13px] md:text-lg mt-3 md:mt-10">
              Modern <span className="text-blue-600">UI crafted</span> for
              better engagement.
            </p>
            <div className="w-full relative flex justify-center mb-15 animate-float-slow delay-300">
              <div className="w-[200px] md:w-[240px] lg:w-[300px]">
                <Image
                  src="/mockups/mock2.png"
                  alt="Design showcase"
                  width={300}
                  height={400}
                  className="object-cover object-bottom hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className={`hidden lg:flex rounded-3xl bg-gradient-to-b from-gray-100 to-[#adadad]
    p-6 flex-col items-center text-center h-[400px] overflow-hidden
    w-[300px] transition-all duration-700 ease-out delay-400  hover:shadow-2xl
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <p className="text-black font-medium text-lg mb-5 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text ">
              Brand-focused designs{" "}
              <span className="text-blue-600">optimized</span> for growth.
            </p>

            <div className="w-full relative flex justify-center animate-float-slow delay-600">
              <div className="w-[300px]">
                <Image
                  src="/mockups/mock3.png"
                  alt="Design showcase"
                  width={300}
                  height={400}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
