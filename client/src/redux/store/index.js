import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import rootReducer from '../reducers';

import reviewsData from '../../../data/reviews.js';
import data from '../../../data/data.js';

// define initial state for the store
const initialState = {
  currentProduct: {},
  relatedProducts: [],
  userOutFits: [],
  reviews: [],
  visibleReviews: [],
  ratingsMeta: {},
  totalRatings: 0,
  starAverage: 0,
  URL: '',
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
