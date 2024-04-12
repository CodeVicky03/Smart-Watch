import React from "react";
import "./Steve.css";
import one from "../../assets/two.png";
import two from "../../assets/three.png";
import three from "../../assets/five.png";
import four from "../../assets/eight.png";

const Steve = () => {
  return (
    <div className="steve">
      <h1>Our Products</h1>
      <p>Include all Products Select Yours !</p>
      <div>
        <section className="slide">
          <div className="slid">
            <img
              src={one}
              alt=""
              height="100%"
              width="100%"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
          <div className="slid">
            <img
              src={two}
              alt=""
              height="85%"
              width="85%"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
          <div className="slid">
            <img
              src={three}
              alt=""
              height="95%"
              width="85%"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
          <div className="slid">
            <img
              src={four}
              alt=""
              height="100%"
              width="100%"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
        </section>
        <p className="model" style={{ fontSize: "13px" }}>
          The Apple Watch series includes models from the original to the latest
          Series 7, SE, and Ultra, each designed with unique health, fitness,
          and connectivity features. The Ultra stands out for extreme sports
          durability. Apple's updates have enhanced functionality over time,
          adding ECG, blood oxygen monitoring, and better water resistance to
          cater to both everyday users and athletes.<br></br>
          <button>Buy Now</button> <br></br>
          <div>
            <span>Model 1</span>
            <span>Model 2</span>
            <span>Model 3</span>
            <span>Model 4</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Steve;
