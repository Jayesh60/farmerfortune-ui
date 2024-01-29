import React, { useState } from "react";
import Transactions from "../transactions/Transactions";
import tomato from "../../assets/common/tomato.webp";

const Details = () => {
  // State to handle whether the price is editable or not
  const [isEditing, setIsEditing] = useState(false);

  // State to handle the current price
  const [price, setPrice] = useState(0.55); // Assuming the initial price is 0.55 ETH

  // Handle the editing state
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle price change
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle saving the new price
  const handleSaveClick = () => {
    setIsEditing(false);
    // Here, you would also handle saving the new price to the database or backend
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl text-center md:text-[75px] md:leading-snug font-bold py-10">
        PRODUCT DETAILS
      </div>
      <div className="flex md:flex-row flex-col gap-20 justify-center w-full px-6 md:px-20 py-10">
        <div className="md:w-1/2">
          <img
            src={tomato}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex-col flex gap-2 md:gap-4 justify-center max-md:items-center">
          <h1 className="text-5xl font-bold text-black">Tomatoes</h1>
          <p className="w-[80%] text-[#0000008C] max-md:text-center">
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

          {isEditing ? (
            <p className="text-black flex items-center justify-center w-1/2 md:w-fit font-bold text-2xl pb-10">
              <span className="pr-2 md:pr-4">Price </span>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                autoFocus
                className="outline-1 py-2 w-full rounded-md remove-arrow"
              />
            </p>
          ) : (
            <p className="text-black font-bold py-2 text-2xl pb-10">
              <span>Price </span>
              <span className="">{price} ETH</span>
            </p>
          )}
          {isEditing ? (
            <button onClick={handleSaveClick} className="px-8 py-4 bg-green rounded-lg text-white font-bold text-xl">Save</button>
          ) : (
            <button onClick={handleEditClick} className="px-8 py-4 bg-green rounded-lg text-white font-bold text-xl">Edit & Sell</button>
          )}
        </div>
      </div>

      <Transactions />
    </section>
  );
};

export default Details;
