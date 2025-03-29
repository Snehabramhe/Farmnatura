import About from "@/components/Home/About";
import Choose from "@/components/Home/Choose";
import KeyHighlights from "@/components/Home/KeyHighlights";
import Testimonials from "@/components/Home/Testimonials";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import Hero from "../components/Home/Hero";

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-primary-bg">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <KeyHighlights />
      <Choose />
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
