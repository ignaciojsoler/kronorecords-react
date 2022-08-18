import React from "react";


const Carousel = () => {
  return (
    <>
      <div
        id="carouselIndicators"
        className="carousel slide bg-black py-3 d-lg-none"
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
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        {/*Mobile carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Nn7XfT8dl7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <div className="carousel-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_Nw56_h2ot4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="carousel-item">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SThFEF2bEQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="carousel-item">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MU-EBwMbBho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="carousel-item">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZvAtXmmtG00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
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
      </div>
      {/*Desktop carousel */}
      <div className="container-fluid d-none d-lg-block bg-black py-md-5 my-5 my-lg-0">
        <div className="d-flex flex-column mx-5">
          <div className="top-videos d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Nn7XfT8dl7E?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="p-1"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_Nw56_h2ot4?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="p-1"
            ></iframe>
          </div>
          <div className="bottom-videos d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZvAtXmmtG00?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="p-1"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MU-EBwMbBho?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="p-1"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
