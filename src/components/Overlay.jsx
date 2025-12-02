import React, { useEffect, useState } from "react";

import logo from "../assets/hexa-logo.webp";

export const Overlay = ({ onFinish }) => {
  const [visible, setVisible] = useState(false); // controls fade-in
  const [hexAnimated, setHexAnimated] = useState(false); // draws hex
  const [fadeOut, setFadeOut] = useState(false); // fade-out
  useEffect(() => {
    const fadeInTimer = setTimeout(() => setVisible(true), 50);
    const hexTimer = setTimeout(() => setHexAnimated(true), 600);
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 1400);
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(hexTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`overlay ${visible ? "visible" : ""} ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="hexagon-logo-wrapper">
        <svg
          className="hex-border"
          viewBox="0 0 160 160"
          width="160"
          height="160"
        >
          <polygon
            points="80,150 21,115 21,45 80,10 139,45 139,115 80,150"
            style={{
              strokeDashoffset: hexAnimated ? 0 : 412,

              strokeDasharray: 420,

              stroke: "var(--accent)",

              strokeWidth: 4,

              fill: "none",

              transition: "stroke-dashoffset 1.2s cubic-bezier(0.77,0,0.175,1)",
            }}
          />
        </svg>

        <img src={logo} alt="Logo" className="landing-logo" />
      </div>
    </div>
  );
};

export default Overlay;
