import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authimg from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:flex justify-between items-center">
        <div className="flex-1">
          <Logo />
          <Outlet></Outlet>
        </div>
        <div className="flex-1 flex items-center justify-center  min-h-screen bg-[#fafdf0]">
          <img src={authimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
