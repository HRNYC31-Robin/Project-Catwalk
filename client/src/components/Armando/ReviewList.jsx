import React, { useEffect, useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = (props) => {
  const prodId = props.currentProduct.id;
  const [reviewModal, setReviewModal] = useState(false);
  const [sortList, setSortList] = useState('relevant');


  // updated the reviews if product Id changes
  useEffect(() => {
    // set a default for count for first request
    const count = props.totalRatings || 5;

    axios.get(`http://18.224.37.110/reviews/?product_id=${prodId}&sort=${sortList}&count=${count}`)
      .then(results => {
        props.addMoreReviews(results.data.results);
        props.handleMoreReviewsClick(results.data.results.slice(0, 2));
      })
      .catch(err => console.log(err));
  }, [prodId, sortList]);

  const handleMoreClick = () => {
    if (props.reviews.length <= props.totalRatings) {
      axios.get(`http://18.224.37.110/reviews/?product_id=${prodId}&count=${props.totalRatings}&sort=${sortList}`)
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

  const handleAddReviewClick = () => {
    setReviewModal(true);
  };

  return (
    <div>
      <select onChange={(e) => setSortList(e.target.value)}>
        <option key='relevant' value='relevant'>Relevant</option>
        <option key='helpful' value='helpful'>Helpful</option>
        <option key='newest' value='newest'>Newest</option>
      </select>
      {
        reviewModal ? <ReviewForm metaData={props.ratingsMeta} prodName={props.currentProduct.name} handleClose={() => setReviewModal(false)} /> : null
      }

      {
        props.visibleReviews.map(review => (
          <ReviewTile review={review} />
        ))
      }
      {
        props.visibleReviews.length === props.reviews.length ? null :
          <button className='review-list-buttons' onClick={handleMoreClick}>MORE REVIEWS</button>
      }
      <button className='review-list-buttons' onClick={handleAddReviewClick}>ADD A REVIEW +</button>
    </div>
  );
};

export default ReviewList;