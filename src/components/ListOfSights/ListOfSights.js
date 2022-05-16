import React from "react";
import pyramidsogiza from "../../assets/pyramidsogiza.jpg";
import ElMoezStreet from "../../assets/ElMoezStreet.jpg";
import wadiElRyan from "../../assets/wadiElRyan.jpg";
import mappin from "../../assets/mappin.png";
import './ListOfSights.css'

function ListOfSights(){
    
    const data = [
        {
          image: pyramidsogiza,
          title: "Pyramids of Giza",
          location: "location on map",
          governerate: "Giza",
          numOfreviews:"2120 reviews",
          notes: "The last surviving wonder of the Seven Wonders of the Ancient World, the Pyramids of Giza are one of the world's most recognizable landmarks.",

        },
        {
          image: ElMoezStreet,
          title: "Muizz Street",
          location: "location on map",
          governerate: "Cairo",
          numOfreviews:"2120 reviews",
          notes: "Al-Muizz street runs from the city gate of Bab al-Futuh in the north to the gate of Bab Zuweila in the south, both entrances in the stone walls built by the vizier Badr al-Jamali in the 11th century",
        },
        {
          image: wadiElRyan,
          title: "Wadi El Rayan",
          location: "location on map",
          governerate: "Faiyum",
          numOfreviews:"2120 reviews",
          notes: "Faiyum has several large bazaars, mosques, baths and a much-frequented weekly market. The canal called Bahr Yussef runs through the city, its banks lined with houses.",
        },
                   
      ];

   
    return (
        <div id="sights">
      <div className="title">
        <h2>Sights</h2>
      </div>     
      
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title + ' / ' + destination.governerate}</h3>
              <span>{destination.notes}</span>
                <div>{destination.numOfreviews}</div>
              
              <div className="distance">
                <span>{destination.location}</span>
                <div className="info">
                <div className="icon">
                <img src={mappin} alt="" />
                </div>
              </div>
               

              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
}

export default ListOfSights;