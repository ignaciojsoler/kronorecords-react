import React from "react";
import coverImg from '../assets/cover-background.jpg'
import Fade from 'react-reveal/Fade';

const Cover = () => {
  return (
    <Fade right>
      <main className="container-fluid bg-black d-flex flex-column justify-content-center align-items-center text-light p-0">
        <div className="img-container container-fluid h-50 p-0 d-md-none">
          <img
            src={coverImg}
            alt=""
            className="cover-img p-0"
          />
        </div>
        <div className="cover-text d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="display-4 fw-bold m-md-3">Krono Records</h1>
          <h5 className="m-md-2 text-center">
            Sound Design & Music Composition
          </h5>
        </div>
      </main>
    </Fade>
  );
};

export default Cover;
