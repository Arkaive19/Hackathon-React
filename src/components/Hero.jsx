import React from "react";
import verticalLogo from "../assets/verticalLogo.png";
const Hero = () => {
  return (
    <div className="hero-section centered-flex">
      <div className="card centered-flex">
        <h1>Mangsir 21-22</h1>
        <img src={verticalLogo} className="hero-img" alt="" />
        <button className="btn-alt">Apply Now!</button>
      </div>
    </div>
  );
};
export default Hero;
