import React from "react";
import Carousel from "./Carousel.jsx";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
const Organisers = () => {
  return (
    <>
      <Navigation />
      <div className="centered-flex organisers-main content-main">
        <span className="head-title fade-up-in s6">
          <h1>Meet The Organisers!</h1>
        </span>
        <span className="content-title centered-flex">
          <h2 className="fade-side-in s7">Technical Team</h2>
          <Carousel
            className="carousel-wrapper fade-side-in s7"
            amount={8}
            imageSet={["wsp", "hi"]}
          ></Carousel>
          <h2 className="fade-side-in s8">Technical Team</h2>
          <Carousel
            className="carousel-wrapper fade-side-in s7"
            amount={8}
            imageSet={["wsp", "hi"]}
          ></Carousel>
          <h2 className="fade-side-in s9">Technical Team</h2>
          <Carousel
            className="carousel-wrapper fade-side-in s7"
            amount={8}
            imageSet={["wsp", "hi"]}
          ></Carousel>
        </span>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Organisers;
