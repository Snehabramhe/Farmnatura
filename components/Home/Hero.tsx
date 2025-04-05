"use client";
import  React,{ useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "../ui/button";
import Modal from "../Common/Formmodal";


const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
    <div className="relative w-screen overflow-x-hidden overflow-y-hidden bg-primary-bg">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h1
          className="font-jost font-semibold text-center text-[32px] mt-5 leading-tight sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] text-primary-text"
          id="hero-heading"
        >
          Farmland Investing
          <br />
          Made Simple
        </h1>
        <p
          className="text-center mt-8 sm:mt-6 md:mt-8 lg:mt-10 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-sofia-pro-regular max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]"
          id="hero-content"
        >
          Farm Natura offers a community of like-minded families from Hyderabad,
          where lifestyle is built basing on Natural Farming with an intent to
          focus on Health & Happiness, Indias first nature family estate.
        </p>
        <div
          className="relative z-20 flex items-center justify-center mt-8 mb-12 sm:mt-8 md:mt-10 lg:mt-12"
          id="hero-btn"
        >
          <Button className="relative z-30 text-sm sm:text-base md:text-lg lg:text-xl px-6 py-3 sm:px-8 sm:py-4" onClick={() => setModalOpen(true)}>
            Book A Site Visit
          </Button>
        </div>
      </div>
      <Image
        src="/svg/hero-line-bg.svg"
        width={200}
        height={200}
        alt="hero-bg-line"
        className="w-full h-[450px] sm:h-[400px] md:h-[350px] lg:h-[420px] absolute top-[50px] sm:top-[60px] md:top-[70px] lg:top-[80px] left-0"
      />
      <Image
        src="/images/sunflower-img.svg"
        width={200}
        height={200}
        alt="hero-bg"
        className="w-screen h-[50%] sm:h-[45%] md:h-[50%] lg:h-[55%] xl:h-[60%] 2xl:h-[65%] object-cover"
      />

      <div
        className="flex flex-col space-y-6 absolute top-20 right-0 sm:right-2"
        id="social-links"
      >
        <Image
          src="/svg/instagram-outline.svg"
          alt="instagram"
          width={30}
          height={30}
          className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px] cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/svg/facebook-outline.svg"
          alt="facebook"
          width={30}
          height={30}
          className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px] cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/svg/twitter-outline.svg"
          alt="twitter"
          width={30}
          height={30}
          className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px] cursor-pointer"
          onClick={() =>
            window.open("https://twitter.com/farmnatura", "_blank")
          }
        />
        <a
          href="https://api.whatsapp.com/send?phone=919100007368"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/whatapp.svg"
            alt="whatsapp"
            width={30}
            height={30}
            className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px] cursor-pointer"
          />
        </a>
        <a href="tel:919579555666">
          <Image
            src="/svg/phone.svg"
            alt="phone"
            width={30}
            height={30}
            className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px] cursor-pointer"
          />
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

    </div>
  );
};

export default Hero;
