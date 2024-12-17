import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div className="flex sticky w-[100%] justify-around h-[80px] md:h-[120px] lg:h-[150px]">
      <Link className="flex p-2 gap-4 lg:p-4 lg:gap-6 w-[16%]" to={"/"}>
        <div className="flex items-center">
          <img height={70} width={70} src="/images/youtube.png" alt="Logo" />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-2">
          <p className="">प्रकाश दुरा</p>
          <p className="">Prakash Dura</p>
        </div>
      </Link>

        <div className="flex flex-col p-4 text-right gap-6 justify-center ">
          <TopNavbar />
        </div>
      </div>
  );
};

export default Navbar;