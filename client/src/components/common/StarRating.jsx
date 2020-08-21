import React from 'react';

import {ratingAverageHelper} from '../../../../helpers/ratingAverageHelper.js';


// use prodId if fetching data from the API

const StarRating = ({prodId, starCount}) => {
  const [starAverage, setStarAverage] = React.useState(0);
  const empty = <span>&#9734;</span>;
  const stars = [];
  const decimal = prodId ? starAverage % 1 : starCount % 1;
  const integer = prodId ? parseInt(starAverage) : parseInt(starCount);

  // call helper to get average
  if (prodId) {
    ratingAverageHelper(prodId)
      .then(average => setStarAverage(average))
      .catch(err => console.log(err));
  }

  // push full stars
  for (let i = 0; i < 5; i++) {
    if (i < integer) {
      stars[i] = <span key={`${i}full`}>&#9733;</span>;
    } else {
      stars[i] = <span key={`${i}empty`}>&#9734;</span>;
    }
  }
  // deal with decimal
  if (decimal > 0) {
    if (decimal < 0.26) {
      stars[integer] =
        <div key='quarterStar' id='quarterStar' style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '25%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    } else if (decimal < 0.75) {
      stars[integer] =
        <div key='halfStar' id='halfStar' style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '52%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    } else {
      stars[integer] =
        <div key='3qrStar' id='3qrStar' style={{position: 'relative', display: 'inline-flex', width: '15px'}}>
          <span style={{position: 'relative', display: 'flex', zIndex: 0}}>&#9734;</span>
          <div style={{position: 'absolute', display: 'flex', width: '65%', zIndex: 1, overflow: 'hidden'}}>&#9733;</div>
        </div>;
    }
  }

  return (
    <div id='ratedStars'>{stars}</div>
  );
};

export default StarRating;