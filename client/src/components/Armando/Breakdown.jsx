import React from 'react';
import StarRating from '../common/StarRating.jsx';
import RatingBar from './RatingBar.jsx';

const Breakdown = (props) => {
  console.log(props.ratings, 'check ratings exist');
  // set a default
  let ratings = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

  // normalize the ratings
  if (props.ratings) {
    ratings = Object.assign({}, ratings, props.ratings);
  }
  console.log(ratings, 'normalized ratings');

  return (
    <div>
      {props.starAverage}
      <StarRating starAverage={props.starAverage} />

      {
        Object.keys(ratings).map(star => (
          <RatingBar starNum={star} starRating={ratings[star]} totalRatings={props.totalRatings}/>
        ))
      }

    </div>
  );
};

export default Breakdown;