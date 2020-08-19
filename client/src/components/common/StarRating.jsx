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
    } else if (decimal < 0.75) {
      stars[integer] =
        <div id='3qrStar' style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', 'z-index': 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '52%', 'z-index': 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    } else {
      stars[integer] =
        <div id='3qrStar' style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', 'z-index': 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '65%', 'z-index': 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    }
  }

  return (
    <div>{stars}</div>
  );
};

export default StarRating;