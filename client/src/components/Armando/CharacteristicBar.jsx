import React from 'react';

const CharacteristicBar = ({characteristic, charRating}) => {
  let meaningLow, meaningHigh;

  const emptyBar = {
    width: '100%',
    height: 20,
    backgroundColor: 'grey'
  };

  const innerBar = {
    display: 'inline-block',
    width: `${charRating * 20}%`,
    height: '100%',
  };

  switch (characteristic) {
  case 'Size':
    meaningLow = 'Too small';
    meaningHigh = 'Too large';
    break;
  case 'Width':
    meaningLow = 'Too narrow';
    meaningHigh = 'Too wide';
    break;
  case 'Comfort':
    meaningLow = 'Uncomfortable';
    meaningHigh = 'Perfect';
    break;
  case 'Quality':
    meaningLow = 'Poor';
    meaningHigh = 'Perfect';
    break;
  case 'Length':
    meaningLow = 'Runs short';
    meaningHigh = 'Runs long';
    break;
  case 'Fit':
    meaningLow = 'Runs tight';
    meaningHigh = 'Runs loose';
    break;
  default:
    break;
  }

  return (
    <div key={characteristic} className='characteristic-bar'>
      <p>{characteristic}</p>
      <div id='char-empty-bar' style={emptyBar}>
        <div style={innerBar}></div>
        <span id='rating-pointer'>&#9650;</span>
      </div>
      <p className='charMeaning'>{meaningLow}</p>
      <p id='char-high' className='charMeaning'>{meaningHigh}</p>
    </div>
  );
};

export default CharacteristicBar;





// Size
// A size too small
// A size too large

// Width
// Too narrow
// Too wide

// Comfort
// Uncomfortable
// Perfect

// Quality
// Poor
// Perfect

// Length
// Runs Short
// Runs long

// Fit
// Runs tight
// Runs long
