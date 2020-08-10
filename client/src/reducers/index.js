import { combineReducers } from 'redux';

// import reducers
import reviews from './ratingsReviews/reviewListReducer.js';
import visibleReviews from './ratingsReviews/addVisibleReviews.js';
import ratings from './ratingsReviews/ratingsReducer.js';

// combine reducers
const rootReducer = combineReducers({
  reviews,
  visibleReviews,
  ratings
});

export default rootReducer;
