import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const [menu, setMenu] = useState("home");

  // Handle scroll to hide/show hamburger
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & scrolled more than 100px - hide hamburger
        setShowHamburger(false);
      } else {
        // Scrolling up or near top - show hamburger
        setShowHamburger(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar" style={{ paddingTop: "30px" }}>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce">
        Rupesh
      </h1>

      {showHamburger && !menuOpen && (
        <img
          src={menu_open}
          onClick={() => setMenuOpen(true)}
          alt="menu_open"
          className="nav-mob-open"
        />
      )}

      <ul
        className={`nav-menu ${menuOpen ? "open" : ""}`}
        style={{ fontSize: "1.3rem" }}
      >
        <img
          src={menu_close}
          onClick={() => setMenuOpen(false)}
          alt="menu_close"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => setMenu("about")}
          >
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => setMenu("services")}
          >
            Services
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link port"
            offset={50}
            href="#work"
            onClick={() => setMenu("work")}
          >
            Portfolio
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
