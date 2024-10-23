import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from './../Context/ShopContext';
import Breadcrums from '../Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';

const Product = () => {
  const { AllProduct } = useContext(ShopContext);
  const {productId}=useParams();
  const Product1 = AllProduct.find((e) => e.id === Number(productId));

  // console.log(, productId);
  
  return (
    <div>
      <Breadcrums product1={Product1} />
      <ProductDisplay product1={product1}/>
    </div>
  );
}

export default Product;
