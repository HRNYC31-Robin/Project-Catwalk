import React from 'react';
import StarRating from '../common/StarRating.jsx';

const Breakdown = (props) => {

  return (
    <div>
      {props.starAverage}
      <StarRating starAverage={props.starAverage} />
    </div>
  );
};

export default Breakdown;