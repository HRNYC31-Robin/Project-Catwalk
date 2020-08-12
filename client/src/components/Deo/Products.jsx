import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: [],
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
      <div className='container-fluid main'>
        <div className='row'>
          <div className='col-sm-12'>
            <div id='inam' className='carousel slide' data-ride='carousel'>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                    <div className='row'>
                      {console.log(this.state.relatedProducts)}
                      <ProductCard
                        products={this.state.relatedProducts}
                      ></ProductCard>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href='#inam'
                className='carousel-control-prev'
                data-slide='prev'
              >
                <span className='carousel-control-prev-icon'></span>
              </a>
              <a
                href='#inam'
                className='carousel-control-next'
                data-slide='next'
              >
                <span className='carousel-control-next-icon'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
