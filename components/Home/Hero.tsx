"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  useGSAP(
    () => {
      gsap.from("#hero-heading", {
        opacity: 0,
        y: 100,
        duration: 0.7,
      });
      gsap.from("#hero-content", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        delay: 0.5,
      });
      gsap.from("#hero-btn", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        delay: 0.7,
      });
      gsap.from("#social-links", {
        opacity: 0,
        x: 100,
        duration: 0.5,
        delay: 0.7,
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden">
      <h1
        className="font-jost font-semibold text-center mt-[100px] text-[50px] xl:text-[80px] text-primary-text"
        id="hero-heading"
      >
        Farmland Investing
        <br />
        Made Simple
      </h1>
      <p
        className="text-center mt-10 text-[16px] xl:text-[20px] font-sofia-pro-regular"
        id="hero-content"
      >
        Farm Natura offers a community of like-minded families from Hyderabad,
        where lifestyle
        <br />
        is built basing on Natural Farming with an intent to focus on Health &
        Happiness.
      </p>
      <div className="flex items-center justify-center mt-10" id="hero-btn">
        <Button>
          <p>Book A Site Visit</p>
        </Button>
      </div>
      <Image
        src="/svg/hero-line-bg.svg"
        width={200}
        height={200}
        alt="hero-bg-line"
        className="w-full h-[420px] object-contain absolute top-[80px] left-0"
      />
      <Image
        src="/svg/hero-bg.svg"
        width={200}
        height={200}
        alt="hero-bg"
        className="w-screen h-[50%] 2xl:h-[65%] object-cover"
      />
      <div
        className="flex flex-col space-y-10 absolute top-20 right-10"
        id="social-links"
      >
        <Image
          src="/svg/instagram-outline.svg"
          width={37}
          height={37}
          alt="instagram"
          className="w-[37px] h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/svg/facebook-outline.svg"
          width={37}
          height={37}
          alt="facebook"
          className="w-[37px] h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/svg/twitter-outline.svg"
          width={37}
          height={37}
          alt="twitter"
          className="w-[37px] h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://twitter.com/farmnatura", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Hero;
