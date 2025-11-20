import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Brands from "./Brands";
import Features from "./Features";
import Merchant from "./Merchant";
import Reviews from "./Reviews";
const reviesPromise = fetch("/public/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <Brands />
      <Features />
      <Merchant />
      <Reviews reviesPromise={reviesPromise} />
    </div>
  );
};

export default Home;
