import React from "react";
import Transactions from "../transactions/Transactions";
import tomato from "../../assets/common/tomato.webp";

const Details = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl text-center md:text-[75px] md:leading-snug font-bold py-10">
        PRODUCT DETAILS
      </div>
      <div className="flex md:flex-row flex-col gap-20 justify-center w-full px-6 md:px-20 py-10">
        <div className="md:w-1/2">
          <img src={tomato} alt="" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 flex-col flex gap-4 justify-center items-center">
          <h1 className="text-5xl font-bold text-black">Tomatoes</h1>
          <p className="w-[80%] text-[#0000008C]">
            Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES
            ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO
            DAY LIFE. nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH
            ARE ESSENTIAL FOR DAY TO DAY LIFE.
          </p>
          <p className="text-black font-bold text-2xl">
            <span>Quantity </span>
            <span>100kg</span>
          </p>
          <p className="text-black font-bold text-2xl">
            <span>Farmer </span>
            <span>Ram Patil</span>
          </p>
          <p className="text-black font-bold text-2xl pb-10">
            <span>Price </span>
            <span>0.55 ETH</span>
          </p>
          <button className="bg-green w-[70%] text-2xl font-bold px-8 rounded-xl py-4 text-white">
            Edit & Sell
          </button>
        </div>
      </div>

      <Transactions />
    </section>
  );
};

export default Details;
