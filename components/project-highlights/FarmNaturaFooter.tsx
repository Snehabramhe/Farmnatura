import Image from "next/image";
import React from "react";

// Social media links configuration
const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "/images/fb.svg",
    url: "https://www.facebook.com/farmnatura.in",
  },
  {
    name: "Twitter",
    icon: "/images/twitter.svg",
    url: "https://twitter.com/farmnatura",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.svg",
    url: "https://www.linkedin.com/company/farm-natura/",
  },
  {
    name: "YouTube",
    icon: "/images/youtube.svg",
    url: "https://www.youtube.com/@FarmNatura",
  },
  {
    name: "Instagram",
    icon: "/images/insta.svg",
    url: "https://www.instagram.com/farmnatura.in/",
  },
];

// Footer links configuration
const footerLinks = [
  { label: "ABOUT US", url: "/about" },
  { label: "CONTACT US", url: "/contact" },
  { label: "PRIVACY POLICY", url: "/privacy" },
  { label: "DISCLAIMER", url: "/disclaimer" },
];

interface FarmNaturaFooterProps {
  bgColor: string;
}

const FarmNaturaFooter: React.FC<FarmNaturaFooterProps> = ({ bgColor }) => {
  return (
    <footer
      className="p-6 w-full relative px-4 md:px-20"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src="/images/horizontal-img.svg"
        alt="hr-img"
        className="w-full max-w-[100%] mt-2"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 gap-4 mt-15">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="Farm Natura Logo"
            width={130}
            height={40}
            className="object-contain"
          />
          <p
            className="text-center md:text-left text-sm md:text-base w-[90%] md:w-[65%]"
            style={{ fontFamily: "Glory", fontWeight: 300 }}
          >
            Come, embrace the privilege to experience life from every other
            angle. Welcome to the highest of high living.
          </p>
        </div>

        {/* Right side - Contact Information */}
        <div
          className="flex flex-col space-y-4 w-full md:w-1/2 text-sm md:text-base"
          style={{ fontFamily: "Assistant", fontWeight: 400 }}
        >
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start space-x-0 md:space-x-2 text-center md:text-left">
            {/* Clickable Location Icon */}
            <a
              href="https://maps.app.goo.gl/WFkx7FMcgNfzPgXg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/location.svg"
                alt="Location"
                className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
              />
            </a>
            {/* Address Text */}
            <p className="w-[90%] md:w-auto leading-snug">
              Planet Green-Dates County Above Hyundai Showroom 2nd Floor, Regent
              Square Building, Q-City Road, Gowlidoddi, Hyderabad – 500075
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0 space-x-0 md:space-x-4 w-full md:w-[370px]">
            <div className="flex items-center space-x-2">
              <img src="/images/phone.svg" alt="phone" className="w-5 h-5" />
              <p>+91 9555700900</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-3 md:space-y-0 space-x-0 md:space-x-7 mt-5">
            <span className="text-gray-600 text-sm md:text-base">
              Social Media
            </span>
            <div className="flex space-x-4">
              {socialMediaLinks.map(({ name, icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={name}
                >
                  <img src={icon} alt={name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        src="/images/horizontal-img2.svg"
        alt="hr-img"
        className="w-full max-w-[100%] mt-10"
      />

      {/* Footer Links */}
      <div className="container mx-auto pt-4 flex flex-col md:flex-row items-center justify-between">
        <div
          className="flex flex-wrap justify-center space-x-4 text-sm md:text-sm"
          style={{ fontFamily: "lato", fontWeight: 400 }}
        >
          {footerLinks.map(({ label, url }, index) => (
            <a
              key={index}
              href={url}
              className="text-black hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div
          className="text-gray-500 mt-4 md:mt-0 text-xs md:text-sm"
          style={{ fontFamily: "Assistant", fontWeight: 400 }}
        >
          Copyright © 2025 Farmnatura
        </div>
      </div>
    </footer>
  );
};

export default FarmNaturaFooter;