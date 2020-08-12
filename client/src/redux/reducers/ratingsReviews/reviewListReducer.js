import Redux from 'redux';

const reviewListReducer = (state = [], action) => {
  switch ( action.type ) {
  case 'CHANGE_REVIEWS':
    return action.reviews;
  default :
    return state;
  }
};

export default reviewListReducer;