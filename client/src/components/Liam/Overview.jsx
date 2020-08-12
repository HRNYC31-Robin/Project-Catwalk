import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';

const Overview = function ({currentProduct}) {
  return (
    <Container className='overviewContainer'>
      <div class="image-gallery">
        Image Gallery
      </div>

      <div class="upper-right">
        <div class="product-info">
          Product-info
        </div>
        <div class="style-selector">
          Style Selector
        </div>
        <div class="add-to-cart">
          Add to cart!
        </div>
      </div>

      <div class="product-blurb">
        Product-Blurb
      </div>

      <div class="gmo-thing">
        GMO
      </div>
    </Container>
  );
};

export default Overview;
