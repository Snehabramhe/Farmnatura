import Image from "next/image";
import React from "react";

// Social media links configuration
const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "/images/fb.svg",
    url: "https://facebook.com/farmnatura",
  },
  {
    name: "Twitter",
    icon: "/images/twitter.svg",
    url: "https://twitter.com/farmnatura",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.svg",
    url: "https://linkedin.com/company/farmnatura",
  },
  {
    name: "YouTube",
    icon: "/images/youtube.svg",
    url: "https://youtube.com/farmnatura",
  },
  {
    name: "Instagram",
    icon: "/images/insta.svg",
    url: "https://instagram.com/farmnatura",
  },
  {
    name: "Google+",
    icon: "/images/googleplus.svg",
    url: "https://plus.google.com/farmnatura",
  },
];

// Footer links configuration
const footerLinks = [
  { label: "ABOUT US", url: "/about" },
  { label: "CONTACT US", url: "/contact" },
  { label: "HELP", url: "/help" },
  { label: "PRIVACY POLICY", url: "/privacy" },
  { label: "DISCLAIMER", url: "/disclaimer" },
];

interface FarmNaturaFooterProps {
  bgColor: string;
}

const FarmNaturaFooter: React.FC<FarmNaturaFooterProps> = ({ bgColor }) => {
  return (
    <footer
      className="p-6 w-full relative  px-6 md:px-20"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src="/images/horizontal-img.svg"
        alt="hr-img"
        style={{ marginTop: "6px" }}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 gap-20 mt-10">
        {/* Left side */}
        <div className="flex flex-col items-start gap-5 w-1/2">
          {/* Logo */}
          <Image
            src="images/logo.svg"
            alt="Farm Natura Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <p
            style={{
              fontFamily: "Glory",
              fontWeight: 300,
              fontSize: "18px",
              marginTop: "12px",
              width: "490px",
            }}
          >
            Come, embrace the privilege to experience life from every other
            angle. Welcome to the highest of high living. 
          </p>
        </div>

        {/* Right side - Contact Information */}
        <div
          className="flex flex-col space-y-4 w-1/2"
          style={{ fontFamily: "Assistant", fontWeight: 400, fontSize: "20px" }}
        >
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src="/images/location.svg" alt="location" />
            <p className="text-sm">
              Planet Green ,Above Hyundai Show Room Building, Q- City Road,
              Financial District, Gowlidoddi , Hyderabad
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-between space-x-4 w-[370px]">
            <div className="flex items-center space-x-2">
              <img src="/images/phone.svg" alt="phone" />
              <p className="text-sm">9579555666</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/fax.svg" alt="fax" />
              <p className="text-sm">(123) 456-7890</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center  space-x-7 mt-7">
            <span className="text-gray-600">Social Media</span>
            {socialMediaLinks.map(({ name, icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={name}
              >
                <img src={icon} alt="not found" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/horizontal-img2.svg"
        alt="hr-img"
        style={{ marginTop: "70px" }}
      />
      {/* Footer Links */}

      <div className="container mx-auto pt-4 flex flex-col md:flex-row items-center justify-between">
        <div
          className="flex flex-wrap justify-center space-x-4"
          style={{ fontFamily: "lato", fontWeight: 400, fontSize: "20px" }}
        >
          {footerLinks.map(({ label, url }, index) => (
            <a
              key={index}
              href={url}
              className="text-sm text-black hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div
          className="text-sm text-gray-500 mt-4 md:mt-0"
          style={{ fontFamily: "Assistant", fontWeight: 400, fontSize: "15px" }}
        >
          Copyright © 2024 Farmnatura
        </div>
      </div>
    </footer>
  );
};

export default FarmNaturaFooter;
