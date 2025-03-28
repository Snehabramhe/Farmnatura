"use client";

import Image from "next/image";

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
  return (
    <section className="bg-[#F5F2E6] py-12 px-12">
      <h2
        className="text-3xl md:text-4xl font-bold text-[#404040] mb-8"
        style={{ fontFamily: "Jost", fontWeight: 600, fontSize: "40px" }}
      >
        Why Farm Natura?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-6">
        {/* First Row - Two Images with Different Sizes */}
        <div className="grid grid-cols-2 gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md"
              style={{ height: `${feature.height}px` }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={feature.width}
                height={feature.height}
                className="object-cover"
              />
              <div className="absolute inset-0  bg-opacity-400 flex flex-col justify-start p-6 text-white">
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

        {/* Second Row - Two Images with Different Sizes */}
        <div className="grid grid-cols-2 gap-6">
          {features.slice(2, 4).map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-md  ${
                index === 0 ? "-mt-20" : "mt-4"
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
                  index === 0 ? "text-black" : "text-white"
                } `}
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
