import React from "react";
import Scroll from "./Scroll.jsx";
import Schedule from "./Schedule.jsx";
import Carousel from "./Carousel.jsx";

const About = () => {
  return (
    <>
      <Scroll id="about" className="content-section about-section">
        <div id="about-grid">
          <div id="about-section-1">
            <Schedule />
          </div>
          <div id="about-section-2">
            <h1>Event Setup</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              laudantium maiores corrupti vitae. Delectus, non. Ut pariatur
              ducimus optio architecto labore est odit, rem molestias vel
              dolorem ad sequi itaque! Hackwalk is organized by the class of
              2027 & 2026 of DSS at Deerwalk Sifal School. The STEM club itaque!
              Hackwalk is organized by the class of 2027 & 2026 of DSS at
              Deerwalk Sifal School. The STEM club is responsible for planning
              and organizing all the technical and logistic infrastructure for
              this exciting project! dolorem ad se
            </p>
          </div>
          <div id="about-section-3">
            <h1>Event Setup</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              laudantium maiores corrupti vitae. Drgani asd as d sad s asdad zed
              by the class of 2027S at Deerwalk Sifal School. The STEM club
              itaque! Hackwalk is organized by the class of 2027 & 2026 of DSS
              at Deerwalk Sifal School. The Sponsible for planning and
              organizing all the technical and logistic infrastructure for this
              exciting project! dolorem ad se
            </p>
          </div>
          <div id="about-section-4">
            <h1> What To Expect?</h1>
            <p>
              When you register, you'll get FREE access to delicious food, fun
              stickers, exclusive swag and more!; It's our way of saying thank
              you for participating within the DSE community!
            </p>
          </div>
          <div id="about-section-5">
            <h1> What is DSE?</h1>
            <p>
              Hackwalk is a 48-hour hackathon hosted at Deerwalk Sifal School
              from November 28–29. It brings together students, tech enthusiasts
              and innovators to brainstorm, design, and build impactful tech.
            </p>
          </div>
          <div id="about-section-6">
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
          <div id="about-section-7">
            <Schedule />
          </div>
        </div>
      </Scroll>
    </>
  );
};

export default About;
