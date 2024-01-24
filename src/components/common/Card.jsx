import React from "react";

const Card = ({ img, title, quantity, desc, owner, price }) => {
  return (
    <div className="flex flex-col shadow-2xl">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="px-2 py-4">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <p>{title}</p>
            <p>Quantity : {quantity}</p>
          </div>
          <div>{desc}</div>
          <div className="flex justify-between">
            <p>
              <span>By </span> <span>{owner}</span>
            </p>
            <p>{price}</p>
          </div>
          <div className="flex justify-between">
            <p>Select Quantity</p>
            <p>buttons</p>
          </div>
        </div>
        <div>Buy Now</div>
      </div>
    </div>
  );
};

export default Card;
