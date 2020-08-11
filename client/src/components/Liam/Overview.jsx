import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';

const Overview = function ({currentProduct}) {
  return (
      <Container className='overviewContainer'>
        <h3> Overview goes here! {currentProduct.name} </h3>
      </Container>
  );
};

export default Overview;
