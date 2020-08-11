import React from 'react';

const ProductCard = ({ products }) =>
  products.map((item) => {
    return (
      <div className='card'>
        <img src='' alt='' className='card-img-top' />
        <div className='card-body'>
          <p className='card-text cat'>{item.category}</p>
          <h6 className='card-title'>{item.name}</h6>
          <p className='card-text'>${item.default_price}</p>
          <p> STAR PLACEHOLDER</p>
        </div>
      </div>
    );
  });
export default ProductCard;
