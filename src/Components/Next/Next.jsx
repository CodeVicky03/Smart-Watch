import React from 'react'
import "./Next.css"
import nextimage from "../../assets/six.png"

const Next = () => {
  return (
    <div className='next-level'>
        <h1>Next-level adventure.</h1>
        <p>$240.50 *</p>
        <button>Buy Now</button>
        <img src={nextimage} alt=''/>
    </div>
  )
}

export default Next