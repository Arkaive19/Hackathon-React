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

import sifalLogo from '../assets/sifalSchool.png'
import hackathonLogo from "../assets/hackathonLogo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Deerwalk Hackathon 2025";
  const eventName = "Deerwalk Sifal School";

  return (
    <Scroll id="contact" className="content-section footer-section">
      <footer className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-column--left scroll">
            <div className="footer-logos">
              <a
                href="https://www.instagram.com/deerwalk_sifal_school/"
                aria-label="Deerwalk Sifal School Instagram"
              >
                <img
                  src={hackathonLogo}
                  alt="Deerwalk Hackathon logo"
                  className="footer-logo"
                />
              </a>
              <a
                href="https://www.instagram.com/dss_stem_club/"
                aria-label="DSS Stem Club Instagram"
              >
                <img
                  src={sifalLogo}
                  alt="Sifal School logo"
                  className="footer-logo"
                />
              </a>
            </div>

            <div className="footer-description">
              <h3 className="footer-title">{companyName}</h3>
              <p className="footer-description-text" style={{ }}>
                Deerwalk Hackathon 2025 is an 8-hour hackathon for high school
                students (grades 9–12). Compete in teams of 2–4, showcase your
                talent, and connect with like-minded innovators.
              </p>
            </div>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/dss_stem_club/"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="footer-column footer-column--right scroll">
            <h3 className="footer-title">Event Details</h3>

            <div className="footer-details">
              <div className="footer-detail">
                <MapPin className="footer-detail-icon" />
                <div>
                  <p className="footer-detail-heading">Location</p>
                  <p>
                    Deerwalk Complex
                    <br />
                    Sifal, Kathmandu
                  </p>
                </div>
              </div>

              <div className="footer-detail">
                <Phone className="footer-detail-icon" />
                <div>
                  <p className="footer-detail-heading">Contact</p>
                  <p>+977 923894423</p>
                </div>
              </div>

              <div className="footer-detail">
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

        <div className="footer-bottom scroll s1">
          <p>
            © {currentYear} {companyName}. {eventName}. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </footer>
    </Scroll>
  );
};

export default Footer;
