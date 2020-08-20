import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewReport from './ReviewReport.jsx';

const Helpful = ({helpfulness, reviewId}) => {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);

  // api put request
  const handleYesClick = () => {
    // save reviewId to list of helpful reviews
    if (!localStorage.getItem('helpfulReviews')) {
      const helpReviews = JSON.stringify({ [reviewId]: true });
      localStorage.setItem('helpfulReviews', helpReviews);
      setHelpfulCount(helpfulCount + 1);
    } else {
      // localStorage.removeItem('helpfulReviews');
      const helpful = JSON.parse(localStorage.getItem('helpfulReviews'));
      // check presence of reviewId
      if (!helpful.hasOwnProperty(reviewId)) {
        helpful[reviewId] = true;
        const newHelpful = JSON.stringify(helpful);

        axios.put(`http://18.224.37.110/reviews/${reviewId}/helpful`)
          .then(() => {
            localStorage.setItem('helpfulReviews', newHelpful);
            setHelpfulCount(helpfulCount + 1);
          })
          .catch(err => console.log(err));
      } else {
        console.log('review already exists');
      }
    }
    // console.log('this is helpfulReviews', !localStorage.getItem('helpfulReviews'));
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