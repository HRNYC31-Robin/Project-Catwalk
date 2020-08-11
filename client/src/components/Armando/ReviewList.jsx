import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

const ReviewList = (props) => {
  const handleMoreClick = () => {
    if (props.reviews.length <= props.totalRatings) {
      axios.get(`http://18.224.200.47/reviews/1/list?count=${props.totalRatings}`)
        .then(results => props.addMoreReviews(results.data.results))
        .catch(err => console.log(err));
    }

    const currentPosition = Math.max(props.visibleReviews.length || 0);
    const reviewsToAdd = props.visibleReviews.concat(props.reviews.slice(
      currentPosition,
      currentPosition + 2
    ));
    props.handleMoreReviewsClick(reviewsToAdd);
  }

  return (
    <div>
      {
        props.visibleReviews.map(review => (
          <ReviewTile review={review} />
        ))
      }
      {
        props.visibleReviews.length === props.reviews.length ? null :
        <button onClick={handleMoreClick}>MORE</button>
      }
    </div>
  )
};

export default ReviewList;