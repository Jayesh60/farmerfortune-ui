import React, { useState } from "react";
import Metamask from "../assets/logo/metamask.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  // handle connection to metamask
  const [connectedToMeta, setConnectedToMeta] = useState(false);

  return (
    <header className="text-gray-600 md:px-16 px-6 w-full">
      <div className="flex justify-between md:p-5 flex-col md:flex-row items-center">
        <div className="flex items-center text-gray-900 mb-4 md:mb-0">
          <Link to={'/'} className="ml-3 text-4xl font-bold">
            B.
          </Link>
        </div>
        <nav className="font-medium flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Explore</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Create Post</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">My Post</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">
            Transactions
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
        </nav>
        {!connectedToMeta ? (
          <div className="flex flex-row-reverse cursor-pointer items-center max-md:pt-5">
            <button
              className={`items-center text-white bg-black border border-black py-1.5 pl-6 px-4 focus:outline-none hover:bg-gray-200 rounded-2xl text-base md:mt-0 font-medium max-md:hidden flex`}
            >
              Connect Metamask
            </button>
            <img
              src={Metamask}
              alt=""
              className="md:-mr-4 max-md:absolute max-md:mr-3 max-md:mt-3 max-md:top-0 max-md:right-0 z-[100] h-10"
            />
          </div>
        ) : (
          // Need to change based on the connected account details
          <div className="flex flex-row cursor-pointer items-center max-md:pt-5">
            <button
              className={`items-center text-white bg-black border border-black py-1.5 pr-6 px-4 focus:outline-none hover:bg-gray-200 rounded-2xl text-base md:mt-0 font-medium max-md:hidden flex`}
            >
              Connected
            </button>
            <img
              src={Metamask}
              alt=""
              className="md:-ml-4 max-md:absolute max-md:mr-3 max-md:mt-3 max-md:top-0 max-md:right-0 z-[100] h-10"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
