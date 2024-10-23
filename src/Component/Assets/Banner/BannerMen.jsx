import React from 'react'
import './BannerMen.css';
import men_img from '../cln2.jpg';

const BannerMen = () => {
  return (
    <div className='bannermen'>
      <div className="bannermen-left">
        <h1>FLAT 50% OFF</h1>
        <p> <span className='num1'>12</span> Hours <span className='num2'>20</span> Mins</p>
        <button>Explore Now</button>
      </div>
      <div className="bannermen-right">
        <img src={men_img} alt=""  style={{width:"210px", height:'50vh'}}/>
      </div>
    </div>
  )
}

export default BannerMen;
