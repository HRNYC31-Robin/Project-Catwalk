import React from 'react';
import ReviewListContainer from '../../redux/containers/reviewListContainer.js';
import Breakdown from './Breakdown';
import axios from 'axios';

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
    axios.get(`http://18.224.37.110/reviews/meta/?product_id=${prodId}`)
      .then(results => {
        console.log(results.data);
        this.props.handleRatingsUpdate(results.data);
      })
      .catch(err => console.log(err));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct.id !== this.props.currentProduct.id) {
      // save previous id to state
      this.setState({prevId: prevProps.currentProduct.id});
      const prodId = this.props.currentProduct.id;
      axios.get(`http://18.224.37.110/reviews/meta/?product_id=${prodId}`)
        .then(results => {
          console.log(results.data);
          this.props.handleRatingsUpdate(results.data);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div id='ratings-reviews'>
        <div>
          <Breakdown ratings={this.props.ratingsMeta.ratings}
            totalRatings={this.props.totalRatings}
            starAverage={this.props.starAverage}
            characteristics={this.props.ratingsMeta.characteristics}
          />
        </div>
        <div id='review-list'>
          <ReviewListContainer totalRatings={this.props.totalRatings} prevId={this.state.prevId}/>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
