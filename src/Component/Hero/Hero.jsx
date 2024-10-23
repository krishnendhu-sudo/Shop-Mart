import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand-icon.png';
import { FaArrowRight } from 'react-icons/fa';
import heroImg from '../Assets/hero-img-3.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={handIcon} alt="" style={{height:"100px", width:"100px"}}/>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" style={{height:"450", width:"450px"}} />
      </div>
    </div>
  );
}

export default Hero;
