import React from "react";
import "./Hero.css";
import obito from "../../assets/obito.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Toaster, toast } from "react-hot-toast";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={obito} alt="Obito" className="obito-img" />
      <h1 style={{ fontSize: "2.5rem", marginTop: "20px" }}>
        Hey, <span>I am Rupesh Panchal.</span> <br />A fresher Web - developer
        from <span> Mumbai</span>
      </h1>
      <p>
        I am a BScIT graduate with strong skills in programming and technology.
        <br />
        I’m eager to learn and apply my knowledge to solve real-world problems.
      </p>
      <div className="hero-action">
        <div className="hero-connect" style={{ marginTop: "25px" }}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>

        <a
          href="/Rupesh-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
          style={{
            marginTop: "25px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
