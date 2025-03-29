"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TestimonialItem from "../Testimonials/TestimonialItem";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from("#testimonials-heading", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#testimonials-heading",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      timeline.from("#testimonials-content", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#testimonials-content",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      timeline.from("#testimonials", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 3,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden bg-white">
      <p className="font-libre-caslon-display text-[300px] text-[#939393] absolute top-0 left-[40%]">
        &ldquo;
      </p>
      <div className="pt-[175px] pl-[30px] 2xl:pl-[150px]">
        <p
          className="font-poppins text-[16px] lg:text-[24px]"
          id="testimonials-heading"
        >
          Testimonials
        </p>
        <p
          className="font-jost font-normal text-[20px] lg:text-[46px]"
          id="testimonials-content"
        >
          Where Dreams Find Their
          <br />
          Perfect Address
        </p>
        <div id="testimonials">
          <TestimonialItem
            img="/svg/testimonial.svg"
            title="Excellency of Living Standards"
            name="Ridhira Sheik"
            designation="Product Manager"
            content="I couldn't have asked for a better place to call home than FARM NATURA Urban One. From the moment I stepped into this vibrant community, I knew I had made the right choice. Everything here exceeded all my expectations, offering a perfect blend of comfort and elegance. What truly sets Farm Natura apart is the sense of belonging it provides - the friendly neighbours, the top-notch amenities, and the beautifully landscaped surroundings. Living here has been an incredible experience, and I can't imagine being anywhere else."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
