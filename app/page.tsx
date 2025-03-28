import CustomFarmlands from "@/components/CustomFarmlands";
import FarmingExperience from "@/components/FarmingExperience";
import FarmLandOptions from "@/components/FarmLandOptions";
import FarmNaturaFooter from "@/components/FarmNaturaFooter";
import MoveInSection from "@/components/MoveInSection";
import ProjectHighlight from "@/components/ProjectHighlight";
import TestimonialSection from "@/components/TestimonialSection";
import WhyFarmNatura from "@/components/WhyFarmNatura";

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div className="flex justify-center">
          <ProjectHighlight />
        </div>
        <WhyFarmNatura />
        <FarmLandOptions />
        <CustomFarmlands />
        <FarmingExperience />
        <TestimonialSection />
        <MoveInSection />
        <FarmNaturaFooter />
      </main>
    </>
  );
};

export default HomePage;
