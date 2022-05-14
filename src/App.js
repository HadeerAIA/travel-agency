import React from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import Videos from "./components/HomePage/Video/Videos";
import Services from "./components/HomePage/Services/Services";
import Recommend from "./components/HomePage/Recommend/Recommend";
import Testimonials from "./components/HomePage/Testimonials/Testimonials";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import ListOfHotels from "./components/ListOfHotels/ListOfHotels"
import ListOfSights from "./components/ListOfSights/ListOfSights"
import Destinations from "./components/Destinations/Destinations"
//import ThankYou2 from "./components/ThankYou2/ThankYou2";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <Navbar />
      <Videos />
      <Services />
      <Recommend />
      <Testimonials/>
      <ListOfHotels/>
      <ListOfSights/>
      <Destinations/>
      <ContactUs/>
      {/* <ThankYou />
      <ErrorPage /> */}
      {/* <ThankYou2 /> */}
      <Footer />
    </div>
  );
}

export default App;
