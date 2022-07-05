import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import img from "../../assets/undraw-contact.svg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function ContactUs() {
  return (
    <div id="contactUs" classNameName="bodycontactus">
      <div class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <h3 class="heading mb-4">Let's talk about everything!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas debitis, fugit natus?
                  </p>

                  <p>
                    <img src={img} alt="Image" class="img-fluid" />
                  </p>
                </div>
                <div class="col-md-6">
                  <form
                    class="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <input
                          type="submit"
                          value="Send Message"
                          class="btn btn-primary rounded-0 py-2 px-4"
                        />
                        <span class="submitting"></span>
                      </div>
                    </div>
                  </form>

                  <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
