"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";


const ProjectHighlight: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },      // start: transparent and lower
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );
    }
  }, []);
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/highlights.svg"
        alt="Project Highlights"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay Text */}
      <div ref={headingRef} className="absolute top-[42%] left-5 sm:left-15 bg-opacity-50 p-3 sm:p-5 rounded-lg">
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