import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import krishna from "../../assets/krishna.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={krishna} alt="krishna" className="krishna-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              With a background in BSc IT, I focus on crafting efficient and
              engaging web interfaces. My approach blends clean code, modern
              tools, and user-first design to build smooth digital experiences.
              I’m always exploring new tech and pushing my limits with each
              project.
            </p>
            <p>
              I am constantly seeking to improve my skills and stay updated with
              the latest industry trends. My goal is to create impactful web
              solutions that not only meet user needs but also provide a
              delightful experience.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>BSCIT Graduate</h1>
          <p>
            Graduated with a Bachelor's degree in Science Information Technology
            with cgpa: 8.98.
          </p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>Front-end development</h1>
          <p>
            Having a good knowledge of React JS with hands-on experience in
            building Projects.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Back-end development</h1>
          <p>
            Proficient in building RESTful APIs using Express JS and integrating
            with MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
