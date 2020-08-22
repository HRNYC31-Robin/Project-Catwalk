import React from 'react';
import Enzyme from './index';
import { shallow } from 'enzyme';
import AppComponent from '../client/src/components/App.jsx';

const setUp = (props = {}) => {
  const component = shallow(<AppComponent {...props} />);
  //console.log(component.debug());
  return component;
};

const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

describe('Rendering of main App component', () => {
  let component;
  beforeEach(() => {
    component = setUp({
      history: {
        length: 2,
        action: 'POP',
        location: {
          pathname: '/products/5',
          search: '',
          hash: '',
        },
      },
      location: {
        pathname: '/products/5',
        search: '',
        hash: '',
      },
      match: {
        path: '/products/:id',
        url: '/products/5',
        isExact: true,
        params: {
          id: '5',
        },
      },
      URL: '',
      handleChangeProductClick: () => {},
      handleChangeURLClick: () => {},
    });
  });

  it('It should render the overview container', () => {
    const wrapper = findByTestAttr(component, 'OverviewContainer');
    expect(wrapper.length).toBe(1);
  });

  it('It should render the related product container', () => {
    const wrapper = findByTestAttr(component, 'RelatedProductContainer');
    expect(wrapper.length).toBe(1);
  });

  it('It should render the outfit container', () => {
    const wrapper = findByTestAttr(component, 'OutFitContainer');
    expect(wrapper.length).toBe(1);
  });

  it('It should render the rating  container', () => {
    const wrapper = findByTestAttr(component, 'RatingsReviewsContainer');
    expect(wrapper.length).toBe(1);
  });
});
