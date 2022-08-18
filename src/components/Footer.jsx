import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row bg-black">
        <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center my-4 my-md-4">
          <h6 className="text-light fw-normal">©2022 by Ignacio Soler.</h6>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center mt-4 my-md-4">
          <a
            href="https://www.instagram.com/kronorecords/"
            target="_blank"
            className="text-light text-decoration-none mx-3 hover-effect"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCA-ih2Xc00HDkqvnDmVLMCA"
            target="_blank"
            className="text-light text-decoration-none mx-3 hover-effect"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.linkedin.com/in/ignaciojsoler/"
            target="_blank"
            className="text-light text-decoration-none mx-3 hover-effect"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
