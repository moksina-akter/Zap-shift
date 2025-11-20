import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex  items-end">
      <img src={logo} className="" alt="" />
      <h3 className="text-3xl -ms-4 font-bold">zapShift</h3>
    </div>
  );
};

export default Logo;
