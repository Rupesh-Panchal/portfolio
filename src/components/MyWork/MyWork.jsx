import React, { useState, useEffect } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Reset to show all items if window is resized to desktop
      if (window.innerWidth > 768) {
        setVisibleCount(mywork_data.length);
      } else if (visibleCount === mywork_data.length) {
        // If resizing back to mobile and all were shown, reset to 1
        setVisibleCount(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCount]);

  const handleToggle = () => {
    if (isMobile) {
      setVisibleCount((prev) => (prev === mywork_data.length ? 1 : prev + 1));
    }
  };

  const isAllVisible = visibleCount === mywork_data.length;

  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Upcoming Projects</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data
          .slice(0, isMobile ? visibleCount : mywork_data.length)
          .map((work, index) => (
            <img key={index} src={work.w_img} alt={work.w_name} />
          ))}
      </div>

      {isMobile && (
        <div className="mywork-showmore" onClick={handleToggle}>
          <p>{isAllVisible ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            style={{
              transform: isAllVisible ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;
