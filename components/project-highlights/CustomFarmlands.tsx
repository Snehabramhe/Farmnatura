"use client";

import React from "react";
import Image from "next/image";

const CustomFarmlands = () => {
  return (
    <section className="relative bg-[#F5F2E6] py-16 px-6 md:px-16">
      <Image
        src="/images/leavetree.svg"
        alt="Vine Decoration"
        width={330}
        height={698}
        className="absolute top-[90] right-0 w-[30%]"
      />

      <div className="max-w-4xl  text-center md:text-left w-[70%]">
        <h2
          className="text-3xl flex flex-col relative md:text-5xl font-bold text-gray-800 w-[320px] h-[120px] space-y-3 [word-spacing:20px]"
          style={{ fontFamily: "Jost", fontWeight: 600, fontSize: "50px" }}
        >
          <span>Customisable</span>
          <span>Farmlands</span>
          <Image
            src="/images/leave.svg"
            alt="Leaf Icon"
            width={90}
            height={81}
            className="absolute right-2 bottom-0"
          />
        </h2>
        <p
          className="text-gray-700 mt-2"
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
          className="text-gray-700 mt-2"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-7">
        {[
          { src: "/images/cucumber.svg", title: "Building Your Farmland" },
          { src: "/images/greenland.svg", title: "Design Options" },
          { src: "/images/house.svg", title: "Costs" },
        ].map((item, index) => (
          <div key={index}>
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <button className="mt-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomFarmlands;
