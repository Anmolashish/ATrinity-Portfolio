// components/DescriptionWithToggle.client.js
"use client";

import { useState } from "react";

export default function DescriptionWithToggle({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength || showFullDescription) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Project Description
      </h3>
      <p className="text-gray-600 mb-2">{truncateText(description)}</p>
      {description?.length > 150 && (
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {showFullDescription ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
