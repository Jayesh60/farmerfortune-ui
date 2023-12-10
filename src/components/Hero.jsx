import React from "react";
import banner1 from "../assets/banner/banner1.png"

const Hero = () => {
  return (
    <div className="px-6 md:px-16 flex flex-col justify-center items-center text-center">
      <div className="text-3xl md:text-[75px] md:leading-snug font-bold">
        BLOCKCHAIN FOR FARMER EMPOWERMENT
      </div>
      <div className="border-b-[2px] border-black text-xl pb-4">
        Revolutionizing <span className="font-bold"> Agriculture </span> Through{" "}
        <span className="font-bold"> Blockchain </span> Technology: Sowing the
        Seeds of Sustainable <span className="font-bold">Farming</span> Futures.
      </div>
      <div className="py-5">
        <img src={banner1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
