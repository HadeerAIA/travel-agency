import React from "react";
import "./Services.css";
import Service from "./Service";

function ServiceList(props) {
  return (
    <div id="services">
      {props.servises.map((service, index) => {
        return (
          <Service
            key={service.id}
            title={service.title}
            icon={service.icon}
            subTitle={service.subTitle}
          />
        );
      })}
    </div>
  );
}

export default ServiceList;
