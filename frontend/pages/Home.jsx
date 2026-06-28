import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import HealthEssentials from "../components/HealthEssentials";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <HealthEssentials />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
