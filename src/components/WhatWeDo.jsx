import React from "react";
import logo from '../assets/logo.png'
import Fade from 'react-reveal/Fade';

const WhatWeDo = () => {
  return (
    <Fade left>
      <div className="main-info container-fluid px-4 py-3 bg-black text-light m-auto">
        <div className="row align-items-md-center p-md-5 text-md-center justify-content-md-center text-light">
          <div className="col-md-5 main-text d-md-flex flex-column align-items-center">
            <h4 className="h1 fw-bold">What we do?</h4>
            <p className="my-md-4 ">
              From composing music for video games and film, to designing sound
              effects, ambiences & soundscapes, audio branding and more. We
              offer a wide range of freelance music & audio services.
            </p>
            <a
              className="btn btn-contact border-white bg-transparent rounded-pill px-4 py-3 my-2 text-decoration-none text-light"
              href="pages/contact.html"
            >
              Be in contact
            </a>
          </div>

          <div className="col-md-5 main-logo d-none d-md-inline d-md-flex justify-content-md-center p-md-5">
            <img src={logo} alt="" className="w-50" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WhatWeDo;
