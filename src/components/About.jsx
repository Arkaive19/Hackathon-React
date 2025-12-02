import React from "react";
import Scroll from "./Scroll.jsx";
import Schedule from "./Schedule.jsx";
import Autoplay from "./Autoplay.jsx";
import Image1 from "../assets/1.webp";
import Image2 from "../assets/2.webp";
import Image3 from "../assets/3.webp";
import Image4 from "../assets/4.webp";
import Image5 from "../assets/5.webp";

const About = () => {
  const slides = [Image1, Image2, Image3, Image4, Image5];
  return (
    <>
      <Scroll id="about" className="content-section about-section">
        <div id="about-grid">
          <div className="schedule scroll-el">
            <Schedule></Schedule>
          </div>
          <div className="about-box scroll-el s00">
            <h1>About</h1>
            <p>
              Built for grades 9-12, Deerwalk Hackathon 2025 brings teams of two
              to four together for a fast one-day sprint from idea to prototype,
              boosted by mentors and workshops. Students collaborate, gain real
              skills, network widely, and connect with industry pros for future
              growth.
            </p>
          </div>

          <div className="map-box scroll-el s01">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.165197530399!2d85.33940358431838!3d27.712185280101828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970d2e43e4b%3A0x946fac63019d2903!2sDeerwalk%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1762053846507!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{
                border: "2px solid #ccc",
                filter: "invert(90%) grayscale(0) hue-rotate(180deg)",
                borderRadius: "1rem",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="centered-flex info-box scroll-el s02">
            <div className="info-box-1">
              <h1>Registration Is FREE!</h1>
            </div>
            <div className="info-box-2 centered-flex">
              <h3>Stickers, and freebies are included </h3>
              <h2>with paid merchandise as well!</h2>
            </div>
            <div className="info-box-3">
              <h4>Hosted By</h4>
              <h3>Deerwalk Sifal School</h3>
            </div>
          </div>
          <div className="organisers-box centered-flex scroll-el s03">
            <div className="marq centered-flex">
              <h1 className="gradient-border">Meet the Organisers</h1>
              <button className="btn-alt">Click Here!</button>
            </div>
          </div>
          <div className="autoplay-box scroll-el s04">
            <Autoplay images={slides} interval={3000} objectFit="cover" />
          </div>
        </div>
      </Scroll>
    </>
  );
};

export default About;
