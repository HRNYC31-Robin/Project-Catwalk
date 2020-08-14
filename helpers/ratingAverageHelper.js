const axios = require('axios');
const StarRating = require('../client/src/components/common/StarRating.jsx');

module.exports.ratingAverageHelper = (prodId) => {
  return axios.get(`http://18.224.200.47/reviews/${prodId}/meta`)
    .then(result => {
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