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
      className="relative py-16 px-6 md:px-20 flex justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* Animated Tree */}
      <div className="absolute top-5 left-0" ref={treeRef}>
        <Image src="/images/tree-img.svg" alt="Tree" width={540} height={200} />
      </div>

      {/* Animated Leaves */}
      <div className="absolute top-5 right-0" ref={leavesRef}>
        <Image
          src="/images/tree-leave-img.svg"
          alt="Leaves"
          width={150}
          height={200}
        />
      </div>

      {/* Animated Sky and Sun */}
      <div className="absolute -top-1 left-[26%] flex items-center ">
        <Image
          src="/images/sky-img.svg"
          alt="Cloud"
          width={340}
          height={80}
          className="z-1"
          ref={skyRef}
        />
        <Image
          src="/images/sun-img.svg"
          alt="Sun"
          width={100}
          height={50}
          className="-ml-27 -mt-10"
          ref={sunRef}
        />
      </div>

      <div className="relative w-full mt-29">
        <div
          className="relative bg-[url('/images/Group.svg')] bg-contain bg-no-repeat bg-center text-white p-8 lg:p-16 flex flex-row items-center w-full h-full"
        >
          <div className="flex-1 text-left ml-[12%]">
            <h2
              ref={h2Ref}
              className="text-xl lg:text-2xl xl:text-4xl"
              style={{ fontFamily: "Jost", fontWeight: 400 }}
            >
              Ready To Move
              <br className="block xl:hidden" />
              In Are You?
            </h2>
            <p
              ref={pRef}
              className="text-[10px] lg:text-[14px] xl:text-xl mt-2 opacity-80"
              style={{ fontFamily: "Jost", fontWeight: 300 }}
            >
              Check out the new farms for sale in
              <br className="block xl:hidden" />
              Hyderabad by Farm Natura.
            </p>
            <button
              ref={buttonRef}
              onClick={() => router.push('/contact')} // Add click handler
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
                className="rounded-lg w-50 h-50 lg:w-70 lg:h-70 xl:w-100 xl:h-100 absolute right-10 xl:right-20 -top-20 md:top-[10] lg:top-[-20] xl:top-[-110]"
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
