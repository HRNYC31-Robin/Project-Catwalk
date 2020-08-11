var changeProduct = (productInfo) => {
  return {
    product: productInfo,
    type: "CHANGE_CURRENT_PRODUCT",
  };
};

export default changeProduct;
