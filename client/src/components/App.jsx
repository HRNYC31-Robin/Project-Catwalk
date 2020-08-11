import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Products from './Deo/Products.jsx';
import Overview from './Liam/Overview.jsx';
import RatingsReviews from './Armando/RatingsReviews.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container>
          <Overview />
          <Products />
          <RatingsReviews />
      </Container>
    );
  }
}

export default App;
