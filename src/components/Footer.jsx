import React from "react";
import Scroll from "./Scroll.jsx";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import sifalLogo from "../assets/sifalSchool.webp";
import hackathonLogo from "../assets/hackathonLogo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const eventName = "Deerwalk Sifal School";

  return (
    <Scroll id="contact" className="content-section footer-section">
      <footer className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-column--left scroll-elm">
            <div className="footer-logos">
              <a
                href="https://www.instagram.com/deerwalk_sifal_school/"
                aria-label="Deerwalk Sifal School Instagram"
              >
                <img
                  src={hackathonLogo}
                  alt="Deerhack School Edition 2025 logo"
                  className="footer-logo scroll-elm"
                />
              </a>
              <a
                href="https://www.instagram.com/dss_stem_club/"
                aria-label="DSS Stem Club Instagram"
              >
                <img
                  src={sifalLogo}
                  alt="Sifal School logo"
                  className="footer-logo scroll-elm s00"
                />
              </a>
            </div>

            <div className="footer-description">
              <h3 className="footer-title scroll-elm s01">
                Deerhack School Edition <br className="response-break" /> 2025
              </h3>
              <p className="footer-description-text scroll-elm s01" style={{}}>
                Deerhack School Edition 2025 is an 8-hour hackathon for high
                school students <br className="response-break" /> (grades 9–12).
                Compete in teams of <br className="response-break" /> 2–4,
                showcase your talent, and <br className="response-break" />{" "}
                connect with like-minded innovators.
              </p>
            </div>

            <div className="footer-social scroll-elm s02">
              <a href="https://discord.gg/QDbtW7hA" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "none",
                    stroke: "currentcolor",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path
                    fill="none"
                    stroke={"beige"}
                    strokeWidth="50"
                    d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dss_stem_club/"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a href="https://x.com/deerwalkcollege/" aria-label="Twitter">
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/company/deerwalk-inc"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="footer-column footer-column--right scroll-elm s04">
            <h3 className="footer-title scroll-elm s03">Event Details</h3>

            <div className="footer-details">
              <div className="footer-detail scroll-elm s05">
                <MapPin className="footer-detail-icon" />
                <div>
                  <p className="footer-detail-heading">Location</p>
                  <p>
                    Deerwalk Complex, <br className="response-break" />
                    Sifal, Kathmandu
                  </p>
                </div>
              </div>

              <div className="footer-detail scroll-elm s06">
                <Phone className="footer-detail-icon" />
                <div>
                  <p className="footer-detail-heading">Contact</p>
                  <p>+977 9813127946</p>
                </div>
              </div>

              <div className="footer-detail scroll-elm s07">
                <Mail className="footer-detail-icon" />
                <div>
                  <p className="footer-detail-heading">Email</p>
                  <a href="mailto:hackathon@deerwalk.edu.np">
                    hackathon@deerwalk.edu.np
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom scroll s07">
          <p>
            © {currentYear} Deerhack School Edition 2025. {eventName}. All
            rights reserved.
          </p>
          <div className="footer-links">
            <a href="https://docs.google.com/document/d/12HbcL_RxL5RGQTKZusx7Ni7NMClMgmQU_yCZVQM6WRk/edit?usp=sharing">
              Judging Criteria
            </a>
            <a href="https://docs.google.com/document/d/1FGCcjn5fOY1XuB3xmBcC4XStyGpcJwtYgzQpsCkqyOM/edit?usp=sharing">
              Rules & Regulations
            </a>
            <a href="https://docs.google.com/document/d/1Z1Nqdviz0fCIBbUcQaWItR6rmcDQSH5B2cwYHpItskQ/edit?usp=sharing">
              Itenary
            </a>
          </div>
        </div>
      </footer>
    </Scroll>
  );
};

export default Footer;
