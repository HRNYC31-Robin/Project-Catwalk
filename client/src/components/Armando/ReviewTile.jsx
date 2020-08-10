import React from 'react';

const ReviewTile = (props) => {
  return (
    <div key={props.review.review_id}>
      <h3>{props.review.summary}</h3>
      <p>{props.review.body}</p>
    </div>
  )
};

export default ReviewTile;