import React from 'react';
import Enzyme from '../index.js';
import { mount, shallow } from 'enzyme';
import ReviewForm from '../../client/src/components/Armando/ReviewForm.jsx';
import testData from '../../client/data/data.js';

const prodName = testData[0].name;
const testMeta = {
  'product_id': '1',
  'ratings': {
    '1': 1,
    '3': 4,
    '4': 2,
    '5': 1
  },
  'recommended': {
    '0': 2,
    '1': 6
  },
  'characteristics': {
    'Fit': {
      'id': 1,
      'value': '1.8750'
    },
    'Length': {
      'id': 2,
      'value': '1.6250'
    },
    'Comfort': {
      'id': 3,
      'value': '2.2500'
    },
    'Quality': {
      'id': 4,
      'value': '2.0000'
    }
  }
};

test('Check ReviewForm Contains Mandatory Elements', () => {
  const wrapper = mount(<ReviewForm metaData={testMeta} prodName={prodName} handleClose={() => {}} />);
  // console.log(wrapper.find('.characteristic-form').first().find('.labels').debug());
  expect(wrapper.find('.characteristic-form').length).toBe(4);
  // expect(wrapper.find('.characteristic-form').first().find('.labels').length).toBe(5);
});

test('Check ReviewForm Contains Mandatory Elements', () => {
  const wrapper = mount(<ReviewForm metaData={testMeta} prodName={prodName} handleClose={() => {}} />);
  // console.log(wrapper.find('.characteristic-form').first().find('.labels').debug());
  // expect(wrapper.find('.characteristic-form').length).toBe(4);
  expect(wrapper.find('.characteristic-form').first().find('.labels').length).toBe(5);
});