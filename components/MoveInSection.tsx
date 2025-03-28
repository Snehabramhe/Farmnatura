"use client";

import React from "react";
import Image from "next/image";

const MoveInSection = () => {
  return (
    <section className="relative bg-[#F5F2E6] py-16 px-6 md:px-20 flex justify-center">
      <div className="absolute top-5 left-0">
        <Image src="/images/tree-img.svg" alt="Tree" width={540} height={200} />
      </div>
      <div className="absolute top-5 right-0">
        <Image
          src="/images/tree-leave-img.svg"
          alt="Leaves"
          width={150}
          height={200}
        />
      </div>
      <div className="absolute -top-1 left-[26%] flex items-center ">
        <Image
          src="/images/sky-img.svg"
          alt="Cloud"
          width={340}
          height={80}
          className="z-1"
        />
        <Image
          src="/images/sun-img.svg"
          alt="Sun"
          width={100}
          height={50}
          className="-ml-27 -mt-10"
        />
      </div>

      <div className="relative w-full mt-29">
        <div
          className="relative bg-[url('/images/Rectangle-img.svg')] bg-cover text-white p-8 flex flex-col md:flex-row items-center w-full h-full"
          style={{ borderRadius: "25px" }}
        >
          <div className="flex-1 text-center md:text-left ml-[12%]">
            <h2
              className="text-2xl md:text-4xl"
              style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "30px" }}
            >
              Ready To Move In Are You?
            </h2>
            <p
              className="text-md md:text-lg mt-2 opacity-80"
              style={{ fontFamily: "Jost", fontWeight: 300, fontSize: "17px" }}
            >
              Check out the new farms for sale in Hyderabad by Farm Natura.
            </p>
            <button
              className="mt-10 bg-white text-black px-8 top-[50%] py-2 rounded-md shadow hover:bg-gray-100 transition"
              style={{ fontFamily: "Jost", fontWeight: 500, fontSize: "18px" }}
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6">
            <div className="p-2 rounded-lg">
              <Image
                src="/images/farm-couple.svg"
                alt="Farm Couple"
                width={400}
                height={200}
                className="rounded-lg absolute right-13 -top-20"
              />
            </div>
          </div>
        </div>
        <img
          src="/images/horizontal-img.svg"
          alt="hr-img"
          style={{
            marginTop: "80px",
            marginBottom: "30px",
            backgroundColor: "#fffbe4",
          }}
        />
      </div>
    </section>
  );
};

export default MoveInSection;
