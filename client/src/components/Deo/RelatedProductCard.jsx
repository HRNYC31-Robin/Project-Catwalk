import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductComparison from './ProductComparison.jsx';
import StarRating from '../common/StarRating.jsx';

const RelatedProductCard = (props) => {
  const [modalDisplay, setModal] = useState(() => {
    return false;
  });
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickProduct] = useState([]);

  const closeModal = () => {
    setModal(false);
  };

  /*
    Index for iteration
  */
  const [leftCount, setLeftCount] = useState(0);
  const increment = () => {
    setLeftCount((prev) => prev + 1);
  };
  const [rightCount, setRightCount] = useState(props.relatedProducts.length);
  const decrement = () => {
    setLeftCount((prev) => {
      if (prev !== 0) {
        return leftCount - 1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    axios
      .get(`http://18.224.37.110/products/${props.currentProduct.id}/related`)
      .then(({ data }) => {
        return { data };
      })
      .then((relatedProductID) => {
        getRelatedProducts(relatedProductID)
          .then((result) => {
            let newState = result.map((item) => {
              return item.data;
            });
            return newState;
          })
          .then((results) => {
            let productId = results.map((item) => {
              return item.id;
            });
            getRelatedProductsImage(productId)
              .then((imageData) => {
                let newState = imageData.map((item, index) => {
                  let temp = Object.assign({}, item.data, results[index]);
                  return temp;
                });
                return newState;
              })
              .then((resultArray) => {
                props.updateRelatedProductList(resultArray);
                setProducts(resultArray);
                setRightCount(results.length);
              })
              .catch((error) => {
                console.log('Error loading images: ', error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log('Error getting related products: ', error);
      });
  }, [props.currentProduct]);

  const getRelatedProductsImage = function (relatedProducts) {
    const arrayOfPromiseImage = relatedProducts.map((id) => {
      return axios
        .get(`http://18.224.37.110/products/${id}/styles`)
        .then()
        .catch();
    });
    return Promise.all(arrayOfPromiseImage);
  };

  const getRelatedProducts = function (arrayOfID) {
    const arrayOfPromise = arrayOfID.data.map((id) => {
      return axios.get(`http://18.224.37.110/products/${id}`).then().catch();
    });
    return Promise.all(arrayOfPromise);
  };

  return (
    <div>
      <h6 className='relatedProductTitle'>RELATED PRODUCTS</h6>
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
          {products.slice(leftCount, rightCount).map((item, index) => {
            if (index < 4) {
              return (
                <div className='productCard' key={index}>
                  <span
                    className='productStarIconRelatedProd'
                    onClick={() => {
                      setModal(true);
                      //Using item.id to get display product
                      setClickProduct(item);
                    }}
                  >
                    &#9733;
                  </span>
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src={
                      // Ensure result is not empty
                      item.results.length !== 0 &&
                      item.results[0].photos[0].thumbnail_url !== null
                        ? item.results[0].photos[0].thumbnail_url
                        : 'https://img.icons8.com/fluent/96/000000/not-applicable.png'
                    }
                    alt='ProductImage'
                    onClick={() => {
                      props.handleChangeProductClick(item);
                      window.history.replaceState(
                        null,
                        '',
                        `/products/${item.id}`
                      );
                      props.handleChangeURLClick(`/products/${item.id}`);
                    }}
                  />
                  <p className='productCat'>{item.category}</p>
                  <p className='productTitle'>{item.name}</p>
                  <p className='productPrice'>${item.default_price}</p>
                  <StarRating prodId={item.id} />
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
          <ProductComparison
            displayModal={modalDisplay}
            closeModalFunc={closeModal}
            currentProduct={props.currentProduct}
            clickedProduct={clickedProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;
