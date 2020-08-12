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
      relatedProductsNav: [],
      favoriteProducts: [],
      leftNav: false,
    };

    this.getImage = this.getImage.bind(this);
    this.rightArrowNav = this.rightArrowNav.bind(this);
    this.leftArrowNav = this.leftArrowNav.bind(this);
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
            this.setState({
              relatedProducts: newState,
              relatedProductsNav: newState,
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

  rightArrowNav(e) {
    console.log('Clicked right');
    this.setState({
      leftNav: true,
      relatedProductsNav: this.state.relatedProducts.slice(1),
    });
  }

  leftArrowNav(e) {
    console.log('Clicked Left');
    this.setState({
      relatedProductsNav: this.state.relatedProducts,
    });
  }

  render() {
    return (
      <Container>
        <h6>RELATED PRODUCTS</h6>
        <Row>
          <div className='productWrapper'>
            <div className='productCardContainer'>
              {this.state.leftNav ? (
                <i class='arrow left' onClick={this.leftArrowNav}></i>
              ) : (
                ''
              )}
              {this.state.relatedProducts.length !== 0 ? (
                <ProductCard products={this.state.relatedProductsNav} />
              ) : (
                ''
              )}
              <i class='arrow right' onClick={this.rightArrowNav}></i>
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
