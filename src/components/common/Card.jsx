import React, { useState } from "react";
import QuantityM from "../../assets/svg/minus.svg";
import QuantityP from "../../assets/svg/plus.svg";
import Bag from "../../assets/svg/shopping-bag.svg"

const Card = ({ img, title, quantity, desc, owner, price }) => {
  const [quantityState, setQuantityState] = useState(0);

  return (
    <div className="flex text-[#000000A8] border border-[#00000018] flex-col shadow-2xl rounded-lg w-[90%] md:w-[28vw]">
      <div>
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="pb-3">
        <div className="flex flex-col">
          <div className="flex border-b border-[#00000018] py-3 px-4 items-center justify-between">
            <p className="font-bold text-xl text-black">{title}</p>
            <p>Quantity : {quantity}</p>
          </div>
          <div className="text-sm px-4 border-b border-[#00000018] py-3 text-text-gray capitalize">
            {desc}
          </div>
          <div className="flex px-4 py-3 items-center border-b border-[#00000018] justify-between">
            <p>
              <span>By </span> <span className="font-bold text-black">{owner}</span>
            </p>
            <p className="font-bold text-lg text-black">{price}</p>
          </div>
          <div className="flex px-4 justify-between items-center py-3 border-b border-[#00000018]">
            <p className="text-md text-black font-bold">Select Quantity</p>
            <div className="flex justify-between items-center w-[30%]">
              <img
                src={QuantityM}
                alt=""
                onClick={() =>
                  setQuantityState((p) => {
                    if (p > 1) {
                      return p - 1;
                    } else {
                      return 0;
                    }
                  })
                }
                className="h-8 cursor-pointer"
              />
              <p className="font-semibold text-black">{quantityState}</p>
              <img
                src={QuantityP}
                alt=""
                onClick={() => setQuantityState((p) => p + 1)}
                className="h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-3">
          <div className="px-4 cursor-pointer py-2 bg-green text-white w-[80%] rounded-lg flex gap-2 items-center justify-center font-bold">
            <img src={Bag} alt="" />
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
