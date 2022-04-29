import React from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import Videos from "./components/HomePage/Video/Videos";
import Services from "./components/HomePage/Services/Services";
import Recommend from "./components/HomePage/Recommend/Recommend";
import Footer from "./components/Shared/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Videos />
      <Services />
      <Recommend />
      <Footer />
    </div>
  );
}

export default App;
