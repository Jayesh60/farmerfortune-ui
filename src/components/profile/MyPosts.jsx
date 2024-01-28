import React from "react";
import Card from "../common/Card";
import tomato from "../../assets/common/tomato.webp";

const MyPosts = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10 uppercase">
        My Posts
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
          myposts
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
          myposts
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
          myposts
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
          myposts
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
          myposts
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
          myposts
        />
      </div>
    </section>
  );
};

export default MyPosts;
