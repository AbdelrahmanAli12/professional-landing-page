import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="logo.jpg" alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link" exact activeClassName="active-link">
          Home
        </Link>
        <Link to="/services" className="nav-link" activeClassName="active-link">
          Services
        </Link>
        <Link to="/about" className="nav-link" activeClassName="active-link">
          About Us
        </Link>
        <Link to="/projects" className="nav-link" activeClassName="active-link">
          Our Work
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
