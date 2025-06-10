import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1 className="footer-txt text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
            Rupesh
          </h1>
          <p>
            A passionate developer with a knack for creating dynamic and
            responsive web applications.
          </p>
        </div>

        <div className="footer-top-right">
          <h3>Let’s Connect</h3>
          <div className="footer-social-icons">
            <a
              // href="https://www.linkedin.com/in/rupesh-panchal-528716261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin title="LinkedIn" />
            </a>
            <a
              // href="https://github.com/your-github" // Replace with actual
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a
            //</div>href="mailto:panchalrupesh18@gmail.com"
            >
              <FaEnvelope title="Gmail" />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Rupesh Panchal. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
