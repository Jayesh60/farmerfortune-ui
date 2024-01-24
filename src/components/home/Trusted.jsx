import React from "react";
import TrustedImg from "../../assets/banner/trusted.webp";

const Trusted = () => {
  return (
    <div className="bg-black py-20 md:h-[120vh] w-full flex max-md:gap-10 md:flex-row flex-col justify-center items-center max-md:px-6">
      <div className="h-full md:w-1/2 flex justify-center">
        <img src={TrustedImg} alt="" className="h-full md:rounded-3xl" />
      </div>
      <div className="h-full text-white md:w-1/2 flex flex-col gap-10">
        <h1 className="text-6xl font-bold">
          Trusted & <br /> transparent
        </h1>
        <div className="flex md:w-[75%] flex-col gap-6">
          <p>
            <span className="text-3xl font-bold font-serif">
              Smart Contract </span>
            <span className="text-text-gray font-bold text-xl">
              provide transparent, tamper-resistant, and automated execution of
              predefined agreements.
            </span>
          </p>
          <p>
            <span className="text-3xl font-bold font-serif">Transparency </span>
            <span className="text-text-gray font-bold text-xl">
              ensures a verifiable and immutable record of transactions,
              fostering trust.
            </span>
          </p>
          <p>
            <span className="text-3xl font-bold font-serif">Supply Chain </span>
            <span className="text-text-gray font-bold text-xl">
              security by providing an immutable and transparent ledger.
            </span>
          </p>
          <p>
            <span className="text-3xl font-bold font-serif">Market Place </span>
            <span className="text-text-gray font-bold text-xl">
              provide marketplace ensures secure, transparent, and decentralized
              transactions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
