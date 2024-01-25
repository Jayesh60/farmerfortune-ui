import React from "react";
import Card from "../common/Card";
import tomato from "../../assets/common/tomato.webp";
import Search from "../../assets/svg/search-icon.svg";

const Explore = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10">
        EXPLORE
      </div>

      <div className="w-full flex justify-center items-center gap-2 md:gap-6 px-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here..."
          className="md:w-2/5 w-[80%] px-4 md:px-8 py-3.5 rounded-lg text-sm bg-bg-gray outline-none"
        />
        {/* <input type="text" name="" id="" placeholder="Search by Vegetable" className="md:w-1/4 w-full px-8 py-3.5 rounded-lg text-sm bg-bg-gray outline-none" /> */}
        <button>
          <img
            src={Search}
            alt=""
            className="px-4 py-3.5 rounded-lg bg-bg-gray"
          />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 py-10">
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
        <Card
          img={tomato}
          title={"Tomato"}
          desc={
            "Fresh harvested tomatoes from my farm which is in nagpur.TOMATOES ARE VEY RICH IN FIBER AND VITAMINS WHICH ARE ESSENTIAL FOR DAY TO DAY LIFE."
          }
          owner={"Ram Patil"}
          quantity={"100kg"}
          price={"0.55Eth"}
        />
      </div>
    </section>
  );
};

export default Explore;
