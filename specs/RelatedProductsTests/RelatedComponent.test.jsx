import React from 'react';
import Enzyme from '../index.js';
import { shallow } from 'enzyme';
import RelatedProductCard from '../../client/src/components/Deo/RelatedProductCard.jsx';

const propsPass = {
  relatedProducts: [{}],
};

describe('Related Products Component ', () => {
  let component;
  beforeEach((props) => {
    component = shallow(<RelatedProductCard {...propsPass} />);
  });

  it('It should render product card container', () => {
    const wrapper = component.find('.productCardContainer');
    expect(wrapper.length).toBe(1);
  });

  it('It should render a product card for related product', () => {
    const wrapper = component.find('.productWrapper');
    expect(wrapper.length).toBe(1);
  });
});
