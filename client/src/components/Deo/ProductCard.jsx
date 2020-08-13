import React from 'react';
import axios from 'axios';

const ProductCard = ({ products, clickCurrent }) => {
  return products.map((item, index) => {
    if (index < 4) {
      return (
        <div
          className='productCard'
          key={item.id}
          onClick={() => {
            clickCurrent(item);
          }}
        >
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

export default ProductCard;
