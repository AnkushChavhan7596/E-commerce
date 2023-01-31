import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import TopCategories from "../Components/TopCategories";
import TopDiscounts from "../Components/TopDiscounts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <TopCategories />
      <TopDiscounts />
      <Footer />
    </div>
  );
};

export default Home;
