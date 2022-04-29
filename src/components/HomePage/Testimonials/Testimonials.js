import React from "react";
import avatarImage from "../../../assets/R.jpg";
import './Testimonials.css'

function Testimonials() {
  return (
    <div id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Hadeer Elfiky</h4>
              <span>CEO - Travel Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Hadeer Elfiky</h4>
              <span>CEO - Travel Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Hadeer Elfiky</h4>
              <span>CEO - Travel Web Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default Testimonials;