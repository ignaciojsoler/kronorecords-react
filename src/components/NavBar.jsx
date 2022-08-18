import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar-nav bg-dark d-none d-md-block">
        <div className="nav-links d-flex justify-content-center p-2">
          <Link to="/" className="link-light text-decoration-none mx-3 hover-effect">
            Home
          </Link>
          <Link
            to="/services"
            className="link-light text-decoration-none mx-3 hover-effect"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="link-light text-decoration-none mx-3 hover-effect"
          >
            Portfolio
          </Link>
          <Link
            to="/about-us"
            className="link-light text-decoration-none mx-3 hover-effect"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="link-light text-decoration-none mx-3 hover-effect"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
