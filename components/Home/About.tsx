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
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none play reset",
        },
      });
      gsap.from("#about-content", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        // delay: 0.5,
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none play reset",
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      {/* Content Container */}
      <div className="container px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-8 sm:pt-11 md:pt-16 z-10 flex-1">
        <div>
          <h2
            className="font-jost font-semibold text-[24px] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-primary-text my-3"
            id="about-heading"
          >
            {" "}
            ONE DECISION TO A COMPLETE LIFE
          </h2>
          <ul
            className="font-sofia-pro-regular space-y-3 text-sm sm:text-lg md:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed list-disc list-inside"
            id="about-content"
          >
            <li>
              You reach a point in life where peace matters more than pace.
            </li>
            <li>
              Where what you eat, how it&rsquo;s grown, and how you live, truly
              matters.
            </li>
            <li>
              At Farm Natura, we&rsquo;ve spent 6+ years nurturing this soil to be
              100% chemical-free.
            </li>
            <li>You own the land. We maintain it.</li>
            <li>You grow your food. We support it.</li>
          </ul>
        </div>
      </div>

      {/* Background Images */}
      <div className="relative w-full h-[400px] md:h-[600px] xl:h-[900px]">
        <Image
          src="/svg/about-bg.svg"
          width={2560}
          height={1200}
          alt="about-bg"
          className="object-cover w-[full] h-[400px] md:h-[600px] xl:h-[900px]"
          priority
        />
        <div className="absolute inset-0 top-20 md:top-40 flex items-center justify-end">
          {/* For mobile/tablet - responsive sizing */}
          <div className="lg:hidden relative w-[64%] h-[450px] md:w-[60%] md:h-[650px]">
            <Image
              src="/svg/about-right.svg"
              fill
              alt="about-right"
              className="object-contain object-right"
              style={{
                transform: "translateY(-20%)",
                right: "-15%",
              }}
            />
          </div>

          {/* For laptop/desktop - larger fixed size */}
          <div
            className="hidden lg:block relative  w-[80%] h-[950px] 2xl:w-full 2xl:h-[700px]"
          >
            <Image
              src="/svg/about-right.svg"
              width={1200}
              height={1200}
              alt="about-right"
              className="object-contain  w-[400] xl:w-[600] top-50 xl:top-20 right-0"
              style={{
                transform: "translateY(-20%)",
                position: "absolute",
                maxWidth: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
