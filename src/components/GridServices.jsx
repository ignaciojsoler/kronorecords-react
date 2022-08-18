import React from "react";
import img1 from '../assets/services-img1.webp'
import img2 from '../assets/services-img2.webp'
import img3 from '../assets/services-img3.webp'
import Fade from 'react-reveal/Fade';

function GridServices() {
  return (
    <div className="w-100 bg-dark">
      <div className="services-grid container-fluid d-flex justify-content-center align-items-center bg-dark">
        <div className="row text-light">
          <div className="col col-12 col-md-6 p-0">
            <Fade left className="">
              <img src={img1} alt="" className="img-fluid" />
            </Fade>
          </div>
          <div className="services-grid-text col order-1 order-md-1 col-12 col-md-6 p-0 d-flex justify-content-center align-items-center">
            <div className="container p-4">
              <Fade right>
              <h3>Music composition</h3>
              <p>
                High quality original music composition. From film soundtracks
                to video game music, apps, commercials and one off productions,
                we have the right music for your project.
              </p>
              </Fade>
              
            </div>
          </div>
          <div className="services-grid-text col order order-3 order-md-2 col-12 col-md-6 p-0 d-flex justify-content-center align-items-center">
            <div className="container p-4">
              <Fade left>
              <h3>Game audio</h3>
              <p>
                From music to sound design, voice over, foley, field recording
                and middleware programming, we offer a wide range of game audio
                solutions for various platforms and consoles.
              </p>
              </Fade>
            </div>
          </div>
          <div className="col order order-2 order-md-3 col-12 col-md-6 p-0">
            <Fade right className="">
              <img src={img3} alt="" className="img-fluid" />
            </Fade>
          </div>
          <div className="col order order-4 order-md-4 col-12 col-md-6 p-0">
            <Fade left>
              <img src={img2} alt="" className="img-fluid" />
            </Fade>
          </div>
          <div className="services-grid-text col order order-5 order-md-5 col-12 col-md-6 p-0 d-flex justify-content-center align-items-center">
            <div className="container p-4">
              <Fade right>
              <h3>Sound design</h3>
              <p>
                Do you need Sound Design for film trailers or video games? Maybe
                you need app interface sounds or something more exotic? Find out
                more about our sound design services.
              </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridServices;
