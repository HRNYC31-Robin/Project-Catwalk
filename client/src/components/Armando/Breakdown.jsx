import React from 'react';

const Breakdown = (props) => {
  // calculate star Rating
  let starAverage = 0;
  for (let star in props.ratings) {
    const currentStar = props.ratings[star] * Number(star);
    starAverage += currentStar;
  }

  return (
    <div>
      { starAverage / props.totalRatings }
    </div>
  );
}

export default Breakdown;