"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../Assests/SVG/image.svg";
import image2 from "../Assests/SVG/image 70.svg";
import img1 from "../Assests/SVG/img 1.svg";
import img2 from "../Assests/SVG/img 2.svg";
import img3 from "../Assests/SVG/img 3.svg";
import img4 from "../Assests/SVG/img 4.svg";
import img5 from "../Assests/SVG/img 5.svg";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";

gsap.registerPlugin(ScrollTrigger);

const allImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerSet = 5;

  const titleRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const specialImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

    
      gsap.fromTo(
        galleryRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            once: true, 
          },
        }
      );

    
      gsap.fromTo(
        imageRefs.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            once: true, 
          },
        }
      );

  
      if (specialImageRef.current) {
        gsap.fromTo(
          specialImageRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: specialImageRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert(); 
  }, []); // 


  const currentImages = allImages.slice(startIndex, startIndex + imagesPerSet);


  const nextImage = () => {
    if (startIndex + imagesPerSet < allImages.length) {
      setStartIndex(startIndex + imagesPerSet);
      triggerPopUpAnimation(); 
    }
  };
  
  const prevImage = () => {
    if (startIndex - imagesPerSet >= 0) {
      setStartIndex(startIndex - imagesPerSet);
      triggerPopUpAnimation();
    }
  };
  
  const triggerPopUpAnimation = () => {
  
    gsap.fromTo(
      imageRefs.current,
      { scale: 0.8, opacity: 0 }, 
      {
        scale: 1,
        opacity: 1, 
        duration: 0.5, 
        ease: "power3.out", 
        stagger: 0.1, 
      }
    );
  };
  
  return (
    <div className="bg-[#FFFBE5] min-h-screen">
      <div className="lg:pt-[30px] pt-[40px] w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div
            ref={titleRef}
            className="absolute top-1/4 left-6 sm:left-10 md:left-16 lg:left-40 text-white"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold">
              Life at Farm Natura
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
              Gallery
            </h1>
          </div>
          <Image src={image} alt="Farm Natura Background" width={1920} height={684} className="w-full h-auto" />
        </div>

        {/* Special Image Section */}
        <div className="relative flex justify-center sm:justify-end lg:justify-end -mt-5 md:-mt-20 lg:-mt-30 xl:-mt-55 px-4">
          <Image
            src={image2}
            alt="Farm Natura Logo"
            width={672}
            height={1542}
            className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] h-auto"
            ref={specialImageRef}
          />
          <div className="absolute top-[90%] right-0 w-[60%] border-t-2 border-[#C69A47]"></div>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 px-15 mt-25">
          <div className="md:col-span-2">
            <Image src={currentImages[0]} alt="Main Image" width={800} height={400} className="w-full h-full object-cover rounded-lg" />
          </div>
          {currentImages.slice(1).map((img, idx) => (
            <div key={idx}>
              <Image
                ref={(el) => {
                  if (el) imageRefs.current[idx + 1] = el;
                }}
                src={img}
                alt={`Small Image ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-20 mt-10 lg:mb-20">
          <button
            onClick={prevImage}
            disabled={startIndex === 0}
            className={`flex flex-col items-center transition-transform ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-l-2 border-t-2 border-green-700 rounded-full rotate-[-45deg]"></span>
              <span className="text-green-700 text-xl">&#8592;</span>
            </div>
            <span className="text-gray-700 mt-2">Prev</span>
          </button>

          <button
            onClick={nextImage}
            disabled={startIndex + imagesPerSet >= allImages.length}
            className={`flex flex-col items-center transition-transform ${
              startIndex + imagesPerSet >= allImages.length ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-r-2 border-b-2 border-green-700 rounded-full rotate-[45deg]"></span>
              <span className="text-green-700 text-xl">&#8594;</span>
            </div>
            <span className="text-gray-700 mt-2">Next</span>
          </button>
        </div>

        <MoveInSection bgColor="#FFFBE5" />
        <FarmNaturaFooter bgColor="#FFFBE5" />
      </div>
    </div>
  );
};

export default Gallery;
