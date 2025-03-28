import Image from "next/image";
import React from "react";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";

const AboutSection: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mt-0">
        <Image
          src="/images/abouthero.svg"
          alt="Farm Natura Hero Image"
          fill
          objectFit="cover"
          priority
          className="opacity-90"
        />

        <div className="absolute left-6 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      <section className="bg-yellow-50 px-0 ">
        <div className="mr-0 space-y-28 relative">
          {/* Evolution Natural Farming Section */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full relative">
            {/* Left - Text */}
            <div className="md:w-1/2 z-10 px-6 md:px-12 -space-y-[20px] mt-12">
              <h2 className=" md:text-5xl font-bold text-[#404040]"  style={{fontFamily:"Jost",fontWeight:600,fontSize:"40px"}}>
                Evolution Natural
              </h2>
              <h2 className=" md:text-5xl font-bold text-[#404040] flex items-center"  style={{fontFamily:"Jost",fontWeight:600,fontSize:"40px"}}>
                Farming
                <Image
                  src="/images/leave.svg"
                  alt="Leaf Icon"
                  width={90}
                  height={71}
                />
              </h2>
              <p className="mt-9 text-[#282828]  w-[700px]"  style={{fontFamily:"Sofia Pro",fontWeight:400,fontSize:"15px"}}>
              Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built <br/>basing on Natural Farming with an intent to focus on Health & Happiness. <br/><br/>
              Respct Mother Nature And Land. "We Are Part Of Nature; Therefore, We Must Coexist With The <br/> Other Creatures That Live Among Us." <br/><br/>
              Our passion is to promote the “Agri” based Culture and bringing back the Ecological balanced <br/> Lifestyle with Health and Happiness. We respect the Mother Nature and nourish the land by <br/> restoring its original fertility back into its Natural State for the generations to come.
              </p>
              <a
                href="/brochure.pdf"
                download
                className="mt-12 inline-block border border-green-700 text-green-700 px-8 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-700 hover:text-white"
              >
                Download Brochure
              </a>
            </div>
            {/* Right - Image Full Width */}
            <div className="w-full md:w-1/2 flex h-[550px] justify-end">
              <Image
                src="/images/cow.svg"
                alt="Cow"
                width={1163}
                height={780}
                className="contain w-full"
              />
            </div>
          </div>

          {/* Research & Development Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full relative -mt-[5%]">
            {/* Left - Image Full Width */}
            <div className="w-full md:w-1/2 flex flex-col justify-start ml-0">
              <Image
                src="/images/pottery.svg"
                alt="Pottery"
                width={550}
                height={400}
                className="object-cover w-full"
              />
              <Image
              src="/images/vine.svg"
              alt="tree"
              width={280}
              height={250}
              className="object-cover w-full -top-[1.6px]"
              />
            </div>
            {/* Right - Text */}
            <div>
              <div className="relative z-10 flex flex-col w-[534] -mt-[60%] font-bold text-[#404040] -space-y-[10px]" style={{fontFamily:"Jost",fontWeight:600,fontSize:"40px"}}>
                <span>Research & </span>
                <span style={{marginLeft:"16%"}}>Development</span>
                <img src="/images/leave.svg" alt="leave-img" width={90} height={71} style={{ marginLeft:"58%",marginTop:"-14%"}}/>
              </div>
              <p className="mt-4 text-[#282828]  w-[700px]" style={{fontFamily:"Sofia Pro",fontWeight:400,fontSize:"15px"}}>
              Farm Natura offers a community of like-minded families from Hyderabad, where lifestyle is built <br/>basing on Natural Farming with an intent to focus on Health & Happiness. <br/><br/>
              Respct Mother Nature And Land. "We Are Part Of Nature; Therefore, We Must Coexist With The <br/> Other Creatures That Live Among Us." <br/><br/>
              Our passion is to promote the “Agri” based Culture and bringing back the Ecological balanced <br/> Lifestyle with Health and Happiness. We respect the Mother Nature and nourish the land by <br/> restoring its original fertility back into its Natural State for the generations to come.
              </p>
              <a
                href="/brochure.pdf"
                download
                className="mt-6 inline-block border border-green-700 text-green-700 px-8 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-700 hover:text-white"
              >
                Download Brochure
              </a>
              <img src="/images/farm-exp-2.svg" alt="home-img" className="absolute -top-45 right-0 " width={"600px"} />
            </div>
          </div>

          {/* Inspired By Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 flex justify-center items-center space-x-2">
              Inspired By
              <Image
                src="/images/leave.svg"
                alt="Leaf Icon"
                width={113}
                height={30}
              />
            </h2>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 px-6 md:px-12">
            {/* Vinay Ram */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/vinayram.svg"
                alt="Vinay Ram"
                width={362}
                height={362}
                className="rounded-full"
              />
              <p className="mt-4 text-lg font-semibold">Vinay Ram</p>
            </div>
            {/* Subhash Palekar */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/subhashpalekar.svg"
                alt="Subhash Palekar"
                width={362}
                height={362}
                className="rounded-full"
              />
              <p className="mt-4 text-lg font-semibold">Subhash Palekar</p>
            </div>
            {/* Tree Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/tree.svg"
                alt="Tree"
                width={725}
                height={362}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="relative py-16 px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen">
        {/* Background Images */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-cover bg-left z-0"
          style={{ backgroundImage: 'url("/images/left-bg.svg")' }}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-cover bg-right z-0"
          style={{ backgroundImage: 'url("/images/right-bg.svg")' }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Title with Creeper */}
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Vision & Mission{" "}
              <Image
                src="/images/leave.svg"
                alt="Leaf Icon"
                width={30}
                height={30}
              />
            </h2>
            <div className="relative w-[180px] h-[50px] mt-2">
              <Image
                src="/images/creeper.svg"
                alt="Creeper"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Box */}
            <div className="flex flex-col items-center md:items-start ">
              <Image
                src="/images/dewdrop.svg"
                alt="Dewdrop on leaf"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                Creating self-sufficient
              </h3>
              <p className="text-gray-600 text-lg max-w-md text-center md:text-left">
                We are proud to present Planet Green, a stunning new precinct
                that is destined to be the residential and commercial showpiece
                of Nature Friendly.
              </p>
            </div>

            {/* Right Box */}
            <div className="flex flex-col items-center md:items-end">
              <Image
                src="/images/sprout.svg"
                alt="Sprout growing"
                width={300}
                height={200}
                className="mt-10"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                Sustainable communities close to nature
              </h3>
              <p className="text-gray-600 text-lg max-w-md text-center md:text-right">
                We are proud to present Planet Green, a stunning new precinct
                that is destined to be the residential and commercial showpiece
                of Nature Friendly.
              </p>
              <a
                href="/brochure.pdf"
                download
                className="mt-6 inline-block border border-green-600 text-green-600 px-8 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-600 hover:text-white"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Background Image in Corner */}
        <div className="absolute top-[-200] right-0 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] z-0">
          <Image
            src="/images/corner-plant.svg" // Ensure this image exists in /public/images
            alt="Corner Plant"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* About Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Planet Green Infra{" "}
              <Image
                src="/images/leave.svg"
                alt="Leaf Icon"
                width={30}
                height={30}
              />
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              We are proud to present Planet Green, a stunning new precinct that
              is destined to be the residential and commercial showpiece of
              Nature Friendly.
            </p>
            <p className="text-gray-700 text-lg mt-2">
              Grow investments | Farm Natura is located near the Airport,
              Srisailam highway, offering prestigious farmhouses for sale in
              Hyderabad.
            </p>
            <p className="text-gray-700 text-lg mt-2">
              The project features abundant water, naturally nutrient-rich soil,
              and ideal climatic conditions, making it perfect for sustainable
              farming and fruit plantation.
            </p>

            {/* Planet Green Logo */}
            <div className="flex mt-6 space-x-4 items-center">
              <Image
                src="/images/planet-green-logo.svg"
                alt="Planet Green Logo"
                width={333}
                height={120}
              />
              <Image
                src="/images/planet-green-icon.svg"
                alt="Planet Green Icon"
                width={333}
                height={333}
              />
            </div>
          </div>

          {/* Right Side - Image (FIXED) */}
          <div className="relative w-screen h-[300px] md:h-[400px] lg:h-[450px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/farm-field.svg" // Ensure the correct path to the image
              alt="Farm Field"
              width={982} // Adjust for large screens
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <MoveInSection />
      <FarmNaturaFooter />
    </div>
  );
};

export default AboutSection;
