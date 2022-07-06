import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
// import Link from 'react-scroll/modules/components/Link'


function Footer() {
    return (
        <footer className="footer-48201">
      
        <div className=" BG">
          <div className="row">
            <div className="col-md-4 pr-md-5">
              <Link to="#" className="footer-site-logo d-block mb-4">Holiday Bar</Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>Clients</li>
                <li>Team</li>
                <li>Career</li>
                <li>Testimonials</li>
                <li>Journal</li>
              </ul>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className="col-md text-md-center">
              <ul className="social list-unstyled">
                <li><FaInstagram className="icon-instagram"></FaInstagram></li>
                <li><FaTwitter className="icon-twitter"></FaTwitter></li>
                <li><FaFacebook className="icon-facebook"></FaFacebook></li>
                <li><FaPinterest className="icon-pinterest"></FaPinterest></li>
              </ul>
              <Link to = "/contactUs"><button >Contact Us</button></Link>
            </div>
          </div> 
  
          <div className="row ">
            <div className="col-12 text-center">
              <div className="copyright mt-5 pt-5">
                <p><small>&copy; 2022-2023 All Rights Reserved.</small></p>
              </div>
            </div>
          </div> 
        </div>
        
      </footer>
    )
}

export default Footer
