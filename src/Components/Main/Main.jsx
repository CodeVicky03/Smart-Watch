import React from "react";
import "./Main.css";
import watch from "../../assets/seven.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <section>
        <h1>
          The Power to Be <br></br>
          <span>Your</span> Best
        </h1>
        <p>
          The Apple Watch redefines wearable tech by blending health and fitness
          tracking with seamless iPhone connectivity, setting a new standard
          with its stylish design and intuitive use since 2015.
        </p>
        <span>$214.50</span>
        <div>
          <button>Buy Now</button>
        </div>
      </section>
      <section>
        <div className="image">
          <img src={watch} alt="" />
          <div className="shadow"></div>
        </div>
        <div className="rate">
          <p>
            4.5 RATED <br></br>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </p>
          <p>
            $16 <br></br>
            <span>STRAPS</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
