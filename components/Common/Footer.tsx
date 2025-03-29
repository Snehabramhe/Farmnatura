import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="border-t border-t-[#243355] mx-[160px]">
        <div className="flex flex-row items-center justify-between mt-[90px]">
          <div>
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-[175px] h-[86px]"
            />
            <p className="text-[14px] lg:text-[18px] mt-12">
              Come, embrace the privilege to experience life from every other
              <br />
              angle. Welcome to the highest of high living.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center space-x-5">
              <Image
                src="/svg/location.svg"
                width={200}
                height={200}
                alt="location"
                className="w-5 h-7"
              />
              <p className="text-[14px] lg:text-[20px]">
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </p>
            </div>
            <div className="mt-8 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-5">
                <Image
                  src="/svg/call.svg"
                  width={200}
                  height={200}
                  alt="call"
                  className="w-5 h-7"
                />
                <p className="text-[14px] lg:text-[20px]">(123) 456-7890</p>
              </div>
              <div className="flex flex-row items-center space-x-5">
                <Image
                  src="/svg/fax.svg"
                  width={200}
                  height={200}
                  alt="fax"
                  className="w-5 h-7"
                />
                <p className="text-[14px] lg:text-[20px]">(123) 456-7890</p>
              </div>
            </div>
            <div className="mt-14 flex flex-row">
              <p className="text-[14px] lg:text-[20px] text-[#0A142F]">
                Social Media
              </p>
              <div className="ml-10 flex flex-row items-center justify-between w-[70%]">
                <Image
                  src="/svg/facebook.svg"
                  width={200}
                  height={200}
                  alt="facebook"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
                <Image
                  src="/svg/Twitter.svg"
                  width={200}
                  height={200}
                  alt="twitter"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
                <Image
                  src="/svg/LinkedIn.svg"
                  width={200}
                  height={200}
                  alt="LinkedIn"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
                <Image
                  src="/svg/Youtube.svg"
                  width={200}
                  height={200}
                  alt="Youtube"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
                <Image
                  src="/svg/Instagram.svg"
                  width={200}
                  height={200}
                  alt="Instagram"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
                <Image
                  src="/svg/GooglePlus.svg"
                  width={200}
                  height={200}
                  alt="GooglePlus"
                  className="w-[35px] h-[35px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
