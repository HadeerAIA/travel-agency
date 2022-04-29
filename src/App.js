import React from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import Videos from "./components/HomePage/Video/Videos";
import Services from "./components/HomePage/Services/Services";
import Recommend from "./components/HomePage/Recommend/Recommend";
import Testimonials from "./components/HomePage/Testimonials/Testimonials";
import Footer from "./components/Shared/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Videos />
      <Services />
      <Recommend />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
