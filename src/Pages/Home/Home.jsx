import React from "react";
import { NavigationBar } from "../../Components/Navbar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import MoviesRecomendation from "../../Section/Home/Shows/Shows";
import HeroSection from "../../Section/Home/Hero/Hero";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <MoviesRecomendation />
      <Footer />
    </>
  );
};

export default Home;
