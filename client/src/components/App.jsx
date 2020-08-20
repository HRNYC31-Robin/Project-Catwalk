import React from 'react';
import ReactDOM from 'react-dom';
import RelatedProductContainer from '../redux/containers/RelatedProductsContainer.js';
import OutfitContainer from '../redux/containers/OutFitContainer.js';
import OverviewContainer from '../redux/containers/OverviewContainer.js';
import RatingsReviewsContainer from '../redux/containers/ratingsReviewsContainer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import NavBar from '../components/common/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let productID = Number(this.props.match.params.id);
    axios
      .get(`http://18.224.37.110/products/${productID}`)
      .then((row) => {
        this.props.handleChangeProductClick(row.data);
        this.props.handleChangeURLClick(this.props.match.url);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Row>
          <OverviewContainer data-test='OverviewContainer' />
        </Row>
        <Row>
          <RelatedProductContainer data-test='RelatedProductContainer' />
        </Row>
        <Row>
          <OutfitContainer data-test='OutFitContainer' />
        </Row>
        <Row>
          <RatingsReviewsContainer data-test='RatingsReviewsContainer' />
        </Row>
      </Container>
    );
  }
}

export default App;
