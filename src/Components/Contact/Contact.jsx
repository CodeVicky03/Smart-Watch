import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <h1>Get In Touch</h1>
      <div className="contact-inputs">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <textarea rows={5} placeholder="Message"></textarea>
        <button>Send</button>
      </div>
      <div className="style-circle"></div>
      <div className="style-circle-white"></div>
    </div>
  );
};

export default Contact;
