import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const message = formData.get("message").trim();

    if (!name || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    setResult("Sending....");

    formData.append("access_key", "827ed8c8-c548-4929-affe-b43ddbeb2c5c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Email sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I'm currently available to take on new projects</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon" />
              <p>panchalrupesh18@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaLinkedin className="linkedin-icon" />
              <p>https://www.linkedin.com/in/rupesh-panchal-528716261/</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" />
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Write your message here</label>
          <textarea
            rows={8}
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
