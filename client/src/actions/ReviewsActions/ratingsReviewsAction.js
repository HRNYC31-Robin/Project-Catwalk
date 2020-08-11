// actions for the ratings widget
const ratingsReviewsActions = {
  getRatingsMeta: (meta) => ({
    type: 'GET_RATINGS',
    ratingsMeta: meta
  }),

  setTotalRatings: (meta) => ({
    type: 'SET_TOTAL_RATINGS',
    totalRatings: Object.values(meta.ratings).reduce((a, b) => a + b)
  })
}

export default ratingsReviewsActions;