"use client";
import Image from "next/image";
import image from "../Assests/SVG/image.svg";
import image2 from "../Assests/SVG/image 70.svg";
import img1 from "../Assests/SVG/img 1.svg";
import img2 from "../Assests/SVG/img 2.svg";
import img3 from "../Assests/SVG/img 3.svg";
import img4 from "../Assests/SVG/img 4.svg";
import img5 from "../Assests/SVG/img 5.svg";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";

const Gallery = () => {
  return (
    <div className="bg-[#FFFBE5] min-h-screen">
      <div className="pt-[30px] w-full">
        <div className="relative w-full">
          <div className="absolute top-1/4 left-6 sm:left-10 md:left-16 lg:left-40 text-white">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold">
              Life at Farm Natura
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
              Gallery
            </h1>
          </div>

          <Image
            src={image}
            alt="Farm Natura Background"
            width={1920}
            height={684}
            className="w-full h-auto"
          />
        </div>

        {/* Second Image Section */}
        <div className=" relative flex justify-center sm:justify-end lg:justify-end mt-6 sm:mt-4 md:-mt-20 lg:-mt-40 px-4">
          <Image
            src={image2}
            alt="Farm Natura Logo"
            width={672}
            height={1542}
            className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] h-auto "
          />
          <div className="absolute top-[90%] right-0 w-[60%] border-t-2 border-[#C69A47]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-15 mt-25">
          {/* Large Image (Top Left) */}
          <div className="md:col-span-2 ">
            <Image
              src={img1}
              alt="Main Image"
              width={800}
              height={400}
              className="w-full  h-full object-cover "
            />
          </div>

          {/* Small Image (Top Right) */}
          <div>
            <Image
              src={img2}
              alt="Small Image 1"
              width={400}
              height={300}
              className="w-full h-auto "
            />
          </div>

          {/* Bottom Row (Three Small Images) */}
          <div>
            <Image
              src={img3}
              alt="Small Image 2"
              width={400}
              height={400}
              className="w-full h-auto "
            />
          </div>

          <div>
            <Image
              src={img4}
              alt="Small Image 3"
              width={400}
              height={400}
              className="w-full h-auto "
            />
          </div>

          <div>
            <Image
              src={img5}
              alt="Small Image 4"
              width={400}
              height={400}
              className="w-full h-auto "
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-20 mt-10 lg:mb-20">
          <button className="flex flex-col items-center">
            <div className="w-16 h-16 border-[2px] border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-l-[2px] border-t-[2px] border-green-700 rounded-full rotate-[-45deg]"></span>
              <span className="text-green-700 text-xl">&#8592;</span>
            </div>
            <span className="text-gray-700 mt-2">Prev</span>
          </button>

          <button className="flex flex-col items-center">
            <div className="w-16 h-16 border-[2px] border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-r-[2px] border-b-[2px] border-green-700 rounded-full rotate-[45deg]"></span>
              <span className="text-green-700 text-xl">&#8594;</span>
            </div>
            <span className="text-gray-700 mt-2">Next</span>
          </button>
        </div>
        <div>
          <MoveInSection bgColor="#FFFBE5"/>
        </div>

        <div>
          <FarmNaturaFooter bgColor="#FFFBE5"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
