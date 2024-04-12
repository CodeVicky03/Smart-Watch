import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./Components/Products/Products.jsx";
import Support from "./Components/Support/Support.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Payment from "./Components/Payment/Payment.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
);
