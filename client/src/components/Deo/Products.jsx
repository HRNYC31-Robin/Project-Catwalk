import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import OutfitProductCard from './OutfitProductCard.jsx';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      relatedProductsID: [],
      relatedProductsNav: [],
      favoriteProducts: [
        {
          id: 0,
          name: 'Add to Outfit',
          category: '',
        },
      ],
      leftNav: false,
      startPosition: 1,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    console.log('Data in current props:', this.props);
    axios
      .get(
        `http://18.224.37.110/products/${this.props.currentProduct.id}/related`
      )
      .then(({ data }) => {
        console.log(data);
        return { data };
      })
      .then((relatedProductID) => {
        this.getRelatedProducts(relatedProductID)
          .then((result) => {
            console.log('return related Products: ', result);
            let newState = result.map((item) => {
              return item.data;
            });
            this.setState({
              relatedProducts: newState,
              relatedProductsNav: newState,
              relatedProductsID: relatedProductID,
            });
          })
          .then(() => {
            this.props.updateRelatedProductList(this.state.relatedProducts);
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

  handleNext(e) {
    console.log('Clicked right: ', this.state.startPosition);
    let index = this.state.startPosition;
    if (this.state.relatedProducts.length - this.state.startPosition > 3) {
      this.setState({
        leftNav: true,
        startPosition: index + 1,
        relatedProductsNav: this.state.relatedProducts.slice(
          index,
          this.state.relatedProducts.length
        ),
      });
    }
    console.log(this.state.relatedProductsNav, ' clicked right');
  }

  handlePrev(e) {
    console.log('Clicked Left');
    let index = this.state.startPosition - 1;
    console.log(this.state.relatedProductsNav, ' clicked left');
    if (this.state.startPosition !== 0) {
      this.setState({
        startPosition: index,
        relatedProductsNav: this.state.relatedProducts.slice(
          index,
          this.state.relatedProducts.length
        ),
      });
    }
  }

  render() {
    return (
      <Container>
        <h6>RELATED PRODUCTS</h6>
        <Row>
          <div className='productWrapper'>
            <div className='productCardContainer'>
              {this.state.leftNav ? (
                <i className='arrow left' onClick={this.handlePrev}></i>
              ) : (
                ''
              )}
              {this.state.relatedProducts.length !== 0 ? (
                <RelatedProductCard
                  products={this.state.relatedProductsNav}
                  clickCurrent={this.props.handleChangeProductClick}
                />
              ) : (
                ''
              )}
              <i className='arrow right' onClick={this.handleNext}></i>
            </div>
          </div>
        </Row>
        <h6>YOUR OUTFIT</h6>
        <Row>
          <div className='productWrapper'>
            <div className='productCardContainer'>
              {this.state.relatedProducts.length !== 0 ? (
                <OutfitProductCard products={this.state.favoriteProducts} />
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
