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
// import hoidaysjar from "../../../assets/holidaysjarwhite.png";
import "./Navbar.css";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <div className="logo">
        {/* <img src={hoidaysjar} alt="" /> */}
       <Link to = "/"> <h2 id="homepageName">HOLIDAYS JAR</h2></Link>
        </div>
      </div>
      <ul className="nav-menu">
        <Link to="/" smooth="true" duration={500} className="L">
          <li>Home</li>
        </Link>
        <Link to="/hotels" smooth="true" duration={500} className="L">
          <li>Hotels</li>
        </Link>
        <Link to="/sights" smooth="true" duration={500} className="L">
          <li>Sights</li>
        </Link>
        <Link to="/book" smooth="true" duration={500} className="L">
          <li>Book</li>
        </Link>
        <Link to="/contactUs" smooth="true" duration={500} className="L">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="nav-icons">
       <Link to = ""> <BiSearch className="icon" style={{ marginRight: "1rem" }} /></Link>
        <Link to="signup">
          <BsPerson className="icon" />
        </Link>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
         <Link to = "" ><HiOutlineMenuAlt4 className="icon" /></Link>
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="/" smooth="true" duration={500}>
            <li>Home</li>
          </Link>
          <Link to="/hotels" smooth="true" duration={500}>
            <li>Hotels</li>
          </Link>
          <Link to="/sights" smooth="true" duration={500}>
            <li>Sights</li>{" "}
          </Link>
          <Link to="/book" smooth="true" duration={500}>
            <li>Book</li>
          </Link>
          <Link to="/contactUs" smooth="true" duration={500}>
            <li>Contact Us</li>{" "}
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Link to = "/"><button>Search</button></Link>
           <Link to = "/signup"> <button>Account</button></Link>
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
