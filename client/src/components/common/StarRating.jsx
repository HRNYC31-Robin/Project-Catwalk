import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(farFaStar, fas);

const StarRating = ({starAverage}) => {
  const empty = <FontAwesomeIcon icon={farFaStar} />;
  const stars = [empty, empty, empty, empty, empty];
  const decimal = starAverage % 1;
  const integer = parseInt(starAverage);

  // push full stars
  for (let i = 0; i < integer; i++) {
    stars[i] = <FontAwesomeIcon icon={['fas', 'star']} />;
  }
  // deal with decimal
  if (decimal > 0) {
    if (decimal < 0.26) {
      stars[integer] = 'q';
    } else if (decimal < 0.51) {
      stars[integer] = <FontAwesomeIcon icon={['fas', 'star-half-alt']} />;
    } else {
      stars[integer] = '3q';
    }
  }

  return (
    <span>[ {stars} ]</span>
  );
};

export default StarRating;