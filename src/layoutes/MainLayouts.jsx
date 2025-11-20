import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#F5F7FA]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
