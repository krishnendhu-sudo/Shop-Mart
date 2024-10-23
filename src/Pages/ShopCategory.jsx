import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import BannerKids from '../Component/Assets/Banner/BannerKids';
import { FaChevronDown } from 'react-icons/fa';
import Items from '../Component/Items/Items';



const ShopCategory = ({banner}) => {
  const {AllProduct}= useContext(ShopContext);
  

  return (
    <div className='shop-category'>
      <div className='shopcategory-banner'>{banner}</div>
      <div className="shopcategory-indexSort">
        <p>
         <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
        Sort by <FaChevronDown />
        </div>
      </div>
      <div className="shopcategory-product">
        {AllProduct.map((item,i)=>{
          if(banner.category===item.category){
             return <Items  key={i}
             id={item.id}
             name={item.name}
             image={item.Image}
             new_price={item.new_price}
             old_price={item.old_price}/>
          }
          else{
            return(null);
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
