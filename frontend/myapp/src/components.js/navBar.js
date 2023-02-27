import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="logo.jpg" alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link" activeClassName="active-link">
          Home
        </Link>
        <Link to="/services" className="nav-link" activeClassName="active-link">
          Services
        </Link>
        <Link to="/about" className="nav-link" activeClassName="active-link">
          About
        </Link>
        <Link to="/contact" className="nav-link" activeClassName="active-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
