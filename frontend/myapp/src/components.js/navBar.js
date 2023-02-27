import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (linkName == "Home") {
      navigate("/");
    } else navigate(`/${linkName}`);
  };

  return (
    <nav className="navbar">
      <img src="logo.jpg" alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li
          className={`navbar-link ${
            activeLink === "Home" ? "navbar-link-active" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </li>
        <li
          className={`navbar-link ${
            activeLink === "Services" ? "navbar-link-active" : ""
          }`}
          onClick={() => handleLinkClick("Services")}
        >
          Services
        </li>
        <li
          className={`navbar-link ${
            activeLink === "About" ? "navbar-link-active" : ""
          }`}
          onClick={() => handleLinkClick("About")}
        >
          About
        </li>
        <li
          className={`navbar-link ${
            activeLink === "Contact" ? "navbar-link-active" : ""
          }`}
          onClick={() => handleLinkClick("Contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
