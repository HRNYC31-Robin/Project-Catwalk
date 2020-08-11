import React from 'react';

const ProductCard = ({ products }) =>
  products.map((item) => {
    return (
      <div className='card' style={{ width: '300px' }} key={item.id}>
        <img src='' alt='' />
        <div className='card-body'>
          <div className='card-title'>{item.name}</div>
        </div>
      </div>
    );
  });
export default ProductCard;
