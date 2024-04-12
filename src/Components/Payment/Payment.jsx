import React from 'react'
import "./Payment.css"
import apay from "../../assets/apay.png"
import upi from "../../assets/free-upi-2085056-1747946.png"
import gpay from "../../assets/gpay.png"
import paytm from "../../assets/paytm_icon-icons.com_62778.png"
import ppay from "../../assets/phonepe-logo-icon.png"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Payment = () => {

  var navigate = useNavigate()

  return (
    <div className='payment'>
        <i onClick={()=> navigate("/Products")}><FaArrowLeftLong/></i>
        <h1>Select Payment Method</h1>
        <section>
            <img src={apay} alt=''/>
            <p>Apple Pay</p>
            <i><IoMdArrowDroprightCircle/></i>
        </section>
        <section>
            <img src={upi} alt=''/>
            <p>UPI</p>
            <i><IoMdArrowDroprightCircle/></i>
        </section>
        <section>
            <img src={gpay} alt=''/>
            <p>Google Pay</p>
            <i><IoMdArrowDroprightCircle/></i>
        </section>
        <section>
            <img src={paytm} alt=''/>
            <p>PayTM</p>
            <i><IoMdArrowDroprightCircle/></i>
        </section>
        <section>
            <img src={ppay} alt=''/>
            <p>Phone Pay</p>
            <i><IoMdArrowDroprightCircle/></i>
        </section>
    </div>
  )
}

export default Payment