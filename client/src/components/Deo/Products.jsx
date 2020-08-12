import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: [],
      favoriteProducts: [],
    };

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    console.log('Data in product:', this.props);
    axios
      .get(
        `http://18.224.37.110/products/${this.props.currentProduct.id}/related`
      )
      .then(({ data }) => {
        console.log(data);
        return { data };
      })
      .then((relatedProductID) => {
        console.log('RelatedID: ', relatedProductID);
        //console.log(this.getRelatedProducts(relatedProductID).then);
        this.getRelatedProducts(relatedProductID)
          .then((result) => {
            console.log('return related Products: ', result);
            let newState = result.map((item) => {
              return item.data;
            });
            console.log('NewState ', newState);
            this.setState({
              relatedProducts: newState,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log('Error getting related products: ', error);
      });
  }

  /*
    Promise all for getting all related products
  */
  getRelatedProducts(arrayOfID) {
    const arrayOfPromise = arrayOfID.data.map((id) => {
      return axios.get(`http://18.224.37.110/products/${id}`).then().catch();
    });

    return Promise.all(arrayOfPromise);
  }

  getImage(id) {
    axios
      .get(`http://18.224.37.110/products/${id}/styles`)
      .then((image) => {
        console.log('Image', image);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <h6>RELATED PRODUCTS</h6>
        <Row>
          <div className='productWrapper'>
            <div className='productCardContainer'>
              {this.state.relatedProducts.length !== 0 ? (
                <ProductCard products={this.state.relatedProducts} />
              ) : (
                ''
              )}
            </div>
          </div>
        </Row>
        <h6>YOUR OUTFIT</h6>
        <Row>
          <div className='productWrapper'>
            <div className='productCardContainer'>
              {this.state.relatedProducts.length !== 0 ? (
                <ProductCard products={this.state.relatedProducts} />
              ) : (
                ''
              )}
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Products;
