import React from "react";
import { Link } from "react-router";
import AboutTabs from "./AboutTabs";
// import { Tab, Tabs } from "react-tabs";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100">
        {/* Header */}
        <h1 className="text-4xl font-bold text-secondary mb-2">About Us</h1>
        <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed max-w-3xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Tabs */}

        {/* Content */}
        <AboutTabs />
      </div>
    </div>
  );
};

export default AboutUs;
