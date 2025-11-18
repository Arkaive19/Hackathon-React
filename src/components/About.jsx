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
  const slides = [Image1, Image2, Image3];
  return (
    <>
      <Scroll id="about" className="content-section about-section">
        <div id="about-grid">
          <div id="about-section-1" className="scroll-el">
            <Schedule />
          </div>
          <div id="about-section-2" className="scroll-el">
            <div className="about-cnt-break">
              <h1>Meet The Organizers!</h1>
              <p>
                The responsibility of hosting the event is shared by all members
                of the STEM Club with some assistance of the
              </p>
              <p>
                <span className="school-name">
                  Deerwalk Educational Foundation
                </span>
                . From planning to execution, each member has played a key role
                in making the event a success.
              </p>
            </div>
            <button className="btn-alt">Meet The Organisers!</button>
          </div>
          <div id="about-section-3" className="scroll-el">
            <h1>About the Event</h1>
            <p>
              Built exclusively for students in grades 9 through 12, DeerHack
              School Edition 2025 invites teams of two to four innovators to
              tackle real-world challenges in just one power-packed day.
            </p>
            <p>
              Beyond the code, participants gain hands-on experience,
              collaborate with peers from across the valley, and unlock exposure
              to industry professionals invested in their growth.
            </p>
          </div>

          <div id="about-section-4" className="scroll-el">
            <h1> Hosted by D.S.S</h1>
            <p>
              Powered by
              <span className="school-name">
                {" "}
                Deerwalk Educational Foundation
              </span>
              , our campus bridges classroom learning and real-world application
              through tech-driven initiatives, fostering curiosity and a culture
              of creation.
            </p>
          </div>
          <div id="about-section-5" className="scroll-el">
            <h1>Registration Inquiry?</h1>
            <p>
              Registration for
              <span className="event-name"> Deerhack School Edition</span> is
              <span className="free"> FREE!</span>, with free stickers swags and
              food to all participants and paid merchandise are also available!
            </p>
          </div>
          <div id="about-section-6" className="scroll-el">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.165197530399!2d85.33940358431838!3d27.712185280101828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970d2e43e4b%3A0x946fac63019d2903!2sDeerwalk%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1762053846507!5m2!1sen!2snp"
              width="100%"
              height="375"
              style={{ border: "2px solid #ccc", borderRadius: "1rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div id="about-section-7" className="scroll-el">
            <Autoplay images={slides} interval={3000} />
          </div>
        </div>
      </Scroll>
    </>
  );
};

export default About;
