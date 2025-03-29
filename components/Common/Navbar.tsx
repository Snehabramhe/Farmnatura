import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-primary-bg overflow-x-hidden">
      <Image
        src="/images/logo.png"
        width={213}
        height={114}
        alt="logo"
        className="w-[150px] h-[100px] lg:w-[213px] lg:h-[114px] object-contain"
      />
      <div className="flex flex-row items-center"></div>
    </div>
  );
};

export default Navbar;
