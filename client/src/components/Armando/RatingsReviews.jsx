import React from 'react';
import ReviewListContainer from '../../redux/containers/ReviewListContainer.js';
import Breakdown from './Breakdown';
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
      <div id='ratings-reviews'>
        <div id='breakdown'>
          <Breakdown ratings={this.props.ratingsMeta.ratings} totalRatings={this.props.totalRatings}/>
        </div>
        <div id='review-list'>
          <ReviewListContainer totalRatings={this.props.totalRatings}/>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
