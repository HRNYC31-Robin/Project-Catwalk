import { connect } from 'react-redux';
import RatingsReviews from '../../components/Armando/RatingsReviews.jsx';
import ratingsReviewsActions from '../actions/ReviewsActions/ratingsReviewsAction.js';

const mapStateToProps = (state) => ({
  ratingsMeta: state.ratingsMeta,
  totalRatings: state.totalRatings
});

const mapDispatchToProps = (dispatch) => ({
  handleRatingsUpdate: (ratings) => {
    dispatch(ratingsReviewsActions.getRatingsMeta(ratings));
    dispatch(ratingsReviewsActions.setTotalRatings(ratings))
  }
});

const RatingsReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsReviews);

export default RatingsReviewsContainer;