"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(
    () => {
      gsap.from("#about-heading", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top center",
          end: "bottom bottom",
        },
      });
      gsap.from("#about-content", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top center",
          end: "bottom bottom",
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden">
      <div className="mt-11 pl-[75px] xl:pl-[100px]">
        <h2
          className="font-jost font-semibold text-[30px] 2xl:text-[50px] text-primary-text"
          id="about-heading"
        >
          Why Managed farmland
        </h2>
        <p
          className="font-sofia-pro-regular text-[16px] 2xl:text-[20px] mt-5"
          id="about-content"
        >
          Farm Natura offers a community of like-minded families from Hyderabad,
          where lifestyle is built basing on Natural
          <br />
          Farming with an intent to focus on Health & Happiness.
        </p>
      </div>
      <Image
        src="/svg/about-bg.svg"
        width={200}
        height={200}
        alt="about-bg"
        className="w-screen h-full object-cover"
      />
      <Image
        src="/svg/about-right.svg"
        width={200}
        height={200}
        alt="about-right"
        className="w-full h-full object-contain absolute -right-1/4 sm:-right-1/4 top-1/2  -translate-y-[40%]"
      />
    </div>
  );
};

export default About;
