"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <nav className="bg-[#FFFBE5] relative top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Farm Natura Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className={`hidden md:flex space-x-8 text-[#5C5C5C] font-semibold ml-auto ${menuOpen ? "hidden" : "flex"}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/highlights">Highlights</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>

        
          <Link href="/contact">
            <button className="hidden md:block border border-green-600 text-green-700 px-10 py-2 rounded-md hover:bg-green-100 transition lg:ml-22">
              Contact Us
            </button>
          </Link>

        
          <button className="md:hidden text-2xl text-[#333] ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FFFBE5] shadow-lg absolute top-16 left-0 w-full py-4 px-6">
            <ul className="flex flex-col space-y-4 text-[#333] font-semibold text-lg">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/highlights">Highlights</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li>
                <Link href="/contact">
                  <button className="w-full border border-green-600 text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="pt-[0px] md:pt-[0px] lg:pt-[0px]"></div>
    </>
  );
};

export default Navbar;


