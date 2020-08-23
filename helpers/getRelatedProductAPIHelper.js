import axios from 'axios';

const getRelatedProducts = async (productID) => {
  try {
    const response = await axios(
      `http://18.224.37.110/products/${productID.id}/related`
    );
    return response.data;
  } catch (error) {
    console.log('Error getting related Products: ', error);
  }
};

export default getRelatedProducts;
