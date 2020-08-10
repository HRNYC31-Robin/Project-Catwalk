// action creator for reviews list

const reviewListActions = {};

reviewListActions.changeReviewList = (reviews) => ({
  type: 'CHANGE_REVIEWS',
  reviews: reviews
});

reviewListActions.addVisibleReviews = (reviews) => ({
  type: 'ADD_TO_VISIBLE_REVIEWS',
  visibleReviews: reviews
});

export default reviewListActions;
