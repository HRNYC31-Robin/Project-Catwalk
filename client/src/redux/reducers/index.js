import { combineReducers } from 'redux';
import productReducer from './productsReducers/productReducer.js';
import relatedProductReducer from './productsReducers/relatedProductReducer.js';
import outFitReducer from './productsReducers/outFitReducer.js';

// import reducers
import reviews from './ratingsReviews/reviewListReducer.js';
import visibleReviews from './ratingsReviews/addVisibleReviews.js';
import ratingsReviewsReducers from './ratingsReviews/ratingsReducer.js';
import URLReducer from './URLReducer.js';

// combine reducers
const rootReducer = combineReducers({
  reviews,
  visibleReviews,
  ratingsMeta: ratingsReviewsReducers.ratingsReducer,
  totalRatings: ratingsReviewsReducers.totalRatingsReducer,
  currentProduct: productReducer.currentProductReducer,
  relatedProducts: relatedProductReducer.productReducer,
  userOutFits: outFitReducer.addOutFit,
  starAverage: ratingsReviewsReducers.starAverageReducer,
  URL: URLReducer.currentURLReducer,
});

export default rootReducer;
