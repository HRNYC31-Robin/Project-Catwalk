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
      <span id='user-date'>
        <p id='user-name' key='user-name'>{props.review['reviewer_name']}</p>
        <p id='date' key='date'>{dateToRender}</p>
      </span>
      <h3>{props.review.summary}</h3>
      <p>{props.review.body}</p>
      {
        !props.review.recommend ? null :
          <p><span className='checkmark-review'>&#10003;</span> I recommend this product</p>
      }

      {
        !props.review.response ? null :
          <div id='response' key='response'>
            <h7>Response:</h7>
            <p>{props.review.response}</p>
          </div>
      }
      <Helpful helpfulness={props.review.helpfulness} reviewId={props.review.review_id}/>
    </div>
  );
};

export default ReviewTile;