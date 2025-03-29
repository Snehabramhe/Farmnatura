const QuickLinks = () => {
  return (
    <div className="pt-[120px] bg-white">
      <div className="border-t border-t-[#7BB9FC] mx-[160px] py-[35px]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-[60%]">
            <p className="text-[16px] lg:text-[20px] cursor-pointer">
              ABOUT US
            </p>
            <p className="text-[16px] lg:text-[20px] cursor-pointer">
              CONTACT US
            </p>
            <p className="text-[16px] lg:text-[20px] cursor-pointer">HELP</p>
            <p className="text-[16px] lg:text-[20px] cursor-pointer">
              PRIVACY POLICY
            </p>
            <p className="text-[16px] lg:text-[20px] cursor-pointer">
              DISCLAIMER
            </p>
          </div>
          <p className="text-[16px] lg:text-[20px]">
            Copyright © 2024 • Farmnatura
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
