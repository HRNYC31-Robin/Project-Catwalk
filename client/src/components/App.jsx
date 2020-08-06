import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Products from './Deo/Products.jsx';
import Overview from './Liam/Overview.jsx';
import RatingsReviews from './Armando/RatingsReviews.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button> Click me </Button>
        <Overview />
        <Products />
        <RatingsReviews />
      </div>
    );
  }
}

export default App;
