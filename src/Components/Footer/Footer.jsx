import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <div className="foo-one">
        <h1>Be The First</h1>
        <p>
          Embark on a journey of innovation with us be the first to unlock
          cutting-edge features and exclusive updates that set new standards
        </p>
        <div>
          <input type="email" placeholder="Place Your Email Here" />
          <button>SIGN UP</button>
        </div>
      </div>
      <div className="foo-last">
        <ul>
            <li>Need Help ?</li>
            <li>01+ 9876543210</li>
            <li>01+ 9876543210</li>
            <li>applewatch@gmail.com</li>
        </ul>
        <ul>
            <li>Links</li>
            <li>Home</li>
            <li>Products</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li>Customer Services</li>
            <li>Contact Us</li>
            <li>Delivery & Order</li>
            <li>Return & Replacement</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li style={{fontSize:"20px"}}><FaFacebook/></li>
            <li style={{fontSize:"20px"}}><FaInstagram/></li>
            <li style={{fontSize:"20px"}}><FaTwitter/></li>
            <li style={{fontSize:"20px"}}><FaWhatsapp/></li>
        </ul>
      </div>
      <div>
        <p className="copy-rights">© 2023 Apple Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
