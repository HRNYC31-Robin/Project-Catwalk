import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';

const Overview = function ({productName}) {
  return (
    <>
      <Container className='overviewContainer'>
        <h3> Overview goes here! Product is {productName} </h3>
      </Container>
    </>
  );
};

export default Overview;
