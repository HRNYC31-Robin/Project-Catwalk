import { connect } from 'react-redux';
import ReviewList from '../../components/Armando/ReviewList.jsx';
import reviewListActions from '../actions/ReviewsActions/reviewListAction.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  reviews: state.reviews,
  visibleReviews: state.visibleReviews,
  ratingsMeta: state.ratingsMeta
});

const mapDispatchToProps = (dispatch) => ({
  handleMoreReviewsClick: (reviews) => {
    dispatch(reviewListActions.addVisibleReviews(reviews));
  },
  addMoreReviews: (reviews) => {
    dispatch(reviewListActions.changeReviewList(reviews));
  }
});

const ReviewListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewList);

export default ReviewListContainer;

