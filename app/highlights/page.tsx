import Testimonials from "@/components/Home/Testimonials";
import CustomFarmlands from "@/components/project-highlights/CustomFarmlands";
import FarmingExperience from "@/components/project-highlights/FarmingExperience";
import FarmLandOptions from "@/components/project-highlights/FarmLandOptions";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import ProjectHighlight from "@/components/project-highlights/ProjectHighlight";
import TestimonialSection from "@/components/project-highlights/TestimonialSection";
import WhyFarmNatura from "@/components/project-highlights/WhyFarmNatura";

const ProjectHighlights = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <ProjectHighlight />
        <WhyFarmNatura />
        <FarmLandOptions />
        <CustomFarmlands />
        <FarmingExperience />
        <div className="relative">
        <p className="font-poppins text-[173px] text-[#2433551F] -rotate-90 absolute -top-90 -right-[30%] 2xl:-right-[20%] z-20">
          Farm Natura
        </p>
        </div>
         <TestimonialSection />
        <MoveInSection bgColor={"#F5F2E6"} />
        <FarmNaturaFooter bgColor={"#F5F2E6"}/>
      </main>
    </>
  );
};

export default ProjectHighlights;
