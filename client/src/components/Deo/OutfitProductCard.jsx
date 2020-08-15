import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(farFaStar, fas);

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
    } else {
      return;
    }
    //localStorage.setItem('FEC', JSON.stringify(products));
  }, []);

  const [leftCount, setLeftCount] = useState(0);
  const increment = () => {
    setLeftCount((prev) => prev + 1);
  };
  const [rightCount, setRightCount] = useState(products.length);
  const decrement = () => {
    setLeftCount((prev) => {
      if (prev !== 0) {
        return leftCount - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      {console.log('Rendering')}
      <h6 className='relatedProductTitle'>YOUR OUTFIT</h6>
      <div className='productWrapper'>
        <div className='productCardContainer'>
          {leftCount !== 0 ? (
            <i
              className='arrow left'
              onClick={() => {
                decrement();
              }}
            ></i>
          ) : (
            ''
          )}
          {products.map((item, index) => {
            if (index < 4) {
              return (
                <div className='productCard' key={index}>
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className='productStarIcon'
                    onClick={() => {
                      // Remove product from outfit
                    }}
                  />
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
          {leftCount !== rightCount - 1 ? (
            <i
              className='arrow right'
              onClick={() => {
                increment();
              }}
            ></i>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default OutfitProductCard;
