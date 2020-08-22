import React from 'react';
import ReviewListContainer from '../../redux/containers/reviewListContainer.js';
import Breakdown from './Breakdown';
import { getRatingsMeta } from '../../../../helpers/RatingsReviews/getRatingsMeta.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevId: 0
    };
  }

  componentDidMount() {
    // get meta data for ratings
    const prodId = this.props.currentProduct.id;

    // get API meta
    getRatingsMeta(prodId, (data) => (data) => this.props.handleRatingsUpdate(data));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct.id !== this.props.currentProduct.id) {
      // save previous id to state
      this.setState({prevId: prevProps.currentProduct.id});
      const prodId = this.props.currentProduct.id;

      getRatingsMeta(prodId, (data) => this.props.handleRatingsUpdate(data));
    }
  }

  render() {
    return (
      <div id='ratings-widget'>
        <h6>RATINGS & REVIEWS</h6>
        <div id='ratings-reviews'>
          <div>
            <Breakdown ratings={this.props.ratingsMeta.ratings}
              totalRatings={this.props.totalRatings}
              starAverage={this.props.starAverage}
              characteristics={this.props.ratingsMeta.characteristics}
            />
          </div>
          <div>
            <ReviewListContainer totalRatings={this.props.totalRatings} prevId={this.state.prevId}/>
          </div>
        </div>

      </div>
    );
  }
}

export default RatingsReviews;
