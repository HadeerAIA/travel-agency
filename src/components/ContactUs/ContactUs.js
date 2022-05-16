import React from "react";
 //import $ from "jquery";
import './ContactUs.css'
  function ContactUs () {    
   
      return(
        <div id="contactUs" classNameName="bodycontactus">
              <section>
                <div className="container">
                    <h2>We'd like to hear from you ♥</h2>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required=""/>
                                <span className="text">Fast Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required=""/>
                                <span className="text">Lest Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required=""/>
                                <span className="text">Email</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputbox">
                                <input type="text" required=""/>
                                <span className="text">Number</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="inputbox textarea">
                                <textarea className="" required=""></textarea>
                                <span className="text">Type Your Message...</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </section>  

        </div>

      );
      }    
export default ContactUs;