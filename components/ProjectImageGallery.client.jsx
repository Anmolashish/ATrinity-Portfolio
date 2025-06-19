// components/ProjectImageGallery.client.js
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectImageGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="lg:w-1/2">
      <div className="rounded-xl overflow-hidden mb-4 bg-gray-100 aspect-video flex items-center justify-center">
        {images?.[activeImage] ? (
          <Image
            src={images[activeImage]}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
            onError={(e) => {
              e.target.src = "/images/default-project.jpg";
            }}
          />
        ) : (
          <div className="text-gray-400">No image available</div>
        )}
      </div>
      <div className="flex gap-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
              activeImage === index ? "border-blue-600" : "border-transparent"
            } bg-gray-100 flex items-center justify-center`}
          >
            {image ? (
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
                }}
              />
            ) : (
              <div className="text-xs text-gray-400">No image</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
