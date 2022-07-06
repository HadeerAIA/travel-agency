import React from "react";
import './Services.css';


function Service(props){
    return(
  <div className="service">
            <div className="icon">
              <img src={props.icon} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
          </div>
        );
    
}

export default Service;
