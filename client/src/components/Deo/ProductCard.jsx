import React from 'react';

const ProductCard = ({ products }) => {
  return products.map((item, index) => {
    if (index < 4) {
      return (
        <div className='productCard' key={item.id}>
          <div className='star'></div>
          <img
            style={{ height: '300px', width: '250px' }}
            src='https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
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

export default ProductCard;
