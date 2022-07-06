import React from "react";
import info1 from "../../../assets/info1.png";
import info2 from "../../../assets/info2.png";
import info3 from "../../../assets/info3.png";
import { Link } from "react-router-dom";
import "./Programs.css";
function Program(props) {
  return (
    <div className="destination">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.subTitle}</p>
      <div className="info">
        <div className="services">
          <img src={info1} alt="" />
          <img src={info2} alt="" />
          <img src={info3} alt="" />
        </div>
        <h4>{props.cost}</h4>
      </div>
      <div className="distance">
        <span>1000 Kms</span>
        <span>{props.duration}</span>
      </div>
      <Link to="/book">
        <div className="form-btn">
          <button className="submit-btn">Book Now</button>
        </div>
      </Link>
    </div>
  );
}
export default Program;
