import Redux from 'redux';

const currentProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return state;
    default:
      return state;
  }
};

export default currentProductReducer;
