const axios = require('axios');
const StarRating = require('../client/src/components/common/StarRating.jsx');
const REVIEWS_URL = process.env.REVIEWS_API_URL;

// console.log('this is reviewsURL', REVIEWS_URL);
// console.log('this is full url',`${REVIEWS_URL}/meta/?product_id=${5}`);

module.exports.ratingAverageHelper = (prodId) => {
  return axios.get(`${REVIEWS_URL}/meta/?product_id=${prodId}`)
    .then(result => {
      // console.log('on success of result', result);
      const ratings = result.data.ratings;
      let totalVote = 0;
      let average = 0;

      // loop over the ratings
      for (let star in ratings) {
        totalVote += ratings[star];
        average += (Number(star) * ratings[star]);
      }
      return average / totalVote;
    })
    .catch(err => console.log(err));
};
