import React from "react";
import Logo from "../../Components/Logo";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer text-white bg-black footer-horizontal footer-center  p-10">
      <aside>
        <Logo />
        <p className="text-lg max-w-4xl p-4 text-white/70">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <ul className="md:flex gap-5 border-y p-6 text-white/70 items-center justify-center border-dashed w-full  border-blue-900 text-lg">
          <li>
            <NavLink to="/">Services</NavLink>
          </li>
          <li>
            <NavLink to="/coverage">Coverage</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-2xl gap-4">
          <TbBrandLinkedinFilled />
          <FaXTwitter />
          <FaFacebook className="" />
          <IoLogoYoutube />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
