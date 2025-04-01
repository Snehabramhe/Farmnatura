"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 100, // slide up from 100px below
        opacity: 0,
        duration: 1.8, // slower and smoother animation
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when top of section hits 80% of viewport
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F5F2E6] py-16 pl-20">
      <div className="relative w-full">
        {/* Decorative Quote */}
        <div className="absolute -top-2 left-80 text-8xl text-gray-400 font-serif">
          “
        </div>

        {/* Floral Decoration (Top Right) */}
        <div className="absolute left-160 top-10">
          <Image
            src="/images/flower-img.svg"
            alt="Floral Decoration"
            width={180}
            height={240}
          />
        </div>

        {/* Testimonial Text */}
        <h3
          className="text-gray-500 text-lg tracking-wide font-light"
          style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "24px" }}
        >
          Testimonials
        </h3>
        <h2
          className="text-4xl md:text-5xl font-medium text-gray-900 mt-2 leading-tight w-[380px] h-[100]"
          style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "30px" }}
        >
          Where Dreams Find Their Perfect Address
        </h2>

        <h3
          className="text-2xl font-semibold text-gray-900 mt-6 ml-95 mb-5"
          style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "20px" }}
        >
          Excellency Of Living Standards
        </h3>
        <p
          className="text-md text-black-700 mt-1 font-medium ml-95 mb-2"
          style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "15px" }}
        >
          Ridhira Sheik
        </p>
        <p
          className="text-sm text-black-500 ml-95"
          style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "13px" }}
        >
          Product Manager
        </p>

        {/* Testimonial Quote Box */}
        <div className="relative bg-[#3D7B3B] text-white p-6 mt-8 shadow-lg h-[194px]">
          {/* Girl Image */}
          <Image
            src="/images/girl-img.svg"
            alt="Testimonial User"
            width={300}
            height={300}
            className="absolute z-10 shadow-lg -top-35"
          />

          <p
            className="text-md leading-relaxed pl-90"
            style={{ fontFamily: "Jost", fontWeight: 400, fontSize: "15px" }}
          >
            &ldquo;I couldn&apos;t have asked for a better place to call home than
            FARM NATURA Urban One. From the moment I stepped into this vibrant
            community, I knew I had made the right choice. Everything here
            exceeded all my expectations, offering a perfect blend of comfort
            and elegance. What truly sets Farm Natura apart is the sense of
            belonging it provides &ndash; the friendly neighbours, the top-notch
            amenities, and the beautifully landscaped surroundings. Living here
            has been an incredible experience, and I can&apos;t imagine being
            anywhere else.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
