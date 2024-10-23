// NewCollections1.jsx
import React from 'react';
import './NewCollections1.css';
import new_collection from '../Assets/Collections1';
import Items from '../Items/Items';

const NewCollections1 = () => {
  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection-items">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.Image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections1;
