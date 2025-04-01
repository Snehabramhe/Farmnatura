"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Chemical-Free Living",
    description: "Benefits of toxin-free soil for growing your own food.",
    image: "/images/chemical.svg",
    width: 795,
    height: 290,
  },
  {
    title: "Sustainable Practices",
    description:
      "Highlight composting, rainwater harvesting, and biodiversity efforts.",
    image: "/images/practies.svg",
    width: 795,
    height: 385,
  },
  {
    title: "A Healthier Lifestyle",
    description: "Benefits of living in a natural, pollution-free environment.",
    image: "/images/lifestyle.svg",
    width: 795,
    height: 386,
  },
  {
    title: "Community Living",
    description:
      "Focus on shared values, events and interactive spaces for residents.",
    image: "/images/living.svg",
    width: 795,
    height: 290,
  },
];

export default function WhyFarmNatura() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Animate each card individually
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? -100 : 100; // alternate slide directions

      gsap.fromTo(
        card,
        { x: direction, y: 50, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#F5F2E6] py-12 px-4 md:px-12">
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#404040] mb-8"
        style={{ fontFamily: "Jost", fontWeight: 600, fontSize: "40px" }}
      >
        Why Farm Natura?
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative rounded-lg overflow-hidden shadow-md ${
                index === 2 ? "-mt-20" : index === 3 ? "mt-4" : ""
              }`}
              style={{ height: `${feature.height}px` }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={feature.width}
                height={feature.height}
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute inset-0 bg-opacity-40 flex flex-col justify-start p-6 ${
                  index >= 2 ? "text-white" : "text-black"
                }`}
              >
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "Sofia Pro",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "Sofia Pro",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
