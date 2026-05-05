import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div id="footer">
      <div className="footertop">
        <div className="box">
          <span id="contact1">Contact US</span>
          <span>+91 70187-64XXX</span>
          <span>kaioken8989@gmail.com</span>
          <span>Near Siyali Mahadev Temple, 
            Manali/India 175131</span>
        </div>
        <div className="box">
          <span id="services">Our Services</span>
          <span>Home</span>
          <span>Add Listing</span>
          <span>Rent</span>
        </div>
        <div className="box">
          <span id="Quick">Quick Link</span>
          <span>Knowledge Base</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="box">
          <span id="logo">Himachal Havens</span>
          <Link to={"/Contact"}>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="footerbottom">
        <span>Privacy Policy | |</span>
        <span>Use of Terms</span>
      </div>
    </div>
  );
}
export default Footer;
