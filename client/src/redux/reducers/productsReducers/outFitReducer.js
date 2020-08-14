const outfitReducer = {
  addOutFit: (state = [], action) => {
    switch (action.type) {
    case 'ADD_OUTFIT':
      return action.userOutFits;
    default:
      return state;
    }
  },
};

export default outfitReducer;
