"use client";
import { HIGHLIGHTS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Modal from "../Common/Formmodal";
import { Button } from "../ui/button";

const KeyHighlights = () => {
  const [activeItem, setActiveItem] = useState(HIGHLIGHTS[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const listItemRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#highlights-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#highlights-header",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      listItemRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  });


  const handleItemClick = (item: typeof HIGHLIGHTS[number]) => {
    if (activeItem.id !== item.id) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          setActiveItem(item);
        },
      });

      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.3 });
        },
      });
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3 }
      );
    }
  }, [activeItem]);

  return (
    <div
      className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden bg-[url(/svg/highlight-bg.svg)] bg-cover bg-no-repeat bg-center"
      id="highlights-section"
    >
      <div className="mt-11 pl-[30px] xl:pl-[100px] z-10">
        <div className="flex flex-row items-center" id="highlights-header">
          <h2 className="font-jost font-semibold text-[35px] 2xl:text-[70px] text-primary-text">
            Key Highlights
          </h2>
        </div>

        <div className="mt-3 2xl:mt-20 flex flex-col space-y-5 z-20" id="highlights">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-row items-center cursor-pointer"
              onClick={() => handleItemClick(item)}
              ref={(el) => {
                listItemRef.current[index] = el;
              }}
            >
              <div
                className={`flex flex-row w-[33px] h-[33px] 2xl:w-[55px] 2xl:h-[55px] border rounded-full items-center justify-center ${
                  activeItem.id === item.id ? "border-black" : "border-transparent"
                }`}
              >
                <div
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                    activeItem.id === item.id ? "bg-black" : "bg-black-41"
                  }`}
                />
              </div>
              <p
                className={`text-[14px] lg:text-[18px] ml-4 font-jost font-semibold ${
                  activeItem.id === item.id ? "text-primary-text" : "text-black-41"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}

          {activeItem && (
            <div className="flex xl:flex-row flex-col items-center justify-center absolute -right-[26%] 2xl:-right-[25%]">
              <div
                ref={imageRef}
                className="w-[250px] h-[150px] xl:w-[350px] xl:h-[200px] 2xl:w-[500px] 2xl:h-[400px] rounded-[12px] 2xl:rounded-[26px] border border-[#C69E67] flex items-center justify-center"
              >
                <Image
                  src={activeItem.img}
                  width={200}
                  height={200}
                  alt="img"
                  className="w-[90%] h-[90%] rounded-[12px] 2xl:rounded-[26px] object-cover"
                />
              </div>
              <div
                ref={contentRef}
                className="ml-[20px] 2xl:ml-[30px] max-w-[20%] lg:max-w-[20%] 2xl:max-w-[25%] mt-4 2xl:mt-0"
              >
                <p className="font-jost text-[16px] 2xl:text-[30px] font-semibold text-primary-text">
                  {activeItem.contentTitle}
                </p>
                <p className="font-sofia-pro-regular text-[14px] 2xl:text-[20px] mt-2">
                  {activeItem.content}
                </p>
                <Button
                  className="mt-4"
                  variant="outline"
                  onClick={() => setModalOpen(true)}
                >
                  <p className="text-primary-green">Download Brochure</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default KeyHighlights;