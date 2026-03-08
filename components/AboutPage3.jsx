import React from "react";

export default function AboutPage3() {
  return (
    <div className="w-full h-screen relative overflow-hidden my-20 flex justify-center items-center">
      <div className="rounded-full absolute min-w-[100px] aspect-square w-[20%] bottom-20 border-4 -left-[5%] border-[#0048FF] blur-[15px]"></div>
      <div className="rounded-full absolute min-w-[300px] aspect-square w-[30%] top-15 border-4 left-[15%] border-[#0048FF] blur-[15px]"></div>
      <div className="rounded-full absolute min-w-[300px] aspect-square w-[33%] bottom-10 border-4 right-[20%] border-[#0048FF] blur-[15px]"></div>
      <div className="rounded-full absolute min-w-[100px] aspect-square w-[25%] top-10 border-4 -right-[5%] border-[#0048FF] blur-[15px]"></div>
      <h1 className="text-7xl max-md:text-6xl max-sm:text-5xl font-display text-center w-[80%] ">
        "We believe in building websites that don't just look good, but solve
        real business problems and deliver{" "}
        <span className="text-[#0048FF]">measurable results</span> "
      </h1>
    </div>
  );
}
