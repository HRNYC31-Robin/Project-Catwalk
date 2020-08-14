import React from 'react';
import axios from 'axios';

const Helpful = ({helpfulness, reviewId}) => {
  // api put request
  const handleYesClick = () => {
    axios.put(`http://18.224.200.47/reviews/helpful/${reviewId}`)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  // single line component with Yes and Report
  return <p id='helpful-prompt'>Was this review helpful? <button onClick={handleYesClick}>Yes</button>({helpfulness})</p>;
};

export default Helpful;