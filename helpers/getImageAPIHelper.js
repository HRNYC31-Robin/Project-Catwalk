import axios from 'axios';

const getProductImages = async (currentProduct) => {
  try {
    const response = await axios(
      `http://18.224.37.110/products/${currentProduct.id}/styles`
    );
    return Object.assign({}, response.data, currentProduct);
  } catch (err) {
    console.log('Error getting images: ', err);
  }
};

export default getProductImages;
