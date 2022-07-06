import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import img from "../../assets/undraw-contact.svg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Shared/Navbar/Navbar";
function ContactUs() {
  return (
    <>
   <Navbar/>
    <div id="contactUs" classNameName="bodycontactus">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center forming">
            <div className="col-md-10 ">
              <div className="row justify-content-center ">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p>
                  <br></br>
                  <br></br>
                  </p>

                  <p>
                    <img src={img} alt="" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5 "
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group ">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                       <Link to="/thanks"> <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        /></Link>
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
