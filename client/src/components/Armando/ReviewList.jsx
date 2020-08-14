import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

const ReviewList = (props) => {
  const prodId = props.currentProduct.id;
  // const [reviews, setReviews] = React.useState([]);

  if (props.reviews.length === 0) {
    axios.get(`http://18.224.200.47/reviews/${prodId}/list`)
      .then(results => {
        props.addMoreReviews(results.data.results);
        props.handleMoreReviewsClick(results.data.results.slice(0, 2));
      })
      .catch(err => console.log(err));
  }

  const handleMoreClick = () => {
    if (props.reviews.length <= props.totalRatings) {
      axios.get(`http://18.224.200.47/reviews/${prodId}/list?count=${props.totalRatings}`)
        .then(results => props.addMoreReviews(results.data.results))
        .catch(err => console.log(err));
    }

    const currentPosition = Math.max(props.visibleReviews.length || 0);
    const reviewsToAdd = props.visibleReviews.concat(props.reviews.slice(
      currentPosition,
      currentPosition + 2
    ));
    props.handleMoreReviewsClick(reviewsToAdd);
  };

  return (
    <div>
      {
        props.visibleReviews.map(review => (
          <ReviewTile review={review} />
        ))
      }
      {
        props.visibleReviews.length === props.reviews.length ? null :
          <button className='review-list-buttons' onClick={handleMoreClick}>MORE REVIEWS</button>
      }
      <button className='review-list-buttons' >ADD A REVIEW +</button>
    </div>
  );
};

export default ReviewList;