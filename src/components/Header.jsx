import React from "react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header p-4 d-flex justify-content-between justify-content-md-center align-items-center bg-black">
        <Link to="/">
        <img src={logo} alt="" className="logo" height={90} />
        </Link>


        <nav className="navbar navbar-dark bg-black d-md-none">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              aria-controls="offcanvas"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          ${/* Links del menú desplegable */}
          <div className="offcanvas-header d-flex align-items-start">
            <div className="menu-links d-flex flex-column">
              <Link
                to="/"
                className="menu-links link-light text-decoration-none hover-effect"
                
              >
                <h3 data-bs-dismiss="offcanvas">Home</h3>
              </Link>
              <Link
                to="/services"
                className="menu-links link-light text-decoration-none hover-effect"
              >
                <h3 data-bs-dismiss="offcanvas">Services</h3>
              </Link>
              <Link
                to="/portfolio"
                className="menu-links link-light text-decoration-none hover-effect"
                data-bs-dismiss="offcanvas"
              >
                <h3 data-bs-dismiss="offcanvas">Portfolio</h3>
              </Link>
              <Link
                to="/about-us"
                className="menu-links link-light text-decoration-none hover-effect"
                data-bs-dismiss="offcanvas"
              >
                <h3 data-bs-dismiss="offcanvas">About us</h3>
              </Link>
              <Link
                to="/contact"
                className="menu-links link-light text-decoration-none hover-effect"
              >
                <h3 data-bs-dismiss="offcanvas">Contact</h3>
              </Link>
            </div>
            <button
              type="button"
              className="btn-close text-reset btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
