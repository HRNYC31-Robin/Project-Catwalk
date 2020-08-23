const axios = require('axios');
const REVIEWS_API = process.env.REVIEWS_API_URL;

module.exports.getReviews = (prodId, sortList, count, addMoreReviews, handleMoreReviewsClick) => {
  axios.get(`${REVIEWS_API}/?product_id=${prodId}&sort=${sortList}&count=${count}`)
    .then(results => {
      addMoreReviews(results.data.results);
      handleMoreReviewsClick(results.data.results.slice(0, 2));
    })
    .catch(err => console.log(err));
};