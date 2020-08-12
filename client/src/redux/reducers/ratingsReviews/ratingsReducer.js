import Redux from 'redux';

const ratingsReviewsReducers = {
  ratingsReducer: (state = {}, action) => {
    switch (action.type) {
    case 'GET_RATINGS':
      return action.ratingsMeta;
    default:
      return state;
    }
  },
  totalRatingsReducer: (state = 0, action) => {
    switch (action.type) {
    case 'SET_TOTAL_RATINGS_AND_AVERAGE':
      return action.totalRatings;
    default:
      return state;
    }
  },
  starAverageReducer: (state = 0, action) => {
    switch (action.type) {
    case 'SET_TOTAL_RATINGS_AND_AVERAGE':
      return action.starAverage;
    default:
      return state;
    }
  }
};


export default ratingsReviewsReducers;


