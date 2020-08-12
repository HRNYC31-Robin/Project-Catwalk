import Redux from 'redux';

const addVisibleReviews = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_VISIBLE_REVIEWS':
    return action.visibleReviews;
  default:
    return state;
  }
};

export default addVisibleReviews;