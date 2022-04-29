import React, { useState } from "react";
import Destination1 from "../../../assets/Destination1.jpg";
import Destination2 from "../../../assets/Destination2.jpg";
import Destination3 from "../../../assets/Destination3.jpg";
import Destination4 from "../../../assets/Destination4.jpg";
import Destination5 from "../../../assets/Destination5.jpg";
import Destination6 from "../../../assets/Destination6.jpg";
import info1 from "../../../assets/info1.png";
import info2 from "../../../assets/info2.png";
import info3 from "../../../assets/info3.png";
import './Recommend.css'

function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Temple of Hours, Edfu",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 5 night trip",
    },
    {
      image: Destination2,
      title: "Red Sea",
      subTitle: "Lovely photo with colored fish on the Red Sea",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Gonna",
      subTitle: "Beautiful and modern resorts in El Gonna",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Wadi Al Weshwashi",
      subTitle: "Wadi Al Weshwashi, Nuweiba, South Sinai",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Luxor",
      subTitle: "King Ramses II at Luxor temple in Aswan",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Sahaba mosque",
      subTitle: "Al Sahaba mosque in Sharm El Sheikh",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <div id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>

      
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Recommend;