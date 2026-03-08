import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProjectRight(props) {
  const [displayDescription, setDisplayDescription] = useState(
    props.description,
  );

  // Function to truncate text based on screen size
  const getResponsiveDescription = () => {
    if (typeof window === "undefined") return props.description;

    const screenWidth = window.innerWidth;
    const description = props.description || "";

    if (screenWidth < 640) {
      // Mobile
      return description.length > 100
        ? description.substring(0, 100) + "..."
        : description;
    } else if (screenWidth < 768) {
      // Small tablet
      return description.length > 150
        ? description.substring(0, 150) + "..."
        : description;
    } else if (screenWidth < 1024) {
      // Tablet
      return description.length > 200
        ? description.substring(0, 200) + "..."
        : description;
    } else {
      // Desktop
      return description;
    }
  };

  // Update description on mount and window resize
  useEffect(() => {
    setDisplayDescription(getResponsiveDescription());

    const handleResize = () => {
      setDisplayDescription(getResponsiveDescription());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.description]);

  return (
    <div className="max-w-[1222px] w-[90%] border rounded-[40px] min-h-[200px] md:min-h-[324px] grid grid-cols-[1fr_min(50%,475px)] p-[20px]">
      <div className="pr-6 flex flex-col justify-between">
        <div className="">
          <small className="text-xs md:text-lg text-[#2A66FF]">
            {props.category}
          </small>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 max-md:mb-2">
            {props.title}
          </h3>
          <p className="text-xs md:text-sm font-light">{displayDescription}</p>
        </div>
        <div className="flex gap-4 mt-2">
          <Link
            href={props.demoUrl || "#"}
            target={props.demoUrl ? "_blank" : "_self"}
            rel={props.demoUrl ? "noopener noreferrer" : ""}
            className={`bg-[#2A66FF] w-[50%] p-4 rounded-[21px] border-[#2A66FF] border-2 max-md:text-xs text-white text-center transition-all duration-300 ${
              props.demoUrl
                ? "hover:bg-blue-700 hover:shadow-lg"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => !props.demoUrl && e.preventDefault()}
          >
            View Project
          </Link>
          <Link
            href={props.projectDetails || "#"}
            className={`bg-white w-[50%] p-4 rounded-[21px] border-[#2A66FF] border-2 text-[#2A66FF] text-center transition-all max-md:text-xs duration-300 ${
              props.projectDetails
                ? "hover:bg-gray-50 hover:shadow-lg"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => !props.projectDetails && e.preventDefault()}
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-gray-400 rounded-[35px] border-1">
        <Image
          src={props.image || "/default-project.jpg"}
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-[35px]"
          alt={props.title}
        />
      </div>
    </div>
  );
}
