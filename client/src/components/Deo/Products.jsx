import React from 'react';
import ProductCard from './ProductCard.jsx';
//import ProductCardContainer from '../../containers/ProductCardContainer.js';

const Products = function (props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12'>
          <div id='arrow' class='carousel slide' data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                      <ProductCard products={props.productList}></ProductCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href='arrow' className='carousel-control-prev' data-slide='prev'>
              <span class='carousel-control-prev-icon'></span>
            </a>
            <a href='arrow' className='carousel-control-next' data-slide='next'>
              <span class='carousel-control-next-icon'></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
