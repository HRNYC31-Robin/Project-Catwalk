import { combineReducers } from 'redux';
import productReducer from '../reducers/productsReducers/productReducer.js';
import relatedProductReducer from './productsReducers/relatedProductReducer.js';

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
  relatedProducts: relatedProductReducer.productReducer,
  starAverage: ratingsReviewsReducers.starAverageReducer,
});

export default rootReducer;
