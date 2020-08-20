import React from 'react';
import Enzyme from '../index.js';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';
import ReviewList from '../../client/src/components/Armando/ReviewList.jsx';
import testData from '../../client/data/data.js';
import reviewsData from '../../client/data/reviews.js';

const reviewsTest = reviewsData.results;

test('Should have reviewTiles', () => {
  const wrapper = shallow(<ReviewList ratingsMeta={{}} currentProduct={testData[0]} reviews={reviewsTest} visibleReviews={reviewsTest[0]}/>);
  console.log(wrapper.debug());
  expect(wrapper.find('ReviewTile').length).toEqual(5);
});