const URLReducer = {
  currentURLReducer: (state = {}, action) => {
    switch (action.type) {
    case 'CHANGE_URL':
      return action.URL;
    default:
      return state;
    }
  },
};

export default URLReducer;
