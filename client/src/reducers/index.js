import { combineReducers } from 'redux';
import currentProduct from './productReducer.js';
import productList from './productCardReducer.js';


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
  currentProduct: currentProduct,
  productList: productList,
});

export default rootReducer;
