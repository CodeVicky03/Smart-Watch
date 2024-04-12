import React, { useState } from "react";
import "./Products.css";
import Navbar from "../Navbar/Navbar";
import item from "./item.js";
import Footer from "../Footer/Footer";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { SiClockify } from "react-icons/si";
import Single from "./Single.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Products = () => {
  const [productID, setproductID] = useState("1");
  const [ProductChange, setProductChange] = useState("1");
  const [showProduct, setShowProduct] = useState(false);

  const items = item.find(({ id }) => id === ProductChange);

  function handlechange(num) {
    setProductChange(num);
  }

  const totalProducts = 6;

  function handlebuy(id) {
    setproductID(id);
    setShowProduct(true);
  }

  function handleNext() {
    setProductChange((prev) => {
      const next = parseInt(prev) + 1;
      return next > totalProducts ? "1" : next.toString();
    });
  }

  function handlePrev() {
    setProductChange((prev) => {
      const prevNum = parseInt(prev) - 1;
      return prevNum < 1 ? totalProducts.toString() : prevNum.toString();
    });
  }

  return (
    <div className="products">
      <Navbar />
      <div>
        {items && (
          <div key={items.id}>
            <h1 className="title">{items.model}</h1>
            <section className="main-products">
              <div>
                <div className="hours-1">
                  <p>{items.hourone}</p>
                  <span>of normal use</span>
                </div>
                <div className="hours-2">
                  <p>{items.hourtwo}</p>
                  <span>
                    Without use in low<br></br> power mode
                  </span>
                </div>
                <div className="hours-3">
                  <p>{items.hourthree}</p>
                  <span>
                    Normal use with low<br></br> power settings enabled
                  </span>
                </div>
              </div>
              <div>
                <img src={items.Image} alt="" />
              </div>
              <ul>
                <li>{items.point}</li>
                <li>{items.pointtwo}</li>
                <li>{items.pointthree}</li>
                <li>{items.pointfour}</li>
                <p>
                  The Apple Watch is a versatile smartwatch that offers fitness
                  tracking, health-oriented capabilities, and seamless
                  integration with iOS devices, enhancing connectivity and
                  personal technology use.
                </p>
                <div className="circle-icons">
                  <p>
                    <AiFillThunderbolt />
                  </p>
                  <p>
                    <IoMdCall />
                  </p>
                  <p>
                    <SiClockify />
                  </p>
                </div>
                <button onClick={() => handlebuy(items.id)}>Buy Now</button>
              </ul>
            </section>
          </div>
        )}
        <div className="buttons">
          <button
            onClick={() => handlechange("1")}
            style={{
              padding: ProductChange === "1" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "1" ? "#111111" : "",
            }}
          ></button>
          <button
            onClick={() => handlechange("2")}
            style={{
              padding: ProductChange === "2" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "2" ? "#111111" : "",
            }}
          ></button>
          <button
            onClick={() => handlechange("3")}
            style={{
              padding: ProductChange === "3" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "3" ? "#111111" : "",
            }}
          ></button>
          <button
            onClick={() => handlechange("4")}
            style={{
              padding: ProductChange === "4" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "4" ? "#111111" : "",
            }}
          ></button>
          <button
            onClick={() => handlechange("5")}
            style={{
              padding: ProductChange === "5" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "5" ? "#111111" : "",
            }}
          ></button>
          <button
            onClick={() => handlechange("6")}
            style={{
              padding: ProductChange === "6" ? "3px 20px" : "4px",
              backgroundColor: ProductChange === "6" ? "#111111" : "",
            }}
          ></button>
          <div>
            <section>
            <p onClick={handlePrev}>
              <MdKeyboardArrowLeft />
            </p>
            <p onClick={handleNext}>
              <MdKeyboardArrowRight />
            </p>
            </section>
          </div>
        </div>
      </div>
      <div
        className="single-div"
        style={{
          display: showProduct ? "block" : "none",
        }}
      >
        <Single productID={productID} setShowProduct={setShowProduct} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
