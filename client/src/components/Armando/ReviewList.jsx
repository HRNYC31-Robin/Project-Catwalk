import React, { useEffect, useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';
import { getReviews } from '../../../../helpers/RatingsReviews/getReviews.js';

const ReviewList = (props) => {
  const prodId = props.currentProduct.id;
  const [reviewModal, setReviewModal] = useState(false);
  const [sortList, setSortList] = useState('relevant');


  // updated the reviews if product Id changes
  useEffect(() => {
    // set a default for count for first request
    const count = props.totalRatings || 5;
    // get reviews
    getReviews(
      prodId,
      sortList, count,
      props.addMoreReviews,
      props.handleMoreReviewsClick
    );

  }, [prodId, sortList]);

  const handleMoreClick = (post) => {
    let count = props.totalRatings;
    if (post) {
      console.log('triggered handleMoreClick');
      count += 1;
    }

    if (post || props.reviews.length <= props.totalRatings) {
      // call api helper to update reviews
      getReviews(
        prodId,
        sortList,
        count,
        props.addMoreReviews,
        () => {}
      );
    }

    const currentPosition = Math.max(props.visibleReviews.length || 0);
    const reviewsToAdd = props.visibleReviews.concat(props.reviews.slice(
      currentPosition,
      currentPosition + 2
    ));
    props.handleMoreReviewsClick(reviewsToAdd);
  };

  const handleAddReviewClick = () => {
    setReviewModal(true);
  };

  return (
    <div id='review-list'>
      <div id='review-dropdown'>
        <h6>{props.totalRatings} reviews, sorted by</h6>
        <select onChange={(e) => setSortList(e.target.value)}>
          <option key='relevant' value='relevant'>Relevant</option>
          <option key='helpful' value='helpful'>Helpful</option>
          <option key='newest' value='newest'>Newest</option>
        </select>
      </div>
      {
        reviewModal ? <ReviewForm metaData={props.ratingsMeta} prodName={props.currentProduct.name} handleClose={() => setReviewModal(false)} handlePostReview={handleMoreClick} /> : null
      }

      <div id='inner-review-list'>
        {
          props.visibleReviews.map((review, i) => (
            <ReviewTile review={review} key={i}/>
          ))
        }
      </div>
      <div id='review-list-bottom'>
        {
          props.visibleReviews.length === props.reviews.length ? null :
            <button className='review-list-buttons' onClick={handleMoreClick}>MORE REVIEWS</button>
        }
        <button className='review-list-buttons' onClick={handleAddReviewClick}>ADD A REVIEW +</button>
      </div>
    </div>
  );
};

export default ReviewList;