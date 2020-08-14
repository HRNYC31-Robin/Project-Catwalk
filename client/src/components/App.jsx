import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import RelatedProductContainer from '../redux/containers/RelatedProductsContainer.js';
import OutfitContainer from '../redux/containers/OutFitContainer.js';
import OverviewContainer from '../redux/containers/OverviewContainer.js';
import RatingsReviewsContainer from '../redux/containers/ratingsReviewsContainer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <OverviewContainer />
        </Row>
        <Row>
          <RelatedProductContainer />
        </Row>
        <Row>
          <OutfitContainer />
        </Row>
        <Row>
          <RatingsReviewsContainer />
        </Row>
      </Container>
    );
  }
}

export default App;
