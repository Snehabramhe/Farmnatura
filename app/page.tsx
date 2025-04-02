"use client";
import About from "@/components/Home/About";
import Choose from "@/components/Home/Choose";
import KeyHighlights from "@/components/Home/KeyHighlights";
import Testimonials from "@/components/Home/Testimonials";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import Hero from "../components/Home/Hero";
import Head from "next/head";


const HomePage = () => {

  return (
    
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-primary-bg">
         <Head>
        <link rel="icon" href="/images/logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-530x530.png" sizes="512x512" />
      </Head>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <KeyHighlights />
      <Choose />
      <div className="relative">
        <p className="font-poppins text-[173px] text-[#2433551F] -rotate-90 absolute -top-42 -right-[30%] 2xl:-right-[20%] z-20">
          Farm Natura
        </p>
      </div>
      <Testimonials />
      {/* <MoveIn /> */}
      <MoveInSection bgColor={"white"} /> 
      <FarmNaturaFooter bgColor={"white"} />
      {/* <Footer />
      <QuickLinks /> */}
         
    </main>
  );
};

export default HomePage;
