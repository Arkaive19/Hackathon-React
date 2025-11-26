import React from "react";
import Carousel from "./Carousel.jsx";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
const Organisers = () => {
  return (
    <>
      <Navigation />
      <div className="centered-flex organisers-main content-main">
        <span className="head-title">
          <h1>Meet The Organisers!</h1>
        </span>
        <span className="content-title centered-flex">
          <h2>Technical Team</h2>
          <Carousel amount={8} imageSet={["wsp", "hi"]}></Carousel>
          <h2>Technical Team</h2>
          <Carousel amount={8} imageSet={["wsp", "hi"]}></Carousel>
          <h2>Technical Team</h2>
          <Carousel amount={8} imageSet={["wsp", "hi"]}></Carousel>
        </span>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Organisers;
