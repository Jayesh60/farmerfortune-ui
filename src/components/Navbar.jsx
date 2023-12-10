import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font md:px-16 px-6 w-full ">
      <div className="flex justify-between md:p-5 flex-col md:flex-row items-center">
        <div className="flex items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">B.</span>
        </div>
        <div className="flex items-center relative">
            <svg className="absolute ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"/><path fill="#9f9f9f" d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2Zm0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13Zm0 1a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"/></g></svg>
            <input type="text" placeholder="Search Posts" className="pl-10 outline-none bg-[#d2d2d2] px-4 py-2 rounded-xl md:min-w-[40vw]"/>
        </div>
        <nav className="font-medium flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Explore</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Create Post</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">My Post</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
        </nav>
        <button className="inline-flex items-center text-black bg-gray-100 border border-black py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-medium">
          Connect Metamask
        </button>
      </div>
    </header>
  );
};

export default Navbar;
