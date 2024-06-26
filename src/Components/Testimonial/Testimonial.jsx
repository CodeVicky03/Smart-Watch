import React from "react";
import "./Testimonial.css";
import steve from "../../assets/sj.png";
import { FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const Testimonial = () => {
  return (
    <div id="Customers" className="testimonial">
      <h1>Our Customers Love</h1>
      <p>What We Do</p>
      <div className="slide-main-div">
        <section>
          <div>
            <div>
              <img src={steve} alt="" />
              <span>Someone</span>
            </div>
            <p className="review">
              The Apple Watch brilliantly merges health tracking, connectivity,
              and style, making it an indispensable accessory for iPhone users.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div>
            <div>
              <img src={steve} alt="" />
              <span>Someone</span>
            </div>
            <p className="review">
              The Apple Watch brilliantly merges health tracking, connectivity,
              and style, making it an indispensable accessory for iPhone users.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div>
            <div>
              <img src={steve} alt="" />
              <span>Someone</span>
            </div>
            <p className="review">
              The Apple Watch brilliantly merges health tracking, connectivity,
              and style, making it an indispensable accessory for iPhone users.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div>
            <div>
              <img src={steve} alt="" />
              <span>Someone</span>
            </div>
            <p className="review">
              The Apple Watch brilliantly merges health tracking, connectivity,
              and style, making it an indispensable accessory for iPhone users.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </section>
        <p className="c-r">
          Our customers consistently praise our commitment to quality and
          innovation. They value the seamless experience our products provide,
          enhancing their daily lives. The positive feedback underscores their
          deep appreciation and trust in our brand.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
