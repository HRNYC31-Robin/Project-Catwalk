import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import {ratingAverageHelper} from '../../../../helpers/ratingAverageHelper.js';

library.add(farFaStar, fas);

// use prodId if fetching data from the API

const StarRating = ({prodId, starCount}) => {
  const [starAverage, setStarAverage] = React.useState(0);
  const empty = <span>&#9734;</span>;
  const stars = [empty, empty, empty, empty, empty];
  const decimal = prodId ? starAverage % 1 : starCount % 1;
  const integer = prodId ? parseInt(starAverage) : parseInt(starCount);

  // call helper to get average
  if (prodId) {
    ratingAverageHelper(prodId)
      .then(average => setStarAverage(average))
      .then(() => console.log('this is in StarRating after update', starAverage))
      .catch(err => console.log(err));
  }

  // push full stars
  for (let i = 0; i < integer; i++) {
    stars[i] = <span>&#9733;</span>;
  }
  // deal with decimal
  if (decimal > 0) {
    if (decimal < 0.26) {
      stars[integer] = 'q';
    } else if (decimal < 0.51) {
      stars[integer] = <FontAwesomeIcon icon={['fas', 'star-half-alt']} />;
    } else {
      stars[integer] = <span id='3qrStar'>&#9733;</span>;
    }
  }

  return (
    <span>{stars}</span>
  );
};

export default StarRating;