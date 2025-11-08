import React from "react";
import Scroll from "./Scroll";
import Autoplay from "./Autoplay.jsx";
import Image1 from "../assets/Image1.png";
import { svg_d } from "./handlers/svg.js";

const Prize = () => {
  const slides = [Image1, Image1, Image1];
  const svg_default = (path) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        {path}
      </svg>
    );
  };
  const svgBank = (name, color, type = "solid") => {
    if (type === "solid") {
      return svg_default(<path fill={color} d={svg_d[name]} />);
    } else if (type === "outline") {
      return svg_default(
        <path fill="none" stroke={color} strokeWidth="2" d={svg_d[name]} />
      );
    } else {
      return null;
    }
  };

  return (
    <Scroll className="centered-flex content-section" id="prizes">
      <div id="prize-grid">
        <div id="prize-div1">
          <Autoplay images={slides} interval={3000} />
        </div>
        <div id="prize-div2" className="centered-flex"></div>
        <div id="prize-div3" className="centered-flex"></div>
        <div id="prize-div4" className="centered-flex">
          <span className="prize-gift-icon">
            {svgBank("gifts", "#ffffff", "solid")}
          </span>
          <span className="prize-gift-text">
           Stickers, Freebies <br id="break2" /> and Swags <br id="break1" /> for everyone!
          </span>
        </div>
      </div>
    </Scroll>
  );
};

export default Prize;
