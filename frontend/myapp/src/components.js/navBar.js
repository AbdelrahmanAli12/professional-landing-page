import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="logo.jpg" alt="logo" />
        <div>
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
