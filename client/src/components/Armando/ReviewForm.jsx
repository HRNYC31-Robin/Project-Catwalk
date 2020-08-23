import React from 'react';
import { submitReviewPost } from '../../../../helpers/RatingsReviews/submitReviewPost.js';


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
      'product_id': this.props.metaData.product_id,
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
    this.handleCharacteristicChoice = this.handleCharacteristicChoice.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const newChars = Object.assign({}, this.state.characteristics);
    const newState = Object.assign({}, this.state, {characteristics: newChars});

    //update the relevant property
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleStarChoice(star) {
    this.setState({rating: star});
  }

  handleCharacteristicChoice(choice) {
    // copy characteristic object
    const newChars = JSON.parse(JSON.stringify(this.state.characteristics));
    newChars[choice.id] = choice.value;
    // update characteristics state
    this.setState({
      characteristics: newChars
    });
  }

  handleFormSubmit(e) {
    const prodId = this.props.metaData.product_id;
    e.preventDefault();
    if (validateForm(this.props.metaData.characteristics, this.state)) {
      // post review with helper function
      submitReviewPost(this.props.handlePostReview,
        this.props.handleClose,
        this.state);
    }
  }

  render() {
    return (
      <form id='review-modal' onSubmit={this.handleFormSubmit}>
        <div id='form-top'>
          <h3>Write Your Review</h3>
          <button id='close' onClick={this.props.handleClose}>X</button>
        </div>

        <h5>About the: {this.props.prodName}</h5>
        <RatingInput handleChoice={this.handleStarChoice} />
        <span id='recommend-form'>
          <p>Recommend</p>
          <label htmlFor='radio-yes'>Yes: </label>
          <input type='radio' id='radio-yes' name='recommend' className='rec-radio' onClick={() => this.setState({recommend: true})}/>
          <label htmlFor='radio-no'>No: </label>
          <input type='radio' id='radio-no' name='recommend' className='rec-radio' onClick={() => this.setState({recommend: false})}/>
        </span>
        <input type='text' name='name' placeholder='name' onChange={this.handleInputChange}/>
        <input type='email' name='email' placeholder='email' onChange={this.handleInputChange}/>
        <input type='text' name='summary' placeholder='summary' maxLength='60' onChange={this.handleInputChange}/>
        <textarea id='body' type='text' name='body' placeholder='body' maxLength='1000' rows='4' onChange={this.handleInputChange}/>
        <Characteristic metaData={this.props.metaData} handleChar={this.handleCharacteristicChoice}/>
        <input id='submit' type='submit'/>
      </form>
    );
  }
}


export default ReviewForm;


/*****************************************************
 ****            Star Rating component             ***
******************************************************/


const RatingInput = ({ handleChoice }) => {
  const emptyStar = <span>&#9734;</span>;
  const fullStar = <span>&#9733;</span>;
  const [label, setLabel] = React.useState('');
  const [stars, setStars] = React.useState([emptyStar, emptyStar, emptyStar, emptyStar, emptyStar]);
  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  const handleStar = (e) => {
    // console.log(e.target.dataset);
    const starIndex = Number(e.target.dataset.rating);
    const newStars = [];
    const newLabel = labels[starIndex];

    stars.forEach((star, i) => {
      if (i <= starIndex) {
        newStars.push(fullStar);
      } else {
        newStars.push(emptyStar);
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
          <div key={`${star}Container${i}`}>
            <input type='radio'
              id={`star${i}`}
              key={`star${i}`}
              className='star-radio'
              name='star-radio'
              data-rating={i}
              onClick={handleStar}
            />
            <label htmlFor={`star${i}`} key={`${i}star`}>{star}</label>
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

const Characteristic = ({metaData, handleChar}) => {
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

  const handleCharClick = (e) => {
    const char = e.target.name;
    const id = characteristics[char].id;
    const value = Number(e.target.dataset.value);

    console.log('this is charChoice', char, id, value);
    const choice = {id, value, char};

    handleChar(choice);
  };


  return Object.keys(characteristics).map(char => (
    <div className='characteristic-form' key={char}>
      <p>{char}</p>
      {
        labels[char].map((label, i) => (
          <div className='labels' key={`${label}${i}`}>
            <input id={`${label}${char}`}
              key={`${label}${char}`}
              type='radio' name={char}
              data-value={i + 1}
              className='char-radio'
              onClick={handleCharClick}/>
            <label htmlFor={label} key={`${char}${label}`}>{label}</label>
          </div>
        ))
      }
    </div>
  ));
};


/******************************************
 *      Form validation
******************************************/

const validateForm = (metaChar, state) => {
  // check that each value is valid
  if (Object.keys(metaChar).length !== Object.keys(state.characteristics).length) {
    // console.log('chars');
    return false;
  }

  if (state.rating < 1) {
    // console.log('rates');
    return false;
  }

  if (state.summary.trim() === '') {
    // console.log('sum');
    return false;
  }

  if (state.body.trim() === '') {
    // console.log('body');
    return false;
  }

  if (state.name.trim() === '') {
    // console.log('name');
    return false;
  }

  if (state.email.trim() === '' || state.email.indexOf('@') < 1 ) {
    // console.log('email');
    return false;
  }

  return true;
};