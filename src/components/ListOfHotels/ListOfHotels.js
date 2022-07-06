import React from "react";
import SofitelLegend from "../../assets/SofitelLegendOldCataractAswan.jpg";
import katodoolarialview from "../../assets/kato-dool-arial-view.jpg";
import movenpickresortaswan from "../../assets/movenpickresortaswan.jpg";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import { Link } from "react-router-dom";

import mappin from "../../assets/mappin.png";
import wifi from "../../assets/wifiiconwhite.png";
import "./ListOfHotels.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

function ListOfHotels() {
  const data = [
    {
      image: SofitelLegend,
      title: "Sofitel Legend Old Cataract",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "10/10",
      stars: "5 stars",
      location: "1.4 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },
    {
      image: katodoolarialview,
      title: "Kato Dool Nubian House",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "9/10",
      stars: "5 stars",
      location: "3.5 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },
    {
      image: movenpickresortaswan,
      title: "Movenpick Resort ",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "9/10",
      stars: "5 stars",
      location: "1.0 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },    {
      image: katodoolarialview,
      title: "Kato Dool Nubian House",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "9/10",
      stars: "5 stars",
      location: "3.5 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },    {
      image: katodoolarialview,
      title: "Kato Dool Nubian House",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "9/10",
      stars: "5 stars",
      location: "3.5 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },    {
      image: katodoolarialview,
      title: "Kato Dool Nubian House",
      //subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      rate: "9/10",
      stars: "5 stars",
      location: "3.5 miles from Aswan center",
      governerate: "Aswan",
      numOfreviews: "2120 reviews",
      notes: "Free Wi-fi"
    },
  ];
  return (
    <>
      <Navbar />
      <div className="space"></div>
      <div id="hotels">
        <div className="title">
          <h2>Hotels</h2>
        </div>
        <div className="destinations">
          {data.map((destination) => {
            return (
              <>
              <div className="destination">
                <img src={destination.image} alt="" />
                <h3>{destination.title + " / " + destination.governerate}</h3>
                {/* <span>{destination.governerate}</span> */}
                <p>{destination.view}</p>
                <div className="info">
                  <div className="services">
                    {/* <img src={wifi} alt="" id="wifiicon"/> */}
                    <img src={wifi} alt="" />
                    <img src={info2} alt="" />
                    <img src={info3} alt="" />
                  </div>
                  <span>{destination.notes}</span>
                </div>
                <div>{destination.rate}</div>
                <div>{destination.numOfreviews}</div>
                <div className="distance">
                  {/* <span>1000 Kms</span> */}
                  <span>{destination.location}</span>
                  <div className="info">
                    <div className="icon">
                      <img src={mappin} alt="" />
                    </div>
                  </div>
                </div>
                 <Link to="/book">
               <div className="form-btn">
                 <button className="submit-btn">Book Now</button>
               </div>
             </Link>
              </div>
              
             </>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ListOfHotels;
