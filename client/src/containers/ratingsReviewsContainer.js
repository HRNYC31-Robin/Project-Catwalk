import { connect } from 'react-redux';
import RatingsReviews from '../components/Armando/RatingsReviews.jsx';
import ratingsReviewsActions from '../actions/ReviewsActions/ratingsReviewsAction.js';

const mapStateToProps = (state) => ({
  ratingsMeta: state,
});

const mapDispatchToProps = (dispatch) => ({
  handleRatingsUpdate: (ratings) => {
    dispatch(ratingsReviewsActions.getRatingsMeta(ratings));
  }
});

const RatingsReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsReviews);

export default RatingsReviewsContainer;