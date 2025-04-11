"use client";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Modal from "../Common/Formmodal";

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useGSAP(
    () => {
      const elements = [
        { id: "#header-heading", scrub: 0.6 },
        { id: "#header-explore", scrub: 0.6 },
        { id: "#infinity-img", scrub: 0.5 },
        { id: "#images", scrub: 0.2 },
        { id: "#images-content", scrub: 0.3 },
      ];

      elements.forEach(({ id, scrub }) => {
        gsap.from(id, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: id,
            start: "top 80%",
            end: "bottom 20%",
            scrub,
            once: true,
          },
        });
      });
    },
    { scope: typeof window !== "undefined" ? document.body : null }
  );

  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <div className="mt-8 md:mt-11 px-4 sm:px-6 md:px-8 lg:px-[30px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 lg:gap-0">
          <div className="flex flex-row items-center relative" id="header-heading">
            <h1 className="font-jost text-2xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-semibold text-primary-text leading-tight">
              Reason to<br />Choose<br />Us!
            </h1>
            <Image src="/svg/leaf-green.svg" width={80} height={80} alt="leaf" className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain" />
            <Image src="/svg/choose-arrow.svg" width={200} height={200} alt="arrow" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-cover absolute -right-2 sm:-right-3" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end w-full lg:w-[60%] xl:w-[50%]" id="header-explore">
            <Image src="/svg/choose-farmland.svg" width={200} height={200} alt="farmland" className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain" />
            <div className="mt-3 sm:mt-0 sm:ml-3 md:ml-4 lg:ml-6">
              <p className="font-jost font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[30px] text-primary-text">
                WHAT MAKES IT THE RIGHT PLACE FOR YOU?
              </p>
              <ul className="mt-2 sm:mt-3 font-sofia-pro-regular text-sm sm:text-base md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-black list-disc list-inside">
                <li>6+ Years of Revitalization of Soil.</li>
                <li>Regular R&D to Monitor Soil Health.</li>
                <li>Expert Assistance & Maintenance.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mt-0" id="infinity-img">
          <Image src="/svg/choose-infinite.svg" width={2000} height={800} alt="infinity" className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] object-contain" />
        </div>

        <div className="relative z-10 mt-5 md:mt-10" id="images">
          <div className="relative w-full">
            <div className="w-full overflow-hidden relative z-1">
              <Image src="/svg/choose-img-1.svg" width={1440} height={700} alt="img-1" className="w-full h-[120px] sm:h-[300px] md:h-[200px] lg:h-[280px] xl:h-[350px] 2xl:h-[700px] object-contain" />
            </div>
            <div className="absolute right-0 bottom-[-40%] md:bottom-0 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%]">
              <Image src="/svg/choose-img-2.svg" width={400} height={500} alt="img-2" className="w-full h-auto object-contain translate-y-[30%]" />
            </div>
          </div>

          <div className="mt-25 sm:mt-20 md:mt-18 lg:absolute lg:bottom-[-95%] xl:bottom-[-80%] 2xl:bottom-[-40%] left-0 w-full lg:w-[70%] xl:w-[110%] 2xl:w-[100%]" id="images-content">
            <p className="font-jost text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[32px] text-primary-text font-semibold mb-4 sm:mb-5 md:mb-6 ml-0 sm:ml-1">KANDUKUR</p>
            <p className="font-jost text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[32px] text-primary-text font-semibold mb-4 sm:mb-5 md:mb-6 ml-0 sm:ml-1">THE FUTURE CITY OF HYDERABAD</p>
            <p className="font-sofia-pro-regular text-sm sm:text-base md:text-lg lg:text-base xl:text-md 2xl:text-xl mt-2 sm:mt-3 md:mt-4 ml-0 sm:ml-1 w-full lg:max-w-[100%] xl:max-w-[65%] 2xl:max-w-[68%]">
              Located in Hyderabad’s fastest-growing zone, Farm Natura offers you the best of both worlds - peaceful countryside living with the promise of booming infrastructure, upcoming developments, and seamless connectivity to the city. Just 25 minutes from the RGI Airport, this is where nature meets next. 25 Minutes From RGI Airport 20 Minutes From ORR Upcoming 200-Acre AI City Proposed Young India Skills University
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 md:mt-12 lg:mt-16 w-full">
        <div className="w-full overflow-hidden">
          <Image src="/svg/choose-bottom.svg" width={2560} height={800} alt="choose" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover" />
        </div>
        <div className="absolute right-0 bottom-[10%] sm:bottom-[15%] md:bottom-[20%] w-[25%] sm:w-[20%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%]">
          <Image src="/svg/choose-right.svg" width={400} height={500} alt="choose-right" className="w-full h-auto object-contain" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Choose;