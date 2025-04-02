"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MoveInSectionProps {
  bgColor: string;
}

const MoveInSection: React.FC<MoveInSectionProps> = ({ bgColor }) => {
  const router = useRouter();
  const skyRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const treeRef = useRef<HTMLImageElement>(null);
  const leavesRef = useRef<HTMLImageElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
    // GSAP context
    const ctx = gsap.context(() => {
      // Animate Sky from left and Sun from right
      gsap.from(skyRef.current, {
        x: -200, // Sky comes from the left
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skyRef.current,
          start: "top 80%", // Trigger when 80% of section is visible
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(sunRef.current, {
        x: 200, // Sun comes from the right
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sunRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate tree and leaves from left and right
      gsap.from(treeRef.current, {
        x: -200, // Tree comes from the left
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: treeRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(leavesRef.current, {
        x: 200, // Leaves come from the right
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leavesRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate h2, p, and button
      gsap.from(h2Ref.current, {
        x: -100, // h2 slides in from left
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(pRef.current, {
        x: 100, // p slides in from right
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0, // Button fades in
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, []);

    return () => ctx.revert(); // Cleanup animations on unmount
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center px-6 md:px-8 mt-[15%]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src="/images/tree-left.svg"
          alt="Tree Left"
          width={150}
          height={200}
          className="absolute left-0 top-10 hidden lg:block"
        />
        <Image
          src="/images/tree-right.svg"
          alt="Tree Right"
          width={150}
          height={200}
          className="absolute right-0 top-10 hidden lg:block"
        />
      </div> */}


      {/* Animated Tree */}
      <div className="absolute -top-32 md:top-[-100] xl:top-[-140] left-0" ref={treeRef}>
        <Image src="/images/tree-img.svg" alt="Tree" width={500} height={300} className="md:w-[340] xl:w-[500]"/>
      </div>

      {/* Animated Leaves */}
      <div className="absolute -top-32 right-0" ref={leavesRef}>
        <Image
          src="/images/tree-leave-img.svg"
          alt="Leaves"
          width={200}
          height={200}
          className="md:w-[120] xl:w-[160]"
        />
      </div>

      {/* Animated Sky and Sun */}
      <div className="absolute -top-42 md:top-[-100] lg:top-[-140] xl:top-[-160] left-[26%] flex items-center ">
        <Image
          src="/images/sky-img.svg"
          alt="Cloud"
          width={340}
          height={80}
          className="z-1 md:w-[250] lg:w-[300] xl:w-[340]"
          ref={skyRef}
        />
        <Image
          src="/images/sun-img.svg"
          alt="Sun"
          width={100}
          height={50}
          className="-ml-27 -mt-10 md:w-[50] lg:w-[100]"
          ref={sunRef}
        />
      </div>

      {/* Content Box */}
      <div
        ref={contentRef}
        className="relative flex flex-col lg:flex-row items-center bg-[url('/images/Group.svg')] bg-cover bg-no-repeat bg-center rounded-xl p-6 md:p-10 w-full md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[700px]"
      >
        {/* Left Side (Text Content) */}
        <div className="flex-1 lg:ml-[15%] -ml-[30%]">
          <h2 className="text-xl mb-[5%] md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-medium text-white">
            Ready To Move In Are You?
          </h2>
          <p className="mt-2 lg:mb-[9%] md:mb-[5%] text-[10px] md:text-[8px] lg:text-[12px] xl:text-lg 2xl:text-4xl text-white opacity-80">
            Check out the new farms for sale in Hyderabad by Farm Natura.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-white text-black font-medium px-8 2xl:py-6 lg:py-3 md:px-4 md:py-1 md:text-md lg:text-lg xl:text-xl 2xl:text-4xl rounded-md shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/images/farm-couple.svg"
            alt="Farm Couple"
            width={400}
            height={300}
            className="rounded-lg absolute -top-[15%] md:w-[220px]  md:right-[10%] xl:right-[10%] lg:w-[320px] lg:right-[7%] xl:w-[450px] 2xl:w-[650px]"
          />
        </div>
      </div>
    </section>
  );

}

export default MoveInSection;
