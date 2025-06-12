import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import krishna from "../../assets/krishna.jpg";

const About = () => {
  return (
    <div className="about fle" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={krishna}
            alt="krishna"
            className="krishna-img"
            style={{ width: "620px", height: "240px", marginTop: "8px" }}
          />
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
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "35%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>BSCIT Graduate</h1>
          <p>
            I am proud to have completed my Bachelor's degree in Science
            Information Technology with a CGPA of 8.98. This journey helped me
            build a strong foundation in various areas of technology, and I am
            grateful for the knowledge and experiences gained during this time.
          </p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>Front-end development</h1>
          <p>
            I enjoy working with React JS and have hands-on experience creating
            beautiful and user-friendly web applications. Learning to build
            interactive interfaces has been both exciting and rewarding, and I
            always strive to improve my skills.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Back-end development</h1>
          <p>
            I am comfortable building RESTful APIs using Express JS and
            connecting them with MongoDB databases. I focus on writing clean and
            efficient code, making sure the backend services I build are
            reliable and helpful for users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
