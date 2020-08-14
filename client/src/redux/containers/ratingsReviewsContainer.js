import { connect } from 'react-redux';
import RatingsReviews from '../../components/Armando/RatingsReviews.jsx';
import ratingsReviewsActions from '../actions/ReviewsActions/ratingsReviewsAction.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  ratingsMeta: state.ratingsMeta,
  totalRatings: state.totalRatings,
  starAverage: state.starAverage
});

const mapDispatchToProps = (dispatch) => ({
  handleRatingsUpdate: (ratings) => {
    dispatch(ratingsReviewsActions.getRatingsMeta(ratings));
    dispatch(ratingsReviewsActions.setTotalRatings(ratings));
    // dispatch(ratingsReviewsActions.setTotalRatings(ratings));
  }
});

const RatingsReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsReviews);

export default RatingsReviewsContainer;