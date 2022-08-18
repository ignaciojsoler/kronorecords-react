import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const form = useRef();

  const [sendSucces, setSendSucces] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_uj1zxac";
    const publicKey = "ooMstJwkwlXwHuEhu";
    console.log(form.current);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        alert("FAILED...", error);
      }
    );
    setSendSucces(true);
  };

  return (
    <>
      {sendSucces
        ? (
          <Fade bottom>
          <div className="dark-background py-5">
            <div className="wrapper-container container p-5 d-flex justify-content-center bg-dark">
              <div className="p-5 d-flex flex-column align-items-center">
                <h1 className="text-light mb-5">Email enviado correctamente!</h1>
                <Link to="/">
                  <button
                    className="contact-form__button btn btn-primary btn-light px-5 py-2 fw-bold rounded-0"
                    type="submit"
                    value="send"
                  >
                    Volver atrás
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        ) : (
          <Fade bottom>
            <div className="dark-background py-5">
              <div className="wrapper-container container py-4 d-flex justify-content-center bg-dark">
                <form
                  className="contact-form"
                  id="form"
                  onSubmit={handleSubmit}
                  ref={form}
                >
                  <div className="contact-form__title h1 text-light">
                    Contact us
                  </div>

                  <div className="contact-form__input">
                    <input
                      className="contact-form__input-name form-control my-4 rounded-0"
                      name="Name"
                      id="Name"
                      type="text"
                      placeholder="Name"
                      data-sb-validations="required"
                      required
                    />
                  </div>

                  <div className="contact-form__input">
                    <input
                      className="contact-form__input-email form-control my-4 rounded-0"
                      name="Email"
                      id="Email"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required, email"
                      required
                    />
                  </div>

                  <div className="contact-form__input">
                    <textarea
                      className="contact-form__input-message form-control my-4 rounded-0"
                      name="Message"
                      id="Message"
                      type="text"
                      placeholder="Message"
                      data-sb-validations="required"
                      required
                    ></textarea>
                  </div>

                  <div className="contact-form__submit d-grid my-4 d-md-block text-center">
                    <button
                      className="contact-form__button btn btn-primary btn-light px-5 py-2 fw-bold rounded-0"
                      type="submit"
                      value="send"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        )}
    </>
  );
};

export default Contact;
