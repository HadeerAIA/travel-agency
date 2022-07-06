import React from "react";
import Program from "./Program";
import "./ProgramList.css";

function ProgramList(props) {
  return (
    <div className="destinations">
      {props.programs.map((destination) => {
        return (
          <>
            <Program 
              key={destination.id}
              title={destination.title}
              cost={destination.cost}
              duration={destination.duration}
              image={destination.image}
              subTitle={destination.subTitle}
            />
            ;
          </>
        );
      })}
    </div>
  );
}
export default ProgramList;
