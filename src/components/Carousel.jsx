import React from "react";
import data from '../portfolio-data.json'
import Fade from 'react-reveal/Fade';

const Carousel = () => {
  const videos = data
  return (
    <>
      <div
        id="carouselIndicators"
        className="carousel slide bg-black py-3 d-md-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        {/*Mobile carousel */}
        <Fade>
        <div className="carousel-inner">
          {
            videos.map((video, idx) => {
              return <div className={`carousel-item ${video.id === 1 ? 'active' : ' '}`} key={idx}>
                <a className="position-relative" target="_blank" href={video.url}>
                  <h6 className="position-absolute text-white m-3">{video.title}</h6>
                  <img src={video.image} alt="reel-image" className="w-100" />
                </a>
              </div>
            })
          }

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        </Fade>
      </div>
      
      {/*Desktop carousel TODO - Fix this */}      <div className="container-fluid d-none d-md-block bg-black py-md-5 my-5 my-lg-0">
        <Fade up>
        <div className="container">
          <div className="row g-3">
            {
              videos.map((video, idx) => {
                return <div key={idx} className="col-md-6">    
                  <a className="position-relative" target="_blank" href={video.url}>
                    <h6 className="position-absolute text-white m-3">{video.title}</h6>
                    <img src={video.image} alt="reel-image" className="w-100 border border-secondary" />
                  </a>
                </div>
              })
            }
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Carousel;
