import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../common/StarRating.jsx';

const OutfitProductCard = (props) => {
  console.log('INSIDE OUTFIT (PROPS) ', props);

  // Place holder object for add
  const placeHolder = {
    category: '',
    id: 'NA',
    name: 'ADD TO OUTFIT',
    // eslint-disable-next-line camelcase
    default_price: '',
    results: [
      {
        photos: [
          // eslint-disable-next-line camelcase
          { thumbnail_url: 'https://img.icons8.com/nolan/64/plus-math.png' },
        ],
      },
    ],
  };

  const [products, setOutFit] = useState([placeHolder]);

  const updateOutfit = () => {
    // API call to get Image url based on current product
    axios
      .get(`http://18.224.37.110/products/${props.currentProduct.id}/styles`)
      .then((productImage) => {
        console.log('LOADING IMAGE:', productImage.data);
        // Merge current object and image data
        let temp = Object.assign({}, productImage.data, props.currentProduct);
        //console.log('New Product Image obj: ', temp);
        return temp;
      })
      .then((newObject) => {
        console.log('RENDEDERING');
        setOutFit((previousState) => {
          previousState.unshift(newObject);
          const unique = [
            ...new Map(
              previousState.map((item) => [item['id'], item])
            ).values(),
          ];
          //userOutSet(newObj);
          localStorage.setItem('FEC', JSON.stringify(unique));
          return unique;
        });
      })
      .catch((error) => {
        console.log('Error on image load: ', error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('FEC') !== null) {
      const localData = localStorage.getItem('FEC');
      setRightArrow(() => {
        return JSON.parse(localData).length;
      });
      setOutFit((prev) => {
        return JSON.parse(localData);
      });
    }
  }, [props.userOutFits]);

  const removedOutfit = (index) => {
    console.log('USER Clicked: ', index);
    setOutFit((previousState) => {
      console.log('CURRENT: ', previousState);
      let tempState = previousState.slice();
      tempState.splice(index, 1);
      console.log(tempState);
      localStorage.setItem('FEC', JSON.stringify(tempState));
      return tempState;
    });
    // console.log(products.splice(id, 1));
  };

  /*
    controllers for right and left arrows
  */

  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(products.length);

  return (
    <div>
      <h6 className='relatedProductTitle'>YOUR OUTFIT</h6>
      <div className='productWrapper'>
        <div className='productCardContainer'>
          {products.length > 4 ? (
            <i
              className='arrow left'
              onClick={() => {
                setLeftArrow((prev) => {
                  if (prev !== 0) {
                    return prev - 1;
                  } else {
                    return 0;
                  }
                });
              }}
            ></i>
          ) : (
            ''
          )}
          {products.slice(leftArrow, rightArrow).map((item, index) => {
            if (index < 4) {
              return (
                <div className='productCard' key={index}>
                  {item.id !== 'NA' ? (
                    <span
                      className='productStarIconRelatedProd'
                      onClick={() => {
                        // Remove product from outfit
                        removedOutfit(index);
                      }}
                    >
                      &#10005;
                    </span>
                  ) : (
                    ''
                  )}
                  {console.log('IN OUTFIT LOOP:', item)}
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={item.results[0].photos[0].thumbnail_url}
                    //src={''}
                    alt='ProductImage'
                    onClick={() => {
                      updateOutfit();
                      console.log('Product.length: ', products.length);
                      setRightArrow((prev) => {
                        return prev + 1;
                      });
                      //props.handleOutFitAddition(props.currentProduct);
                    }}
                  />
                  <p className='productCat'>{item.category}</p>
                  <p className='productTitle'>{item.name}</p>
                  {item.id !== 'NA' ? (
                    <p className='productPrice'>${item.default_price}</p>
                  ) : (
                    ''
                  )}
                  {item.id !== 'NA' ? <StarRating prodId={item.id} /> : ''}
                </div>
              );
            }
          })}
          {products.length > 4 && leftArrow < products.length - 1 ? (
            <i
              className='arrow right'
              onClick={() => {
                console.log('THE CLICKED RIGHT: ', rightArrow);
                console.log('THE CLICKED LEFT: ', leftArrow);
                console.log('THE PRODUCT LENGTH: ', products.length);

                setLeftArrow((prev) => {
                  return prev + 1;
                });
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
