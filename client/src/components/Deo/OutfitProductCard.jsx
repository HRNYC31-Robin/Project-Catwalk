import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutfitProductCard = (props) => {
  const placeHolder = {
    category: '',
    name: 'ADD TO OUTFIT',
    // eslint-disable-next-line camelcase
    default_price: '',
    image: 'https://img.icons8.com/nolan/64/plus-math.png',
  };

  const [products, setOutFit] = useState([placeHolder]);

  const updateOutfit = () => {
    setOutFit((prevState) => {
      prevState.unshift(props.currentProduct);
      var uniqueOutfit = prevState.filter(function (item, index) {
        return prevState.indexOf(item) === index;
      });
      localStorage.setItem('FEC', JSON.stringify(uniqueOutfit));
      return uniqueOutfit;
    });
  };

  useEffect(() => {
    if (localStorage.getItem('FEC') !== null) {
      const localData = localStorage.getItem('FEC');
      console.log('STORAGE: ', JSON.parse(localData));
      setOutFit((prev) => {
        return JSON.parse(localData);
      });
    }
    //localStorage.setItem('FEC', JSON.stringify(products));
  }, []);

  return (
    <div>
      <h6 className='relatedProductTitle'>YOUR OUTFIT</h6>
      <div className='productWrapper'>
        <div className='productCardContainer'>
          <i className='arrow left' onClick={() => {}}></i>
          {products.map((item, index) => {
            if (index < 4) {
              return (
                <div className='productCard' key={index}>
                  <span
                    className='productStarIconRelatedProd'
                    onClick={() => {
                      // Remove product from outfit
                    }}
                  >
                    &#9733;
                  </span>
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={item.image}
                    alt='ProductImage'
                    onClick={() => {
                      updateOutfit();
                      // props.handleOutFitAddition(props.currentProduct);
                    }}
                  />
                  <p className='productCat'>{item.category}</p>
                  <p className='productTitle'>{item.name}</p>
                  <p className='productPrice'>${item.default_price}</p>
                  <p> STAR PLACEHOLDER</p>
                </div>
              );
            }
          })}
          <i className='arrow right' onClick={() => {}}></i>
        </div>
      </div>
    </div>
  );
};

export default OutfitProductCard;
