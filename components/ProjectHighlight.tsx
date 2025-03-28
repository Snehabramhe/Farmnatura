"use client";

import Image from "next/image";
import React from "react";

const ProjectHighlight: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src="/images/highlights.svg"
        alt="Project Highlights"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay Text */}
      <div className="absolute top-[42%] left-5 sm:left-15 bg-opacity-50 p-3 sm:p-5 rounded-lg">
        <h2
          className="text-white text-lg sm:text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "Jost", fontWeight: 600, fontSize: "50px" }}
        >
          Project Highlights
        </h2>
      </div>
    </div>
  );
};

export default ProjectHighlight;
