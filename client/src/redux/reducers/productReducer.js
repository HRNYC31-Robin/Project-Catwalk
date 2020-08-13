const productReducer = {
  currentProductReducer: (state = {}, action) => {
    switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.currentProduct;
    default:
      return state;
    }
  },
  relatedProductReducer: (state = 0, action) => {
    switch (action.type) {
    case 'UPDATE_RELATED_PRODUCTS':
      return action.relateProducts;
    default:
      return state;
    }
  },
};

export default productReducer;
