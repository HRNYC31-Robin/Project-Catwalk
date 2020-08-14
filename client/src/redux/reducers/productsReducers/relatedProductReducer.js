const relatedProductReducer = {
  productReducer: (state = [], action) => {
    switch (action.type) {
    case 'UPDATE_RELATED_PRODUCTS':
      return action.relatedProducts;
    default:
      return state;
    }
  }
};

export default relatedProductReducer;