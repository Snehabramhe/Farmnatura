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
        { opacity: 0, y: 50 },   
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
            once: false,
          },
        }
      );
    }
  }, []);
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      {/* Background Image */}
      <Image
        src="/images/highlights.svg"
        alt="Project Highlights"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay Text */}
      <div ref={headingRef} className="absolute left-6 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-white">
        <h2
          className="text-3xl md:text-5xl font-bold"
        >
          Project Highlights
        </h2>
      </div>
    </div>
  );
};

export default ProjectHighlight;