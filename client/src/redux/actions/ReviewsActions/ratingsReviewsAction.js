// actions for the ratings widget
const ratingsReviewsActions = {
  getRatingsMeta: (meta) => ({
    type: 'GET_RATINGS',
    ratingsMeta: meta
  }),

  setTotalRatings: (meta) => {
    const totalRatings = Object.values(meta.ratings).reduce((a, b) => a + b);
    let starSum = 0;
    for (let star in meta.ratings) {
      const currentStar = meta.ratings[star] * Number(star);
      starSum += currentStar;
    }

    return {
      type: 'SET_TOTAL_RATINGS_AND_AVERAGE',
      totalRatings,
      starAverage: starSum / totalRatings
    };
  }
};

export default ratingsReviewsActions;