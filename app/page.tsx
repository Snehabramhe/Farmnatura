import Footer from "@/components/Common/Footer";
import QuickLinks from "@/components/Common/QuickLinks";
import About from "@/components/Home/About";
import Choose from "@/components/Home/Choose";
import KeyHighlights from "@/components/Home/KeyHighlights";
import MoveIn from "@/components/Home/MoveIn";
import Testimonials from "@/components/Home/Testimonials";
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
      <MoveIn />
      <Footer />
      <QuickLinks />
    </main>
  );
};

export default HomePage;
