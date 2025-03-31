"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FarmLandOptions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const leftDecorRef = useRef<HTMLImageElement>(null);
  const rightDecorRef = useRef<HTMLImageElement>(null);

  const [activeTab, setActiveTab] = useState<"plot" | "pricing">("plot");

  const cards = [
    {
      image: "/images/farmland-1.svg",
      text: "Grow investments | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
    {
      image: "/images/farmland-2.svg",
      text: "Grow investments | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
    {
      image: "/images/farmland-3.svg",
      text: "Grow investments | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none", // Ensures animation plays only once
        },
        defaults: { ease: "power2.out", duration: 1.5 },
      });

      tl.from(headingRef.current, { y: -50, opacity: 0 })
        .from(buttonRef.current, { y: -30, opacity: 0 }, "-=0.8")
        .from(leftDecorRef.current, { x: -100, opacity: 0 }, "-=0.6")
        .from(rightDecorRef.current, { x: 100, opacity: 0 }, "-=0.8");
    }, containerRef); 
    return () => ctx.revert(); // Cleanup animation to prevent duplicate triggers
  }, []);
  return (
    <section ref={containerRef} className="relative bg-white py-12 px-6 md:px-16 h-[1200px]">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-no-repeat bg-cover bg-bottom" 
        style={{ backgroundImage: "url('/images/farmland-6.svg')" }}></div>

      {/* Left & Right Decor */}
      <Image src="/images/farmland-4.svg" alt="Left Decor" width={250} height={299} 
        ref={leftDecorRef} className="absolute top-0 left-[61px]" />
      <Image src="/images/farmland-5.svg" alt="Right Decor" width={250} height={250} 
        ref={rightDecorRef} className="absolute top-0 right-0" />

      {/* Header */}
      <div ref={headingRef} className="flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center"
          style={{ fontFamily: "Jost", fontWeight: 600, fontSize: "40px" }}>
          Farm Land Options
          <img src="/images/leave.svg" alt="leave-img" width={110} height={81} />
        </h2>

        {/* Tabs */}
        <div ref={buttonRef} className="flex items-center justify-center space-x-4 mt-6"
          style={{ fontFamily: "Sofia Pro", fontWeight: 400, fontSize: "18px" }}>
          <button className={`px-6 py-2 w-[240px] rounded-lg transition font-medium ${
              activeTab === "plot" ? "bg-[#358B6C] text-white" : "bg-transparent text-green-700"
            }`} onClick={() => setActiveTab("plot")}>
            Plot Sizes
          </button>
          <div className="h-15 w-[1px] bg-gray-400 mx-3"></div>
          <button className={`px-6 py-2 rounded-lg transition font-medium ${
              activeTab === "pricing" ? "bg-[#358B6C] text-white" : "bg-transparent text-green-700"
            }`} onClick={() => setActiveTab("pricing")}>
            Pricing
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-7 z-10">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center"
            style={{ fontFamily: "Sofia Pro", fontWeight: 400, fontSize: "19px" }}>
            <div className="relative w-full h-[427px] rounded-lg overflow-hidden">
              <Image src={card.image} alt="Farm Land" layout="fill" objectFit="cover" />
            </div>
            <p className="text-gray-700 text-sm mt-4 text-center">{card.text}</p>
            <button className="mt-4 px-4 py-2 border border-green-600 text-green-600 rounded-lg 
              hover:bg-green-600 hover:text-white transition">
              Download Brochure
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FarmLandOptions;