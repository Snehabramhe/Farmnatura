"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from("#header-heading", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#header-heading",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      timeline.from("#header-explore", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#header-explore",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      timeline.from("#infinity-img", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#infinity-img",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      timeline.from("#images", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#images",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      timeline.from("#images-content", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#images-content",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative w-screen overflow-x-hidden overflow-y-hidden bg-white">
      <div className="mt-11 px-[30px] xl:px-[100px]">
        <div className="flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center relative"
            id="header-heading"
          >
            <h1 className="font-jost text-[30px] xl:text-[45px] 2xl:text-[70px] font-semibold text-primary-text">
              Reason to
              <br />
              Choose
              <br />
              Us!
            </h1>
            <Image
              src="/svg/leaf-green.svg"
              width={100}
              height={100}
              alt="leaf"
              className="w-[100px] h-[100px] object-contain"
            />
            <Image
              src="/svg/choose-arrow.svg"
              width={200}
              height={200}
              alt="arrow"
              className="w-[150px] h-[150px] object-cover absolute -right-3"
            />
          </div>
          <div
            className="flex flex-row items-center justify-end max-w-[60%] xl:max-w-[50%]"
            id="header-explore"
          >
            <Image
              src="/svg/choose-farmland.svg"
              width={200}
              height={200}
              alt="farmland"
              className="w-[200px] h-[200px] object-cover"
            />
            <div className="ml-3">
              <p className="font-jost font-semibold text-[16px] xl:text-[24px] 2xl:text-[30px] text-primary-text">
                Explore Farm Land Options
              </p>
              <p className="mt-3 font-sofia-pro-regular text-[14px] xl:text-[16px] 2xl:text-[20px] text-black">
                Farm Natura offers a community of like-minded families from
                Hyderabad, where lifestyle is built basing on Natural Farming
                with an intent to focus on Health & Happiness.
              </p>
              <Button variant="outline" className="mt-3">
                <p className="text-primary-green">Download Brochure</p>
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="/svg/choose-infinite.svg"
          width={200}
          height={200}
          alt="infinity"
          className="w-full h-[450px] xl:h-[500px] 2xl:h-[800px] object-cover -mt-6 xl:-mt-1 2xl:-mt-12"
          id="infinity-img"
        />
        {/* <Image
          src="/svg/choose-flowers.svg"
          width={200}
          height={200}
          alt="flowers"
          className="w-[510px] h-[510px] object-cover absolute right-[25%] top-[28%]"
        /> */}
        {/* <Image
          src="/svg/choose-infinity.svg"
          width={200}
          height={200}
          alt="infinity"
          className="w-screen h-dvh object-cover -mt-96"
        /> */}
        <div className="relative">
          <div className="mt-20 relative" id="images">
            <Image
              src="/svg/choose-img-1.svg"
              width={200}
              height={200}
              alt="img-1"
              className="w-screen h-[400px] object-contain 2xl:object-cover z-10"
            />
            <Image
              src="/svg/choose-img-2.svg"
              width={200}
              height={200}
              alt="img-2"
              className="w-[300px] h-[400px] 2xl:w-[400] 2xl:h-[500px] object-contain absolute -right-4 xl:-right-10 -bottom-1/2 -z-10"
            />
          </div>
          <div
            className="absolute -bottom-[60%] 2xl:-bottom-[80%] left-0"
            id="images-content"
          >
            <p className="font-jost text-[16px] xl:text-[24px] 2xl:text-[30px] text-primary-text font-semibold">
              Explore Farm Land Options
            </p>
            <p className="font-sofia-pro-regular text-[14px] xl:text-[16px] 2xl:text-[20px] mt-4 max-w-[50%]">
              Grow investments | Farm Natura is located near the Airport,
              Srisailam highway is a prestigious Farmhouses For Sale in
              Hyderabad concept. It is located Near Maheshwaram. The project has
              been set up at a land rich in resources like abundant water,
              naturally nutrient rich soil, apt climatic conditions, easy access
              to farming. This project deals with sustainable Farming &
              varieties of fruit plantation.
            </p>
            <Button variant="outline" className="mt-4">
              <p className="text-primary-green">Download Brochure</p>
            </Button>
          </div>
        </div>
      </div>
      <Image
        src="/svg/choose-bottom.svg"
        width={200}
        height={200}
        alt="choose"
        className="w-screen h-screen object-cover -mt-32"
      />
      <Image
        src="/svg/choose-right.svg"
        width={200}
        height={200}
        alt="choose-right"
        className="w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[500px] object-contain absolute -right-24 2xl:-right-20 bottom-[15%]"
      />
    </div>
  );
};

export default Choose;
