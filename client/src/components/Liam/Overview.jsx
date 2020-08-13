import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';

import ImageGallery from './ImageGallery.jsx';
import UpperRight from './upper-right/UpperRight.jsx';
import ProductBlurb from './ProductBlurb.jsx';
import SocialMedia from './SocialMedia.jsx';

const Overview = function ({currentProduct}) {
  const [ expanded, changeExpand ] = useState(false);
  const [ styleList, updateStyleList ] = useState([]);
  const [ styleIndex, changeCurrStyle ] = useState(0);

  const toggleExpand = () => {
    !expanded ? changeExpand(true) : changeExpand(false);
  };


  // On mount, get styles
  useEffect(() => {
    console.log(currentProduct);
    axios({
      method: 'get',
      url: `http://18.224.200.47/products/${currentProduct.id}/styles`
    })
      .then(({ data }) => {
        console.log('Styles: ', data);
      })
      .catch(err => {
        console.log('Error in retrieving styles: ', err);
      });
  });

  if (!expanded) {
    return (
      <Container className='overviewContainer-normal'>
        <ImageGallery
          toggle={toggleExpand}
        />

        <UpperRight
          currentProduct={currentProduct}
        />

        <ProductBlurb />

        <SocialMedia />
      </Container>
    );
  } else {
    return (
      <Container className='overviewContainer-expanded'>
        <ImageGallery
          toggle={toggleExpand}
        />

        <div className="lower-portion">
          <ProductBlurb />

          <SocialMedia />
        </div>
      </Container>
    );
  }

};

export default Overview;
