import React from "react";
import left from "../../assets/svg/left.svg";

const Transactions = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10 uppercase">
        Transactions
      </div>

      <div className="md:px-20 px-6 justify-center flex max-md:flex-col flex-wrap md:gap-x-12 md:gap-y-20 gap-10 w-full h-full py-20">
        <TransactionsCard
          date={"21 September 2023"}
          amount={"0.025 ETH"}
          from={"Keshav Pal (D)"}
          to={"Ram Patil (F)"}
        />
        <TransactionsCard
          date={"21 September 2023"}
          amount={"0.025 ETH"}
          from={"Keshav Pal (D)"}
          to={"Ram Patil (F)"}
        />
        <TransactionsCard
          date={"21 September 2023"}
          amount={"0.025 ETH"}
          from={"Keshav Pal (D)"}
          to={"Ram Patil (F)"}
        />
        <TransactionsCard
          date={"21 September 2023"}
          amount={"0.025 ETH"}
          from={"Keshav Pal (D)"}
          to={"Ram Patil (F)"}
        />
      </div>
    </section>
  );
};

export default Transactions;

const TransactionsCard = ({ date, amount, from, to }) => {
  return (
    <div className="md:w-[40%] bg-white shadow-xl rounded-lg h-full">
      <div className="px-6 flex justify-end w-full font-semibold">
        on {date}
      </div>
      <div className="px-6 py-6">
        <p>Total Amount</p>
        <p className="font-bold text-5xl">{amount}</p>
      </div>
      <div className="flex px-6 py-4 items-center bg-[#E4FFDA5C] justify-between">
        <p className="font-semibold">
          <span className="font-normal text-[#00000085]">from </span> {from}
        </p>
        <p>
          <img src={left} alt="" />
        </p>
        <p className="font-semibold">
          <span className="font-normal text-[#00000085]">to </span> {to}
        </p>
      </div>
    </div>
  );
};
