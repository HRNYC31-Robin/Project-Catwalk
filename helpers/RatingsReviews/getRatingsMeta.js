const axios = require('axios');
const REVIEWS_URL = process.env.REVIEWS_API_URL;

// console.log(REVIEWS_URL);

module.exports.getRatingsMeta = (prodId, dispatch) => {
  // console.log('this getRatingsMeta', prodId);
  return axios.get(`${REVIEWS_URL}/meta/?product_id=${prodId}`)
    .then(result => dispatch(result.data))
    .catch(err => console.log(err, 'this is the getRatingsMeta'));
};