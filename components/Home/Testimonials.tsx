"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 150,
        opacity: 0,
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F5F2E6] py-8 md:py-16 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Quote */}
        <div className="absolute hidden md:block -top-2 left-20 md:left-80 text-6xl md:text-8xl text-gray-400 font-serif">
          “
        </div>

        {/* Floral Decoration */}
        <div className="absolute right-0 top-10 w-24 md:w-44 opacity-70">
          <Image
            src="/images/flower-img.svg"
            alt="Floral Decoration"
            width={180}
            height={240}
            className="w-full h-auto"
          />
        </div>

        {/* Testimonial Text */}
        <div className="relative z-10">
          <h3
            className="text-gray-500 text-base md:text-lg tracking-wide font-light"
            style={{ fontFamily: "Poppins" }}
          >
            Testimonials
          </h3>
          <h2
            className="text-2xl md:text-4xl font-medium text-gray-900 mt-2 leading-tight max-w-xs md:max-w-md"
            style={{ fontFamily: "Jost" }}
          >
            Where Dreams Find Their Perfect Address
          </h2>

          {/* Image and User Info Container */}
          <div className="relative mt-6 md:mt-12 mb-4">
            {/* Rectangular Image - Overlapping the green box */}
            <div className="absolute -bottom-4 left-0 md:-top-8 md:left-8 z-20 w-20 h-24 md:w-48 md:h-56">
              <div className="overflow-hidden shadow-lg border-2 md:border-4 border-white bg-white">
                <Image
                  src="/images/girl-img.svg"
                  alt="Testimonial User"
                  width={200}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Designation - Positioned to right of image */}
            <div className="ml-28 md:ml-64 pt-4 md:pt-8">
              <h3
                className="text-lg md:text-2xl font-semibold text-gray-900 mb-1 md:mb-2"
                style={{ fontFamily: "Jost" }}
              >
                Excellency Of Living Standards
              </h3>
              <p
                className="text-sm md:text-base font-medium text-black-700 mb-0 md:mb-1"
                style={{ fontFamily: "Jost" }}
              >
                Ridhira Sheik
              </p>
              <p
                className="text-xs md:text-sm text-black-500"
                style={{ fontFamily: "Jost" }}
              >
                Product Manager
              </p>
            </div>
          </div>

          {/* Testimonial Quote Box */}
          <div className="relative bg-[#3D7B3B] text-white p-6 md:p-8 pt-20 md:pt-12 shadow-lg rounded-lg">
            {/* Space for the image overlap */}
            <div className="absolute -top-4 left-4 md:-top-8 md:left-8 w-20 h-24 md:w-48 md:h-56 z-10"></div>

            <p
              className="text-sm md:text-base leading-relaxed md:pl-56"
              style={{ fontFamily: "Jost" }}
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
      </div>
    </section>
  );
};

export default TestimonialSection;