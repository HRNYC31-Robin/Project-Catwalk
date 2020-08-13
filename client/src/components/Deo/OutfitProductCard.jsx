import React from 'react';

const OutfitProductCard = ({ products }) => {
  return products.map((item, index) => {
    if (index < 4) {
      return (
        <div className='productCard' key={item.id}>
          <div
            className='productStarIcon'
            onClick={() => {
              console.log('Delete outfit');
            }}
          ></div>
          <img
            style={{ height: '300px', width: '250px' }}
            src='https://img.icons8.com/small/96/000000/plus-math.png'
            alt='ProductImage'
          />
          <p className='productCat'>{item.category}</p>
          <p className='productTitle'>{item.name}</p>
          <p className='productPrice'>${item.default_price}</p>
          <p> STAR PLACEHOLDER</p>
        </div>
      );
    }
  });
};

export default OutfitProductCard;
