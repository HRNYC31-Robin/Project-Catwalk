import React, {useState, useEffect} from 'react';
import ReviewReport from './ReviewReport.jsx';
import { updateHelpful } from '../../../../helpers/RatingsReviews/updateHelpful.js';

const Helpful = ({helpfulness, reviewId}) => {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);

  // api put request
  const handleYesClick = () => {
    // Post and update using helper
    updateHelpful(reviewId, helpfulCount, setHelpfulCount);
  };

  // single line component with Yes and Report
  return (
    <p id='helpful-prompt'>
      Was this review helpful?
      <button onClick={handleYesClick}>Yes</button>({helpfulCount})
      <ReviewReport reviewId={reviewId}/>
    </p>);
};

export default Helpful;