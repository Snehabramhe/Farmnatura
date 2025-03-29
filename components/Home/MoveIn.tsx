import Image from "next/image";
import { Button } from "../ui/button";

const MoveIn = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden bg-white">
      <Image
        src="/svg/move-in-left.svg"
        width={200}
        height={200}
        alt="move-in-left"
        className="w-[800px] h-[800px] object-cover absolute left-0 top-0"
      />
      <Image
        src="/svg/move-in-clouds.svg"
        width={200}
        height={200}
        alt="move-in-clouds"
        className="w-[450px] h-[300px] object-cover absolute left-[30%] top-0"
      />
      <Image
        src="/svg/move-in-right.svg"
        width={200}
        height={200}
        alt="move-in-right"
        className="w-[700px] h-[700px] object-contain absolute -right-56 top-10"
      />
      <div className="px-[100px] pt-[300px]">
        <div className="w-full h-[500px] bg-[url(/svg/move-in-container.svg)] bg-cover bg-no-repeat bg-center relative pt-[62px]">
          <div className="ml-64">
            <p className="font-jost text-[20px] lg:text-[46px] text-white">
              Ready To Move In Are You?
            </p>
            <p className="font-jost text-[16px] lg:text-[22px] text-white mt-5">
              Check out the new farms for sale in Hyderabad by Farm Natura.
            </p>
          </div>
          <Button className="bg-white mt-40 ml-64 w-[240px]">
            <p className="font-poppins text-black font-medium">Get in Touch</p>
          </Button>
          <Image
            src="/svg/move-in-ppl.svg"
            width={200}
            height={200}
            alt="move-in"
            className="w-[600px] h-[450px] absolute right-32 -top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default MoveIn;
