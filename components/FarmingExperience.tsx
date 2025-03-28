import React from "react";

const FarmingExperience: React.FC = () => {
  return (
    <>
      <div className="relative flex mt-15">
        {/* Left Content Section */}
        <div
          className="w-full lg:w-2/3 px-6 md:px-12 lg:px-20 flex flex-col z-10"
          style={{ fontFamily: "Jost" }}
        >
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-black-600 flex items-center">
              The Farming Experience
              <img src="/images/leave.svg" alt="leaf" width={90} />
            </h1>
          </div>

          {/* Project Description */}
          <div
            className="mb-12 max-w-4xl text-gray-700"
            style={{ fontSize: "16px" }}
          >
            <p>
              We are proud to present Planet Green, a stunning new project that
              is destined to be a residential and commercial showcase of Nature
              Friendly.
            </p>
            <br />
            <p>
              Green Investment Farm Nature is located near the Airport.
              Srisailam highway is a prestigious Farmhouse. For Sale in
              Hyderabad concept. It is located Near Maheswaram. The project has
              been set up at a land rich in resources like abundant water,
              naturally, nutrient-rich soil, well-planned climatic conditions,
              now access to a farming. This sustainable Farming & varieties of
              fruit plantation.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-12">
            {[
              {
                icon: "/images/flower.svg",
                title: "Farm Land With in HMDA Limits",
              },
              {
                icon: "/images/sunflower.svg",
                title: "Serene Natural Contours of Land",
              },
              {
                icon: "/images/yard-work.svg",
                title: "Rich Black Cotton Soil Near to Village",
              },
              {
                icon: "/images/farmer.svg",
                title: "Practicing Farming with Indigenous Seeds",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 w-[65%]"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt="not-found"
                    width="70%"
                    height="70%"
                  />
                </div>
                <p className="text-sm text-center text-gray-700">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 bg-white relative">
          <img
            src="/images/farm-exp-2.svg"
            alt="Farm Illustration"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Farm Image */}
      <div
        className="w-[90%] h-96 md:h-[500px] bg-cover bg-center rounded-lg shadow-lg mx-auto mb-20 mt-0"
        style={{
          backgroundImage: 'url("/images/farming-exp.svg")',
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
};

export default FarmingExperience;
