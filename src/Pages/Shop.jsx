import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollections1 from './../Component/NewCollections1/NewCollections1';
import NewsLetter from '../Component/NewsLatter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections1/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
