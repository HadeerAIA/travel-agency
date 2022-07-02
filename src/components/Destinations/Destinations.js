import React from "react";
import sharmelsheikh2 from "../../assets/sharmelsheikh2.jpg";
import Alex from "../../assets/alex.jpg";
import luxor from "../../assets/luxor.jpg";
import "./Destinations.css";

function Destinations() {
  const data = [
    {
      id:1,
      image: sharmelsheikh2,
      title: "Sharm El Sheikh",
      governerate: "South Sinai",
      numOfreviews: "2120 reviews",
      notes:
        "Sharm el-Sheikh is an Egyptian resort town between the desert of the Sinai Peninsula and the Red Sea. It's known for its sheltered sandy beaches, clear waters and coral reefs"
    },
    {
      id:2,
      image: Alex,
      title: "Alexandria",
      governerate: "Alexandria",
      numOfreviews: "2120 reviews",
      notes:
        "Alexandria was best known for the Lighthouse of Alexandria (Pharos), one of the Seven Wonders of the Ancient World; its Great Library, the largest in the ancient world; and the Necropolis, one of the Seven Wonders of the Middle Ages."
    },
    {
      id:3,
      image: luxor,
      title: "Luxor",
      governerate: "Luxor",
      numOfreviews: "2120 reviews",
      notes:
        'Luxor has frequently been characterized as "the world\'s greatest open-air museum", as the ruins of the Egyptian temple complexes at Karnak and Luxor stand within the modern city. Immediately opposite, across the River Nile, lie the monuments, temples and tombs of the west bank Theban Necropolis, which includes the Valley of the Kings and Valley of the Queens.'
    }
  ];

  return (
    <div id="destinations">
      <div className="title">
        <h2>Destinations</h2>
      </div>

      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title + " / " + destination.governerate}</h3>
              <span>{destination.notes}</span>
              <div>{destination.numOfreviews}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Destinations;
