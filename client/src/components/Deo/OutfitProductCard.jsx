import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(farFaStar, fas);

const OutfitProductCard = (props) => {
  console.log('INSIDE OUTFIT (PROPS) ', props);

  const placeHolder = {
    category: '',
    id: 'NA',
    name: 'ADD TO OUTFIT',
    // eslint-disable-next-line camelcase
    default_price: '',
    image: 'https://img.icons8.com/nolan/64/plus-math.png',
  };

  const [products, setOutFit] = useState([placeHolder]);

  const updateOutfit = () => {
    setOutFit((prevState) => {
      prevState.unshift(props.currentProduct);
      // ES6 Magic to prevent duplicates
      const unique = [
        ...new Map(prevState.map((item) => [item['id'], item])).values(),
      ];

      localStorage.setItem('FEC', JSON.stringify(unique));
      return unique;
    });
  };

  const [outFitOb, userOutSet] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('FEC') !== null) {
      const localData = localStorage.getItem('FEC');
      console.log('STORAGE: ', JSON.parse(localData));
      let newData = [];
      // MAke API call to get the images based on local state
      JSON.parse(localData).forEach((item) => {
        if (typeof item.id === 'number') {
          newData.push(item.id);
        }
      });
      console.log('STORAGE ID: ', newData);

      setOutFit((prev) => {
        return JSON.parse(localData);
      });
    } else {
      axios
        .get(`http://18.224.37.110/products/${props.currentProduct.id}/styles`)
        .then((productImage) => {
          console.log('LOADING IMAGE:', productImage.data);
          let temp = Object.assign({}, productImage.data, props.currentProduct);
          //console.log('New Product Image obj: ', temp);
          return temp;
        })
        .then((newObj) => {
          userOutSet(newObj);
        })
        .catch((error) => {
          console.log('Error on image load: ', error);
        });
    }
    //localStorage.setItem('FEC', JSON.stringify(products));
  }, [props.userOutFits]);

  const getProductsImage = function (imageID) {
    const arrayOfPromiseImage = imageID.map((id) => {
      return axios.get(`http://18.224.37.110/products/${id}/styles`);
    });
    return Promise.all(arrayOfPromiseImage);
  };

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
                    {' '}
                    &#10005;
                  </span>
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={item.image}
                    alt='ProductImage'
                    onClick={() => {
                      updateOutfit();
                      //props.handleOutFitAddition(item);
                      props.handleOutFitAddition(props.currentProduct);
                      console.log(outFitOb);
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
