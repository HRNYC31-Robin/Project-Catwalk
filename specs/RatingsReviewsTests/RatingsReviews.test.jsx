import React from 'react';
import Enzyme from '../index.js';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';
import RatingsReviews from '../../client/src/components/Armando/RatingsReviews';
import testData from '../../client/data/data.js';
import reviewsData from '../../client/data/reviews.js';

test('Should have Breakdown', () => {
  const wrapper = shallow(<RatingsReviews currentProduct={testData[0]} ratingsMeta={{}} totalRatings={0} starAverage={0}/>);
  // console.log(wrapper.debug());
  expect(wrapper.find('Breakdown')).toBeTruthy();
});
// Promise.resolve(shallow(<App match={match} />))
//   .then(wrapper => console.log(wrapper.debug()))
//   .catch(err => console.log(err));
