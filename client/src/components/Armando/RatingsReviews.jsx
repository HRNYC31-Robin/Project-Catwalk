import React from 'react';
import ReviewListContainer from '../../containers/ReviewListContainer.js'
import axios from 'axios';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // get meta data for ratings
    axios.get('http://18.224.200.47/reviews/1/meta')
      .then(results => {
        console.log(results.data);
        this.props.handleRatingsUpdate(results.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ReviewListContainer />
    );
  }
}

export default RatingsReviews;
