import Redux from 'redux';

const ratingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return action.ratingsMeta;
    default:
      return state;
  }
}

export default ratingsReducer;