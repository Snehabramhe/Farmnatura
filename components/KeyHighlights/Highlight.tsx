import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  isActive: boolean;
  img: string;
  contentTitle: string;
  content: string;
}

const Highlight: React.FC<Props> = ({
  title,
  isActive,
  img,
  contentTitle,
  content,
}) => {
  const pointContainerCl = cn(
    "flex flex-row w-[33px] h-[33px] lg:w-[55px] lg:h-[55px] border rounded-full items-center justify-center",
    isActive ? "border-black" : "border-transparent"
  );
  const titleCl = cn(
    "text-[14px] lg:text-[18px] ml-4 font-jost font-semibold",
    isActive ? "text-primary-text" : "text-black-41"
  );
  const pointCl = cn(
    "w-2 h-2 lg:w-3 lg:h-3 rounded-full",
    isActive ? "bg-black" : "bg-black-41"
  );

  return (
    <div className="relative mt-5">
      <div className="flex flex-row items-center cursor-pointer">
        <div className={pointContainerCl}>
          <div className={pointCl} />
        </div>
        <p className={titleCl}>{title}</p>
      </div>
      {isActive && (
        <div className="flex flex-row items-center justify-end absolute top-0 right-5">
          <div className="w-[250px] h-[150px] lg:w-[500px] lg:h-[400px] rounded-[12px] lg:rounded-[26px] border border-[#C69E67] flex items-center justify-center">
            <Image
              src={img}
              width={200}
              height={200}
              alt="img"
              className="w-[90%] h-[90%] rounded-[12px] lg:rounded-[26px] object-cover"
            />
          </div>
          <div className="ml-[10px] lg:ml-[30px] max-w-[35%]">
            <p className="font-jost text-[16px] lg:text-[30px] font-semibold text-primary-text">
              {contentTitle}
            </p>
            <p className="font-sofia-pro-regular text-[14px] lg:text-[20px] mt-2">
              {content}
            </p>
            <Button className="mt-4" variant="outline">
              <p className="text-primary-green">Download Brochure</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Highlight;
