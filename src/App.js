import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactUs from "./components/ContactUs/ContactUs";
import ListOfHotels from "./components/ListOfHotels/ListOfHotels";
import ListOfSights from "./components/ListOfSights/ListOfSights";
import ThankYou from "./components/ThankYou/ThankYou";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
import Checkout from "./components/Checkout/Checkout";
import Book from "./components/Booking/Book";
import CustomBook from "./components/Booking/CustomBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListOfHotels />} />
        <Route path="/sights" element={<ListOfSights />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/hotels" element={<ListOfHotels />} />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sights/signup" element={<SignUp />} />
        <Route path="/hotels/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />       
        <Route path="/book" element={<Book />} />
        <Route path="/cbook" element={<CustomBook />} />

      </Routes>
    </div>
  );
}

export default App;
