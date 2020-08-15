import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductComparison from './ProductComparison.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(farFaStar, fas);

const RelatedProductCard = (props) => {
  const [modalDisplay, setModal] = useState(() => {
    return false;
  });
  const [products, setProducts] = useState([]);

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
        console.log(data);
        return { data };
      })
      .then((relatedProductID) => {
        console.log(relatedProductID);
        getRelatedProducts(relatedProductID)
          .then((result) => {
            let newState = result.map((item) => {
              return item.data;
            });
            return newState;
          })
          .then((results) => {
            setProducts(results);
            setRightCount(results.length);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log('Error getting related products: ', error);
      });
  }, [props.currentProduct]);

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
                console.log('Clicked Left: (leftCount)', leftCount);
                console.log('Clicked right: (rightCount)', rightCount);
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
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className='productStarIcon'
                    onClick={() => {
                      setModal(true);
                    }}
                  />
                  <img
                    style={{ height: '300px', width: '250px' }}
                    src='https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
                    alt='ProductImage'
                    onClick={() => {
                      props.handleChangeProductClick(item);
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
          <i
            className='arrow right'
            onClick={() => {
              console.log('Clicked right (leftCount): ', leftCount);
              console.log('Clicked right (rightCount): ', rightCount);
              increment();
            }}
          ></i>
          <ProductComparison
            displayModal={modalDisplay}
            closeModalFunc={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;

// class ProductCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       relatedProductImage: [],
//     };

//     this.getPhoto = this.getPhoto.bind(this);
//   }

//   componentDidMount() {
//     console.log('OnMOunt: ', this.props);
//     let relatedProductID = [];
//     this.props.products.forEach((item) => {
//       //console.log(item);
//       relatedProductID.push(item.id);
//     });

//     this.getImage(relatedProductID);
//   }

//   getImage(relatedProductID) {
//     console.log(relatedProductID, ' Related Product ID');
//     this.getImagePromise(relatedProductID)
//       .then((result) => {
//         console.log('Rows of ProductImage: ', result);
//         let newState = result.map((item) => {
//           console.log(item.data);
//           return item.data;
//         });
//         //let objCombined = Object.assign(newState, this.props);

//         this.setState({
//           relatedProductImage: newState,
//         });
//         console.log(this.state.relatedProductImage, 'Current State');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   getImagePromise(arrayOfID) {
//     const arrayOfPromise = arrayOfID.map((id) => {
//       return axios
//         .get(`http://18.224.37.110/products/${id}/styles`)
//         .then()
//         .catch();
//     });
//     return Promise.all(arrayOfPromise);
//   }
//   getPhoto(id) {
//     console.log(id, 'Index');

//     this.state.relatedProductImage.forEach((item) => {
//       if (Number(item.product_id) === id) {
//         console.log(item.results[0].photos[0].thumbnail_url);
//         //return item.results[0].photos[0].thumbnail_url;
//         return 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
//       }
//     });

//     return 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.props.products.map((item, index) => {
//           if (index < 4) {
//             return (
//               <div className='productCard' key={item.id}>
//                 <div className='star'></div>
//                 <img
//                   style={{ height: '300px', width: '250px' }}
//                   src={this.getPhoto(item.id)}
//                   // src={
//                   //   item.id === this.state.relatedProductImage.product_id
//                   //     ? this.state.results[0].photos[0].thumbnail_url
//                   //     : ''
//                   // }
//                 />
//                 <p className='productCat'>{item.category}</p>
//                 <p className='productTitle'>{item.name}</p>
//                 <p className='productPrice'>${item.default_price}</p>
//                 <p> STAR PLACEHOLDER</p>
//               </div>
//             );
//           }
//         })}
//       </React.Fragment>
//     );
//   }
// }
