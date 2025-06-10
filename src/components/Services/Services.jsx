import React from "react";
import "./Services.css";
import theme_patern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_patern} alt="theme_pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div className="services-format" key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
