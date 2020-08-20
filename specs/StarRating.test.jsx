import React from 'react';
import { mount } from 'enzyme';
import Enzyme from './index.js';
import StarRating from '../client/src/components/common/StarRating.jsx';

test('StarRating Component output 1 star', () => {
  const rating = 1;
  const empty = <span>&#9734;</span>;
  const full = <span>&#9733;</span>;
  const testStars = [];
  // populate array
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      testStars.push(full);
    } else {
      testStars.push(empty);
    }
  }

  const Stars = mount(<StarRating starCount={rating}/>);

  // console.log(Stars.find('#ratedStars').debug());
  expect(Stars.find('#ratedStars').contains(testStars)).toBe(true);
  Stars.unmount();
});

test('StarRating Component output 2 star', () => {
  const rating = 2;
  const empty = <span>&#9734;</span>;
  const full = <span>&#9733;</span>;
  const testStars = [];
  // populate array
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      testStars.push(full);
    } else {
      testStars.push(empty);
    }
  }

  const Stars = mount(<StarRating starCount={rating}/>);

  // console.log(Stars.find('#ratedStars').debug());
  expect(Stars.find('#ratedStars').contains(testStars)).toBe(true);
  Stars.unmount();
});

test('StarRating Component fail 2 star', () => {
  const rating = 1;
  const empty = <span>&#9734;</span>;
  const full = <span>&#9733;</span>;
  const testStars = [];
  // populate array
  for (let i = 0; i < 6; i++) {
    if (i < rating) {
      testStars.push(full);
    } else {
      testStars.push(empty);
    }
  }

  const Stars = mount(<StarRating starCount={rating}/>);

  // console.log(Stars.find('#ratedStars').debug());
  expect(Stars.find('#ratedStars').contains(testStars)).toBe(false);
  Stars.unmount();
});

test('StarRating Component output 5', () => {
  const rating = 5;
  const empty = <span>&#9734;</span>;
  const full = <span>&#9733;</span>;
  const testStars = [];
  // populate array
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      testStars.push(full);
    } else {
      testStars.push(empty);
    }
  }

  const Stars = mount(<StarRating starCount={rating}/>);

  // console.log(Stars.find('#ratedStars').debug());
  expect(Stars.find('#ratedStars').contains(testStars)).toBe(true);
  Stars.unmount();
});

// xtest('StarRating Component using prodId', () => {
//   const empty = <FontAwesomeIcon icon={farFaStar} />;
//   const full = <FontAwesomeIcon icon={['fas', 'star']} />;
//   const testRating = <span key='test'>{[full, full, full, full, '3q']}</span>;
//   const Stars = mount(<StarRating prodId={1}/>);
//   expect(Stars.contains(testRating)).toBe(true);
//   Stars.unmount();
// });
