import React from "react";
import banner1 from "../../assets/banner/banner1.webp";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="px-6 md:px-16 flex flex-col justify-center items-center text-center max-md:pt-10 h-full py-10">
      <div className="text-5xl md:text-[5.8rem] md:leading-snug font-bold pb-12">
        BLOCKCHAIN <br className="md:hidden" /> FOR
        <br className="max-md:hidden" /> FARMER EMPOWERMENT
      </div>
      <div className="w-full max-md:pb-10">
        <Marquee
          loop={0}
          speed={40}
          className="border-b-[2px] border-black md:text-2xl pb-4 w-full"
        >
          <Text/>
          <Text/>
        </Marquee>
      </div>

      <div className="py-5 flex justify-center items-center w-full">
        <img src={banner1} alt="" className="relative w-full" />
        <p className="absolute text-xl font-bold px-8 py-3  md:px-10 md:py-4 bg-white rounded-xl cursor-pointer">
          Register Now
        </p>
      </div>
    </div>
  );
};

export default Hero;

const Text = () => {
  return (
    <div>
      <span>Revolutionizing</span>
      <span className="font-bold"> Agriculture </span>
      <span>Through </span>
      <span className="font-bold"> Blockchain </span>
      <span>Technology: Sowing the Seeds of Sustainable </span>
      <span className="font-bold">Farming </span>
      <span>Futures.</span>
      <span>Revolutionizing </span>
      <span className="font-bold"> Agriculture </span>
      <span>Through </span>
      <span className="font-bold"> Blockchain </span>
      <span>Technology: Sowing the Seeds of Sustainable </span>
      <span className="font-bold">Farming </span>
      <span>Futures.</span>
    </div>
  );
};
