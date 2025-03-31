"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FarmingExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featureIconsRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const farmImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set([titleRef.current, descriptionRef.current, featureIconsRef.current, rightImageRef.current, farmImageRef.current], {
      opacity: 0,
      x: -100, // Move elements off-screen to the left initially
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(titleRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to(descriptionRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
      .to(Array.from(featureIconsRef.current?.children || []), { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.4")
      .to(rightImageRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
      .to(farmImageRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative flex flex-col lg:flex-row mt-15">
        {/* Left Content Section */}
        <div className="w-full lg:w-2/3 px-6 md:px-12 lg:px-20 flex flex-col z-10" style={{ fontFamily: "Jost" }}>
          {/* Title */}
          <div className="mb-8">
            <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold text-black-600 flex items-center">
              The Farming Experience
              <img src="/images/leave.svg" alt="leaf" width={90} className="ml-2" />
            </h1>
          </div>

          {/* Project Description */}
          <div ref={descriptionRef} className="mb-12 max-w-4xl text-gray-700" style={{ fontSize: "16px" }}>
            <p>
              We are proud to present Planet Green, a stunning new project that is destined to be a residential and commercial showcase of Nature Friendly.
            </p>
            <br />
            <p>
              Green Investment Farm Nature is located near the Airport. Srisailam highway is a prestigious Farmhouse For Sale in Hyderabad concept. It is located near Maheshwaram. The project has been set up at a land rich in resources like abundant water, naturally nutrient-rich soil, and ideal climatic conditions. This project supports sustainable farming & diverse fruit plantations.
            </p>
          </div>

          {/* Feature Icons */}
          <div ref={featureIconsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-12">
            {[
              { icon: "/images/flower.svg", title: "Farm Land Within HMDA Limits" },
              { icon: "/images/sunflower.svg", title: "Serene Natural Contours of Land" },
              { icon: "/images/yard-work.svg", title: "Rich Black Cotton Soil Near to Village" },
              { icon: "/images/farmer.svg", title: "Practicing Farming with Indigenous Seeds" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 w-[65%]">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt="not-found" width="70%" height="70%" />
                </div>
                <p className="text-sm text-center text-gray-700">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 bg-white relative flex justify-center items-center">
          <div ref={rightImageRef} className="w-full h-auto">
            <img src="/images/farm-exp-2.svg" alt="Farm Illustration" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Farm Image */}
      <div
        ref={farmImageRef}
        className="w-[90%] h-96 md:h-[500px] bg-cover bg-center rounded-lg shadow-lg mx-auto mb-20 mt-0"
        style={{
          backgroundImage: 'url("/images/farming-exp.svg")',
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
};

export default FarmingExperience;
