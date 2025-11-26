import React from "react";
import verticalLogo from "../assets/verticalLogo.webp";
const Hero = () => {
  return (
    <div
      className="content-section hero-section centered-flex blur-in"
      id="home"
    >
      <div className="card centered-flex fade-down-in s1">
        <h1>Mangsir 20-21</h1>
        <img src={verticalLogo} className="hero-img" alt="" />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSclTyGnwDLi_2dRVPwAueW8CFfFq_X7ca8ipHZFiYVu6txUew/viewform"
          target="_blank"
        >
          <button className="btn-alt">Apply Now!</button>
        </a>
      </div>
    </div>
  );
};
export default Hero;
