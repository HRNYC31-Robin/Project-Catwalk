import React, { useState, useEffect } from 'react';
import getImageAPIHelper from '../../../../helpers/getImageAPIHelper.js';
import StarRating from '../common/StarRating.jsx';

const OutfitProductCard = (props) => {
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

  const updateOutfit = async () => {
    const mergedObject = await getImageAPIHelper(props.currentProduct);
    setOutFit((previousState) => {
      previousState.unshift(mergedObject);
      const unique = [
        ...new Map(previousState.map((item) => [item['id'], item])).values(),
      ];
      localStorage.setItem('FEC', JSON.stringify(unique));
      return unique;
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
    setOutFit((previousState) => {
      let tempState = previousState.slice();
      tempState.splice(index, 1);
      localStorage.setItem('FEC', JSON.stringify(tempState));
      return tempState;
    });
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
          {products.length > 4 && leftArrow !== 0 ? (
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
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={
                      item.results.length !== 0 &&
                      item.results[0].photos[0].thumbnail_url !== null
                        ? item.results[0].photos[0].thumbnail_url
                        : 'https://img.icons8.com/fluent/96/000000/not-applicable.png'
                    }
                    //src={''}
                    alt='ProductImage'
                    onClick={
                      item.id === 'NA'
                        ? () => {
                          updateOutfit();
                          setRightArrow((prev) => {
                            return prev + 1;
                          });
                        }
                        : () => {}
                    }
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
