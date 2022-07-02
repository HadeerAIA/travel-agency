import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Videos from "./Video/Videos";
import Services from "./Services/Services";
import Recommend from "./Recommend/Recommend";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "../Shared/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Videos />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default HomePage;
