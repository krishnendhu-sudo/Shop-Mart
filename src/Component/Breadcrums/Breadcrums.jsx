import React from 'react'
import './Breadcrums.css'
import { FaArrowRight } from 'react-icons/fa';


const Breadcrums = (props) => {
   const {product1}=props;
  return (
    <div className='breadcrums'>
      HOME  <FaArrowRight/> SHOP  <FaArrowRight/> {product1.category} <FaArrowRight/> {product1.name}
    </div>
  )
}

export default Breadcrums
