import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import StarRating from '../client/src/components/common/StarRating.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';


test('StarRating Component output 1 star', () => {
  const empty = <FontAwesomeIcon icon={farFaStar} />;
  const full = <FontAwesomeIcon icon={['fas', 'star']} />;
  const testRating = <span key='test'>{[full, empty, empty, empty, empty]}</span>;
  const Stars = mount(<StarRating starCount={1}/>);
  expect(Stars.contains(testRating)).toBe(true);
  Stars.unmount();
});

test('StarRating Component output 2 star', () => {
  const empty = <FontAwesomeIcon icon={farFaStar} />;
  const full = <FontAwesomeIcon icon={['fas', 'star']} />;
  const testRating = <span key='test'>{[full, full, empty, empty, empty]}</span>;
  const Stars = mount(<StarRating starCount={2}/>);
  expect(Stars.contains(testRating)).toBe(true);
  Stars.unmount();
});

test('StarRating Component fail 2 star', () => {
  const empty = <FontAwesomeIcon icon={farFaStar} />;
  const full = <FontAwesomeIcon icon={['fas', 'star']} />;
  const testRating = <span key='test'>{[full, full, empty, empty, empty]}</span>;
  const Stars = mount(<StarRating starCount={3}/>);
  expect(Stars.contains(testRating)).toBe(false);
  Stars.unmount();
});

test('StarRating Component output 5', () => {
  const empty = <FontAwesomeIcon icon={farFaStar} />;
  const full = <FontAwesomeIcon icon={['fas', 'star']} />;
  const testRating = <span key='test'>{[full, full, full, full, full]}</span>;
  const Stars = mount(<StarRating starCount={5}/>);
  expect(Stars.contains(testRating)).toBe(true);
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