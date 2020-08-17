import React from 'react';
import axios from 'axios';

const ReviewReport = ({reviewId}) => {
  const handleReport = () => {
    axios.put(`http://18.224.37.110/reviews/${reviewId}/report`)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return <button id='report-button' onClick={handleReport}>Report</button>;
};

export default ReviewReport;