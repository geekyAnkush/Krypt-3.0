import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer">
    <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-wrap items-center flex-1 w-full mt-5 justify-evenly sm:mt-0">
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Market
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Exchange
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Tutorials
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-5">
      <p className="text-sm text-center text-white">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="mt-2 text-sm font-medium text-center text-white">
        000.kumarankush@gmail.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-xs text-left text-white">000.kumarankush@gmail.com</p>
      <p className="text-xs text-right text-white">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
