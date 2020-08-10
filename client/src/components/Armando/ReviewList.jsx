import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = (props) => {
  const handleMoreClick = () => {
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
      <button onClick={handleMoreClick}>MORE</button>
    </div>
  )
};

export default ReviewList;