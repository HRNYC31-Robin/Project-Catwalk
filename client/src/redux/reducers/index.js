import { combineReducers } from 'redux';
import productReducer from './productReducer.js';

// import reducers
import reviews from './ratingsReviews/reviewListReducer.js';
import visibleReviews from './ratingsReviews/addVisibleReviews.js';
import ratingsReviewsReducers from './ratingsReviews/ratingsReducer.js';

// combine reducers
const rootReducer = combineReducers({
  reviews,
  visibleReviews,
  ratingsMeta: ratingsReviewsReducers.ratingsReducer,
  totalRatings: ratingsReviewsReducers.totalRatingsReducer,
  currentProduct: productReducer.currentProductReducer,
  relateProducts: productReducer.relatedProductReducer,
  starAverage: ratingsReviewsReducers.starAverageReducer,
});

export default rootReducer;
