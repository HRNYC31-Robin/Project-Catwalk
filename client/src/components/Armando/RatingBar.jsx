import React from 'react';

const RatingsBar = ({totalRatings, starRating, starNum}) => {
  const ratingPercentage = (starRating / totalRatings) * 100;
  const emptyBar = {
    height: 20,
    width: '80%',
    backgroundColor: 'grey'
  };

  const fillerBar = {
    height: '100%',
    width: `${ratingPercentage}%`,
    backgroundColor: 'green'
  };

  return (
    <div id='rating-bar'>
      <p>{starNum} stars</p>
      <div id='empty-bar' style={emptyBar}>
        <div id='filler-bar' style={fillerBar}></div>
      </div>
    </div>
  );
};

export default RatingsBar;