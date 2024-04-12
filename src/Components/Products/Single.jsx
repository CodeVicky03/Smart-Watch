import React from "react";
import item from "./item.js";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { TbCircleCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Single = ({ productID, setShowProduct }) => {

  var navigate = useNavigate()

  const i = item.find(({ id }) => id === productID);

  return (
    <div className="single">
      <span onClick={()=> setShowProduct(false)}>
        <HiMiniXMark />
      </span>
      {i && (
        <>
          <div className="cart">
            <p>{i.model}</p>
            <img src={i.Image} alt="" />
          </div>
          <section>
            <div className="info">
              <p>{i.hourone} Normal use</p>
              <p>{i.hourthree} Power mode</p>
              <p>{i.hourthree} Low power settings enabled</p>
            </div>
            <ul>
              <li>
                <MdKeyboardArrowRight />
                {i.point}
              </li>
              <li>
                <MdKeyboardArrowRight />
                {i.pointtwo}
              </li>
              <li>
                <MdKeyboardArrowRight />
                {i.pointthree}
              </li>
              <li>
                <MdKeyboardArrowRight />
                {i.pointfour}
              </li>
            </ul>
            <p>
              {i.price}
              <span>
                <TbCircleCheck /> Free delivery and Fastest delivery
              </span>
            </p>
          </section>
          <div className="in">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Number" />
            <input type="email" placeholder="Email" />
            <textarea type="text" rows={4} placeholder="Address" />
            <button onClick={()=> navigate("/Payment")}>Add - Payment Method</button>
            <p>
              @ Ordering a watch combines timeless elegance with the convenience
              of modern shopping, perfectly encapsulating style at your
              fingertips.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Single;
