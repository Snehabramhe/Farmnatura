"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const FarmingExperience: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featureIconsRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const farmImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(
      [
        titleRef.current,
        descriptionRef.current,
        rightImageRef.current,
        farmImageRef.current,
        featureIconsRef.current?.children,
      ],
      { opacity: 0, x: -100 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none play reset",
        // scrub: 0.5,
      },
    });

    tl.to(
      [titleRef.current, descriptionRef.current],
      { x: 0, opacity: 1, duration: 1.5, ease: "power5.out", stagger: 0.4 },
      "-=1"
    )
    .to(
      [rightImageRef.current],
      { x: 0, opacity: 1, duration: 1, ease: "power5.out" },
      "-=1"
    )
    .to(
      Array.from(featureIconsRef.current?.children || []),
      { x: 0, opacity: 1, duration: 1, ease: "power5.out", },
      "-=1"
    )
    .to(
      [farmImageRef.current],
      { x: 0, opacity: 1, duration: 1.5, ease: "power5.out"},
      "-=1"
    );
    ;     
  }, []);


  const handleRedirect = (path: string) => {
    console.log("navigating to my page:", path);
    router.push(path); // No full refresh
  };


  return (
    <>
      {/* Top Content Section */}
      <div ref={containerRef} className="w-full px-4 md:px-8 lg:pl-10 xl:pl-20 lg:pr-0 flex flex-col mt-15 z-10" style={{ fontFamily: "Jost" }}>
        {/* Title */}
        <div className="mb-8 lg:w-2/3 z-10 mx-auto lg:ml-0">
          <h1 ref={titleRef} className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-black-600 flex items-center md:items-start text-center md:text-left">
            The Farming Experience
            <img src="/images/leave.svg" alt="leaf" width={90} className="w-[45px] md:w-[90px] md:ml-2 md:-mt-5" />
          </h1>
        </div>

        {/* Project Description */}
        <div ref={descriptionRef} className="mb-12 text-gray-700 lg:w-2/3 z-10 text-center lg:text-left" style={{ fontSize: "16px" }}>
          <p>
            We are proud to present Planet Green, a stunning new project that is destined to be a residential and commercial showcase of Nature Friendly.
          </p>
          <br />
          <p>
            Green Investment Farm Nature is located near the Airport. Srisailam highway is a prestigious Farmhouse For Sale in Hyderabad concept. It is located near Maheshwaram. The project has been set up at a land rich in resources like abundant water, naturally nutrient-rich soil, and ideal climatic conditions. This project supports sustainable farming & diverse fruit plantations.
          </p>
        </div>
        
        {/* middle images */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          {/* Feature Icons */}
          <div ref={featureIconsRef} className="grid grid-cols-2 md:grid-cols-4 lg:w-2/3 gap-8 justify-center mb-12">
          {[
    {
      icon: "/images/flower.svg",
      title: "Farm Land Within HMDA Limits",
      link: "/farm-land",
    },
    {
      icon: "/images/sunflower.svg",
      title: "Serene Natural Contours of Land",
      link: "/serene-land",
    },
    {
      icon: "/images/yard-work.svg",
      title: "Rich Black Cotton Soil Near to Village",
      link: "/black-soil",
    },
    {
      icon: "/images/farmer.svg",
      title: "Practicing Farming with Indigenous Seeds",
      link: "/indigenous-farming",
    },
  ].map((feature, index) => (
    <div
    key={index}
    className="flex flex-col items-center space-y-2 w-[65%]"
  >
    <div
  onClick={() => handleRedirect(feature.link)}
  className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
>
  <img
    src={feature.icon}
    alt={feature.title}
    width="70%"
    height="70%"
  />
</div>
    <p className="text-sm text-center text-gray-700">{feature.title}</p>
  </div>
  ))}
          </div>


          {/* Right Image */}
          <div ref={rightImageRef} className="w-full lg:w-1/3 mt-[-30%] lg:mt-[-20%] 2xl:mt-[-10%] bg-white relative">
            <img src="/images/farm-exp-2.svg" alt="Farm Illustration" className="object-cover 2xl:w-[70%] 2xl:ml-[30%]" />
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

}
export default FarmingExperience;