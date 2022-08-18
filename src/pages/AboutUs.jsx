import React from "react";
import Fade from 'react-reveal/Fade';

const AboutUs = () => {
  return (
    <Fade bottom>
    <div className="dark-background py-md-5">
      <div className="about-us container  p-md-5 d-flex flex-column justify-content-center align-items-center bg-black">
        <div className="about-us__description text-light text-start p-4 text-md-center">
          <div className="about-us__title h1">About Us</div>
          <div className="about-us__text fs-5">
            Krono Records was born out of a belief that sound and image should
            elevate and contextualise one another to amplify emotion, engagement
            and recall. Our strength lies in translating a collective vision
            into a tangible piece of music or sound design. We always look to
            enter the creative process as early as possible to achieve synergy
            of picture and sound from the conception of a film or game to its
            playout. ​If you think that we can help you, please check our
            portfolio and feel free to make all the necessary questions.
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default AboutUs;
