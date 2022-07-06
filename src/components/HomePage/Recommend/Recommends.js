import ProgramList from "./ProgramList";
import Destination1 from "../../../assets/Destination1.jpg";
import Destination2 from "../../../assets/Destination2.jpg";
import Destination3 from "../../../assets/Destination3.jpg";
import Destination4 from "../../../assets/Destination4.jpg";
import Destination5 from "../../../assets/Destination5.jpg";
import Destination6 from "../../../assets/Destination6.jpg";
import "./Recommend.css";

function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Temple of Hours, Edfu",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 5 night trip"
    },
    {
      id: 2,
      image: Destination2,
      title: "Red Sea",
      subTitle: "Lovely photo with colored fish on the Red Sea",
      cost: "54,200",
      duration: "Approx 2 night trip"
    },
    {
      id: 3,
      image: Destination3,
      title: "Gonna",
      subTitle: "Beautiful and modern resorts in El Gonna",
      cost: "45,500",
      duration: "Approx 2 night trip"
    },
    {
      id: 4,
      image: Destination4,
      title: "Wadi Al Weshwashi",
      subTitle: "Wadi Al Weshwashi, Nuweiba, South Sinai",
      cost: "24,100",
      duration: "Approx 1 night trip"
    },
    {
      id: 5,
      image: Destination5,
      title: "Luxor",
      subTitle: "King Ramses II at Luxor temple in Aswan",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip"
    },
    {
      id: 6,
      image: Destination6,
      title: "Sahaba mosque",
      subTitle: "Al Sahaba mosque in Sharm El Sheikh",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip"
    }
  ];

  return (
    <div id="recommend">
      <div className="title">
        <h2>Our Programs</h2>
        <ProgramList programs={data} />
      </div>
    </div>
  );
}

export default Recommend;
