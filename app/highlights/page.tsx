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
        <TestimonialSection />
        <MoveInSection />
        <FarmNaturaFooter />
      </main>
    </>
  );
};

export default ProjectHighlights;
