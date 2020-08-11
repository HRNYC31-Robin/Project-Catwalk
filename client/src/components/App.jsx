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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://18.224.200.47/products/1'
    })
      .then(({data}) => {
        console.log('Product: ', data);
        this.props.handleProductChange(data);
      })
      .catch((err) => {
        console.log('Error in retrieving product!', err)
      })
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
