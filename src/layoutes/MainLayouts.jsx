import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayouts = () => {
  return (
    <div className=" bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
