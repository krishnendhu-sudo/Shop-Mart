import React from 'react'
import './BannerKids.css'
import kids_img from '../cln8.jpg'

const BannerKids = () => {
  return (
    <div className='bannerkids'>
      <div className="bannerkids-left">
        <h1>FLAT 50% OFF</h1>
        <p> <span className='num1'>12</span> Hours <span className='num2'>20</span> Mins</p>
        <button>Explore Now</button>
      </div>
      <div className="bannerkids-right">
        <img src={kids_img} alt="" style={{width:"210px", height:'50vh'}}/>
      </div>
    </div>
  )
}

export default BannerKids;
