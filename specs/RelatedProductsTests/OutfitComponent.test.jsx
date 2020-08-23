import React from 'react';
import Enzyme from '../index.js';
import { shallow } from 'enzyme';
import OutfitProductCard from '../../client/src/components/Deo/OutfitProductCard.jsx';

describe('Out-fit Component', () => {
  let component;
  // Run before each it test
  beforeEach(() => {
    component = shallow(<OutfitProductCard />);
  });

  it('It should render product card  container', () => {
    const wrapper = component.find('.productCardContainer');
    expect(wrapper.length).toBe(1);
  });

  it('It should render a product card for outfit', () => {
    const wrapper = component.find('.productCard');
    expect(wrapper.length).toBe(1);
  });
});
