import React from "react";
import "./Support.css";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar";
import sone from "../../assets/sone.png";
import stwo from "../../assets/stwo.png";
import sthree from "../../assets/sthree.png";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

const Support = () => {
  return (
    <div>
      <Navbar />
      <div className="support">
        <section>
          <h1>Apple Support on YouTube</h1>
          <p>
            Check out our official YouTube channel to help you get the most from
            your Apple devices and services.
          </p>
          <span>Visit Apple Support on YouTube <HiMiniArrowUpRight/></span>
          <img src={sone} alt="" />
        </section>
        <section id="FreeSessions">
          <h1>Join free sessions at your Apple Store</h1>
          <p>
            Find out about the latest features and how to go further with your
            Apple devices.
          </p>
          <span>Sign up <MdKeyboardArrowRight/></span>
          <img src={stwo} alt="" />
        </section>
        <section>
          <h1>Apple Support app</h1>
          <p>
            Get help for all of your Apple products in one place, or connect
            with an expert.
          </p>
          <span>Download <HiMiniArrowUpRight/></span>
          <img className="phone-img" src={sthree} alt="" />
        </section>
        <section>
            <h1>My Support</h1>
            <p>Get up-to-date information about your Apple products including cover, repairs and much more.</p>
            <span>Sign in to My Support <MdKeyboardArrowRight/></span>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Support;
