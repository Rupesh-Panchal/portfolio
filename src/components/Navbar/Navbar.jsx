import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar" style={{ paddingTop: "30px" }}>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce">
        Rupesh
      </h1>

      {/* Hamburger icon to open menu */}
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="menu_open"
        className="nav-mob-open"
      />

      {/* Navigation menu */}
      <ul
        className={`nav-menu ${isOpen ? "open" : ""}`}
        style={{ fontSize: "1.3rem" }}
      >
        {/* Close icon inside menu */}
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu_close"
          className="nav-mob-close"
        />

        {/* Menu items */}
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={closeMenu}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={closeMenu}
          >
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={closeMenu}
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={closeMenu}
          >
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={closeMenu}
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect button, hidden on mobile */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
