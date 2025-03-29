"use client";
import { HIGHLIGHTS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const KeyHighlights = () => {
  const [activeItem, setActiveItem] = useState(HIGHLIGHTS[1]);

  useGSAP(
    () => {
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#highlight-header",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      const contentTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#highlights",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      contentTimeline.from("#highlights", {
        opacity: 0,
        y: 100,
      });

      headerTimeline.from("#highlight-header", {
        opacity: 0,
        y: 100,
      });

      // gsap.from("#highlight-header", {
      //   opacity: 0,
      //   y: 100,
      //   duration: 0.7,
      //   scrollTrigger: {
      //     trigger: "#highlight-header",
      //     start: "top center",
      //     end: "bottom bottom",
      //   },
      // });
      // gsap.from("#highlights", {
      //   opacity: 0,
      //   y: 100,
      //   duration: 0.7,
      //   delay: 0.5,
      //   scrollTrigger: {
      //     trigger: "#highlights",
      //     start: "top center",
      //     end: "bottom bottom",
      //   },
      // });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden">
      <Image
        src="/svg/key-highlights-top.svg"
        width={200}
        height={200}
        alt="top-img"
        className="w-screen h-screen object-cover absolute top-0 left-0 -z-[1]"
      />
      <div className="mt-11 pl-[30px] xl:pl-[150px]">
        <div className="flex flex-row items-center" id="highlight-header">
          <h2 className="font-jost font-semibold text-[35px] 2xl:text-[70px] text-primary-text">
            Key Highlights
          </h2>
          <Image
            src="/svg/leaf-green.svg"
            width={200}
            height={200}
            alt="leaf"
            className="w-[157px] h-[99px] object-contain -ml-10"
          />
        </div>
        <div className="mt-3 2xl:mt-20 flex flex-col space-y-5" id="highlights">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <div className="flex flex-row w-[33px] h-[33px] 2xl:w-[55px] 2xl:h-[55px] border rounded-full items-center justify-center border-black">
                <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-black" />
              </div>
              <p className="text-[14px] lg:text-[18px] ml-4 font-jost font-semibold text-primary-text">
                {item.title}
              </p>
            </div>
          ))}
          {activeItem && (
            <div className="flex 2xl:flex-row flex-col items-center justify-center absolute -right-[30%] xl:-right-[20%]">
              <div className="w-[250px] h-[150px] xl:w-[350px] xl:h-[200px] 2xl:w-[500px] 2xl:h-[400px] rounded-[12px] 2xl:rounded-[26px] border border-[#C69E67] flex items-center justify-center">
                <Image
                  src={activeItem.img}
                  width={200}
                  height={200}
                  alt="img"
                  className="w-[90%] h-[90%] rounded-[12px] 2xl:rounded-[26px] object-cover"
                />
              </div>
              <div className="ml-[10px] 2xl:ml-[30px] max-w-[40%] 2xl:max-w-[20%] mt-4 2xl:mt-0">
                <p className="font-jost text-[16px] 2xl:text-[30px] font-semibold text-primary-text">
                  {activeItem.contentTitle}
                </p>
                <p className="font-sofia-pro-regular text-[14px] 2xl:text-[20px] mt-2">
                  {activeItem.content}
                </p>
                <Button className="mt-4" variant="outline">
                  <p className="text-primary-green">Download Brochure</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Image
        src="/svg/key-highlights-bg.svg"
        width={200}
        height={200}
        alt="bg"
        className="w-screen h-full object-cover absolute bottom-0 left-0"
      />
    </div>
  );
};

export default KeyHighlights;
