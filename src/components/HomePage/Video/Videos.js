import React from "react";
import {  useState } from "react";
import "./Videos.css";
import Video from "../../../assets/egypt2.mp4";
// import date from ./data.json  // please import the json file here 
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=";

function Videos() {
  const [searchTerm, setsearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

      setsearchTerm("");
    }
  };
  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <div className="video">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>TRAVEL TO EXPLORE</h1>
        <h2>Top 1% Locations In Egypt</h2>
        <form className="form" onSubmit={handleOnSubmit}>
          <div>
            <input
              type="search"
              placeholder="Search Destinations"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Videos;
