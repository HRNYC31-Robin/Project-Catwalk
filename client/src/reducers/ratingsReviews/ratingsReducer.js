import Redux from 'redux';

const ratingsReviewsReducers = {
  ratingsReducer : (state = {}, action) => {
    switch (action.type) {
      case 'GET_RATINGS':
        return action.ratingsMeta;
      default:
        return state;
    }
  },
  totalRatingsReducer : (state = 0, action) => {
    switch (action.type) {
      case 'SET_TOTAL_RATINGS':
        return action.totalRatings;
      default:
        return state;
    }
  }
};


export default ratingsReviewsReducers;


