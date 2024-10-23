import React from 'react'
import './BannerWomen.css'
import women_img from '../cln1.jpg'

const BannerWomen = () => {
  return (
    <div className='bannerwomen'>
      <div className="bannerwomen-left">
        <h1>FLAT 50% OFF</h1>
        <p> <span className='num1'>12</span> Hours <span className='num2'>20</span> Mins</p>
        <button>Explore Now</button>
      </div>
      <div className="bannerwomen-right">
        <img src={women_img} alt="" style={{width:"210px", height:'50vh'}} />
      </div>
    </div>
  )
}

export default BannerWomen ;
