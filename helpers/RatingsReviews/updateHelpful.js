const axios = require('axios');
const REQUEST_API = process.env.REVIEWS_API_URL;


module.exports.updateHelpful = (reviewId, helpfulCount, updateCount) => {
  // save reviewId to list of helpful reviews
  if (!localStorage.getItem('helpfulReviews')) {
    const helpReviews = JSON.stringify({ [reviewId]: true });
    localStorage.setItem('helpfulReviews', helpReviews);
    updateCount(helpfulCount + 1);
  } else {
    // localStorage.removeItem('helpfulReviews');
    const helpful = JSON.parse(localStorage.getItem('helpfulReviews'));
    // check presence of reviewId
    if (!helpful.hasOwnProperty(reviewId)) {
      helpful[reviewId] = true;
      const newHelpful = JSON.stringify(helpful);

      axios.put(`${REQUEST_API}/${reviewId}/helpful`)
        .then(() => {
          localStorage.setItem('helpfulReviews', newHelpful);
          updateCount(helpfulCount + 1);
        })
        .catch(err => console.log(err));
    } else {
      console.log('review already exists');
    }
  }
};
