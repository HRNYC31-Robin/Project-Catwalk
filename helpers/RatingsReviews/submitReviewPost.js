const axios = require('axios');
const REVIEW_URL = process.env.REVIEWS_API_URL;

module.exports.submitReviewPost = (handlePost, handleClose, state) => {
  axios.post(REVIEW_URL, state)
    .then(() => handlePost(true))
    .then(() => handleClose())
    .catch(err => console.log(err));
};