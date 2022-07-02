import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import {Link} from "react-router-dom";
import hoidaysjar from "../../../assets/holidaysjarwhite.png";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <div className="logo">
          <img src={hoidaysjar} alt="" />
          <h2 id="homepageName">HOLIDAYS JAR</h2>
        </div>
      </div>
      <ul className="nav-menu">
        <Link to="/" smooth={true} duration={500}><li>Home</li></Link>
        <Link to="/hotels" smooth={true} duration={500}><li>Hotels</li></Link>
        <Link to="/sights" smooth={true} duration={500}><li>Sights</li></Link>
        <Link to="/destinations" smooth={true} duration={500}><li>Destinations</li></Link>
        <Link to="/contactUs" smooth={true} duration={500}><li>Contact Us</li></Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <Link to="signup"><BsPerson className="icon" /></Link>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
      </style>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="hotels" smooth={true} duration={500}>
            <li>Hotels</li>
          </Link>
          <Link to="sights" smooth={true} duration={500}>
            <li>Sights</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <li>Services</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            <li>Reviews</li>
          </Link>
          <Link to="contactUs" smooth={true} duration={500}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
