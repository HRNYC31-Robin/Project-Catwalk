import React from 'react';

const ProductCard = ({ products }) => {
  return products.map((item, index) => {
    if (index !== 3) {
      return (
        <div className='productCard'>
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

/*
<div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card'>
            <img
              src='https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
              alt=''
              className='card-img-top'
            />
            <div className='card-body'>
              <p className='card-text cat'>{item.category}</p>
              <h6 className='card-title'>{item.name}</h6>
              <p className='card-text'>${item.default_price}</p>
              <p> STAR PLACEHOLDER</p>
            </div>
          </div>
        </div> */
