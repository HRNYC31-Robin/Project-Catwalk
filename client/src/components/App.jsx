import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import ProductContainer from '../containers/ProductsContainer.js';
import Overview from './Liam/Overview.jsx';
import RatingsReviewsContainer from '../containers/ratingsReviewsContainer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Overview />
        </Row>
        <Row>
          <ProductContainer />
        </Row>
        <Row>
          <RatingsReviewsContainer />
        </Row>
      </Container>
    );
  }
}

export default App;
