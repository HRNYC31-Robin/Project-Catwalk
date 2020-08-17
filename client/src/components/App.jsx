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
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props, ' Inside the app');
    let productID = Number(this.props.match.params.id);
    console.log('match: ', productID);
    axios
      .get(`http://18.224.37.110/products/${productID}`)
      .then((row) => {
        console.log(row.data);
        this.props.handleChangeProductClick(row.data);
        this.props.handleChangeURLClick(this.props.match.url);
      })
      .catch((error) => console.log(error));
  }

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
