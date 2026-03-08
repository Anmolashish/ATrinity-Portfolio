import Image from "next/image";
import React from "react";

export default function AboutPage2() {
  return (
    <div className="min-h-[75vh] bg-[#F0F0F0] flex flex-col items-center py-20">
      <small className="font-bold mb-3">About us</small>
      <h1 className="text-7xl max-md:text-4xl font-serif mb-3 text-center">
        Driving Digital Growth Strategically
      </h1>
      <p className="text-sm max-md:text-xs text-center w-[80%] md:max-w-[70%] mb-25">
        Atrinity Agency is a results-focused digital agency helping brands grow
        through strategic design, performance marketing, and scalable web
        solutions. We blend creativity with data-driven execution to build
        digital experiences that actually convert, not just look good.
      </p>
      <div className="bg-white w-[80%] rounded-[50px] min-h-[50vh]">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[80%] h-[84px] rounded-[30px] bg-[#0000FF] text-white flex justify-center items-center text-2xl text-center max-md:text-sm">
            Founded With Purpose, Built for Impact
          </div>
        </div>
        <div className="min-h-[50vh] w-full mt-10 rounded-[50px] flex justify-evenly items-center">
          {" "}
          <div className="w-[30%] h-[300px] flex flex-col items-center gap-3">
            <div className="rounded-full aspect-square w-[176px] bg-gray-400 ">
              <Image
                src="/anmol.webp"
                alt="Anmol Ashish"
                width={176}
                height={176}
                className="w-full h-full rounded-full aspect-square object-cover"
              />
            </div>
            <h3 className=" font-bold text-2xl">Anmol Ashish</h3>
            <p className="text-center text-xs w-[90%]">
              Atrinity Agency was founded by a digital strategist who believes
              that online success is not about trends, but about clarity,
              consistency, and execution. With hands-on experience in web
              development, branding, and digital marketing, the agency was
              created to bridge the gap between aesthetics and performance.
            </p>
          </div>
          <div className="divider h-[30vh] bg-black w-0.5 rounded-full"></div>
          <div className="w-[30%] h-[300px] flex flex-col items-center gap-3">
            <div className="rounded-full aspect-square w-[176px] bg-gray-400 ">
              <Image
                src="/aniket.webp"
                alt="Anmol Ashish"
                width={176}
                height={176}
                className="w-full h-full aspect-square rounded-full object-cover"
              />
            </div>
            <h3 className=" font-bold text-2xl">Aniket Sharma</h3>
            <p className="text-center text-xs w-[90%]">
              Every project at Atrinity is approached with a problem-solving
              mindset. The focus stays on understanding the client’s goals,
              audience behavior, and market position before crafting solutions
              that deliver measurable results. No shortcuts. No bloated
              promises. Just work that speaks through outcomes.
            </p>
          </div>
        </div>
        <div className="w-full h-[20vh] flex justify-center items-center">
          <div className="bg-[#0000FF] text-white py-4 px-8 rounded-[30px]">
            Know the Founder
          </div>
        </div>
      </div>
    </div>
  );
}
