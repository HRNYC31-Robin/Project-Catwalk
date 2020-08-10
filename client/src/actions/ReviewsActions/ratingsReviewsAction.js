// actions for the ratings widget
const ratingsReviewsActions = {
  getRatingsMeta: (meta) => ({
    type: 'GET_RATINGS',
    ratingsMeta: meta
  }),
}

export default ratingsReviewsActions;