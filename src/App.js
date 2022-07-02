import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactUs from "./components/ContactUs/ContactUs";
import ListOfHotels from "./components/ListOfHotels/ListOfHotels";
import ListOfSights from "./components/ListOfSights/ListOfSights";
import Destinations from "./components/Destinations/Destinations";
// import ThankYou2 from "./components/ThankYou2/ThankYou2";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
import ThankYou from "./components/ThankYou/ThankYou";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
// import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListOfHotels />} />
        <Route path="/sights" element={<ListOfSights />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/hotels" element={<ListOfHotels />} />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sights/signup" element={<SignUp />} />
        <Route path="/hotels/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
