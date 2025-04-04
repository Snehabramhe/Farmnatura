"use client";

import React, { useState,useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Common/Formmodal";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CustomFarmlands = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);
  const leavetreeRef = useRef<HTMLImageElement>(null);  // Ref for leavetree.svg

   const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title, paragraph, and leaf animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when 80% of section is visible
          end: "bottom 50%", // Animation reverses when scrolling up
          toggleActions: "play reverse play reset",
        },
      });

      tl.from(titleRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" }, "-=1")
        .from(paragraphRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" }, "-=0.5")
        .from(leavetreeRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" }, "-=0.5")


      // Animating grid items from the left
      gridItemsRef.current.forEach((item) => {
        gsap.from(item, {
          x: -100, // Start the animation from the left
          opacity: 0, // Make it invisible initially
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // Trigger the animation when the item is 80% in view
            end: "top 70%", // Reverse when 70% of the item leaves the viewport
            toggleActions: "play none play reverse", // Play on enter and reverse on leave
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F5F2E6] py-16 px-6 md:px-16">
      <Image
        ref={leavetreeRef}
        src="/images/leavetree.svg"
        alt="Vine Decoration"
        width={330}
        height={698}
        className="absolute top-[10%] right-0 w-[50%] md:w-[35%] 2xl:w-[25%]"
      />

      <div className=" w-full md:max-w-4xl text-center md:text-left md:w-[70%]">
        {/* Animated Title */}
        <h2
          ref={titleRef}
          className="text-4xl flex flex-col relative md:text-5xl font-bold text--800 w-[320px] h-[120px] space-y-3 [word-spacing:20px]"
          style={{ fontFamily: "Jost", fontWeight: 600 }}
        >
          <span>Customisable</span>
          <span>Farmlands</span>
          {/* Animated Leaf Image */}
          <Image
            // ref={leafRef}
            src="/images/leave.svg"
            alt="Leaf Icon"
            width={90}
            height={81}
            className="absolute right-2 bottom-4 md:bottom-0 w-[70] md:w-[90]"
          />
        </h2>

        {/* Animated Paragraphs */}
        <div ref={paragraphRef}>
          <p
            className="text-black-700 mt-50 md:mt-2 mx-auto"
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            We are proud to present Planet Green, a stunning new precinct that is
            destined to be the residential and commercial showpiece of Nature
            Friendly.
          </p>
          <p
            className="text-black-700 mt-2"
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            Grow investments | Farm Natura is located near the Airport, Srisailam
            highway & is a prestigious Farmhouses For Sale in Hyderabad concept.
            It is located Near Maheshwaram. The project has been set up at a land
            rich in resources like abundant water, naturally nutrient-rich soil,
            apt climatic conditions, and easy access to farming. This project
            deals with sustainable Farming & varieties of fruit plantation.
          </p>
        </div>
      </div>

      {/* Grid Section with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-7">
        {[
          { src: "/images/cucumber.svg", title: "Building Your Farmland" },
          { src: "/images/greenland.svg", title: "Design Options" },
          { src: "/images/house.svg", title: "Costs" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              gridItemsRef.current[index] = el as HTMLDivElement;
            }}
          >
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <button className="mt-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"  onClick={() => setModalOpen(true)}   >
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default CustomFarmlands;