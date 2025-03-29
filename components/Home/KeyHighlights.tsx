"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Highlight from "../KeyHighlights/Highlight";

const KeyHighlights = () => {
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
      <div className="mt-11 pl-[30px] lg:pl-[150px]">
        <div className="flex flex-row items-center" id="highlight-header">
          <h2 className="font-jost font-semibold text-[35px] lg:text-[70px] text-primary-text">
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
        <div className="mt-3 lg:mt-20" id="highlights">
          <Highlight
            title="India's First Natural Farming Estates."
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive
          />
          <Highlight
            title="Importance of Soil "
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive={false}
          />
          <Highlight
            title="Chemical-Free Soil Nurtured for 6+ Years."
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive={false}
          />
          <Highlight
            title="Build Your Farmhouse and Grow Organic Produce."
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive={false}
          />
          <Highlight
            title="Benefits"
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive={false}
          />
          <Highlight
            title="Located Near Hyderabad's Emerging Growth Corridor."
            img="/svg/highlight-img.svg"
            contentTitle="India's First Natural Farming Estates."
            content="Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built basing on Natural Farming with an intent to focus on Health & Happiness."
            isActive={false}
          />
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
