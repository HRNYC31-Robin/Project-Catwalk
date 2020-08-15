import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    // overall rating
    // recommend
    // characteristics
    // review summary 60
    // review body 1000
    // upload photos
    // nickname
    // email
    // submit button

    this.state = {
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarChoice = this.handleStarChoice.bind(this);
  }

  handleInputChange(e) {
    const newChars = Object.assign({}, this.state.characteristics);
    const newState = Object.assign({characteristics: newChars}, this.state);

    //update the relevant property
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleStarChoice(star) {
    this.setState({rating: star});
  }

  render() {
    return (
      <div id='review-modal'>
        <button id='close' onClick={this.props.handleClose}>X</button>
        <RatingInput handleChoice={this.handleStarChoice} />
        <input type='text' name='name' placeholder='name' onChange={this.handleInputChange}/>
        <input type='email' name='email' placeholder='email' onChange={this.handleInputChange}/>
        <input type='text' name='summary' placeholder='summary' onChange={this.handleInputChange}/>
        <input type='text' name='body' placeholder='body' onChange={this.handleInputChange}/>
        <Characteristic metaData={this.props.metaData} />
      </div>
    );
  }
}


export default ReviewForm;


/*****************************************************
 ****            Star Rating component             ***
******************************************************/


const RatingInput = ({ handleChoice }) => {
  const [label, setLabel] = React.useState('');
  const [stars, setStars] = React.useState([farFaStar, farFaStar, farFaStar, farFaStar, farFaStar]);
  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  const handleStar = (e) => {
    // console.log(e.target.dataset);
    const starIndex = Number(e.target.dataset.rating);
    const newStars = [];
    const newLabel = labels[starIndex];

    stars.forEach((star, i) => {
      if (i <= starIndex) {
        newStars.push(fasFaStar);
      } else {
        newStars.push(farFaStar);
      }
    });

    setStars(newStars);
    handleChoice(starIndex + 1);
    setLabel(newLabel);
  };

  return (
    <div id='star-form'>
      <p>Rating:</p>
      {
        stars.map((star, i) => (
          <div>
            <input type='radio'
              id={`star${i}`}
              className='star-radio'
              name='star-radio'
              data-rating={i}
              onClick={handleStar}
            />
            <label htmlFor={`star${i}`} ><FontAwesomeIcon icon={star} /></label>
          </div>
        ))
      }
      <p>{label}</p>
    </div>
  );
};

/*********************************************
 *        Characteristic Component
*********************************************/

const Characteristic = ({metaData}) => {
  const characteristics = metaData.characteristics;
  const labels = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide'
    ],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'
    ]
  };


  return Object.keys(characteristics).map(char => (
    <div className='characteristic-form'>
      {
        labels[char].map(label => (
          <div className='labels'>
            <input id={label} type='radio' className='char-radio'/>
            <label htmlFor={label} >{label}</label>
          </div>
        ))
      }
    </div>
  ));
};


