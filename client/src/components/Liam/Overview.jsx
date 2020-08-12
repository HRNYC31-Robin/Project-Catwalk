import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';

import ImageGallery from './ImageGallery.jsx';
import UpperRight from './upper-right/UpperRight.jsx';
import ProductBlurb from './ProductBlurb.jsx';
import Checkmarks from './Checkmarks.jsx';

const Overview = function ({currentProduct}) {
  const [ expanded, changeExpand ] = useState(false);

  const toggleExpand = () => {
    !expanded ? changeExpand(true) : changeExpand(false);
  };

  if (!expanded) {
    return (
      <Container className='overviewContainer-normal'>
        <ImageGallery toggle={toggleExpand}/>

        <UpperRight currentProduct={currentProduct}/>

        <ProductBlurb />

        <Checkmarks />
      </Container>
    );
  } else {
    return (
      <Container className='overviewContainer-expanded'>
        <ImageGallery toggle={toggleExpand}/>

        <div className="lower-portion">
          <ProductBlurb />

          <Checkmarks />
        </div>
      </Container>
    );
  }

};

export default Overview;
