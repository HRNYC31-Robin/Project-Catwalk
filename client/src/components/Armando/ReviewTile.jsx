import React from 'react';
import StarRating from '../common/StarRating.jsx';
import Helpful from './Helpful.jsx';


const ReviewTile = (props) => {
  const date = props.review.date.split('T')[0].split('-');
  const formatedDate = new Date(Date.UTC(...date));
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const dateToRender = formatedDate.toLocaleDateString('en-US', options);


  return (
    <div id='review-tile' key={props.review.review_id}>
      <StarRating id='stars' starCount={props.review.rating}/>
      <p id='date'>{dateToRender}</p>
      <h3>{props.review.summary}</h3>
      <p>{props.review.body}</p>
      <Helpful helpfulness={props.review.helpfulness} reviewId={props.review.review_id}/>
    </div>
  );
};

export default ReviewTile;