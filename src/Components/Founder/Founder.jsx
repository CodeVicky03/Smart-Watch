import React from "react";
import "./Founder.css";
import steve from "../../assets/sj.png";
import { FaApple } from "react-icons/fa";

const Founder = () => {
  return (
    <div id="Founder" className="founder">
      <h1>
      <FaApple /> Founder of Apple
      </h1>
      <div>
      <img src={steve} alt="" />
      <p>
        Steve Jobs, co-founder of Apple Inc., was a visionary and innovator in
        the tech industry, known for his role in making technology accessible
        and desirable. Born in 1955, he launched Apple from his garage in 1976,
        introducing groundbreaking products like the Apple II, Macintosh, iPod,
        iPhone, and iPad. After a brief departure, he returned to Apple in 1996,
        revitalizing the company with a series of successful products. Jobs also
        acquired The Graphics Group, later known as Pixar, making significant
        contributions to the animation industry. Despite criticisms for his
        management style, Jobs' emphasis on design and innovation left a lasting
        legacy on technology and culture. He passed away in 2011, leaving behind
        a transformed tech landscape.
      </p>
      </div>
    </div>
  );
};

export default Founder;
