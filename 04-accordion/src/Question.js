import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className='question'>
      <div className='header'>
        <h2 className='question-title'>{title}</h2>
        <span
          className='toggle-info'
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {showDetails ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </span>
      </div>
      <p>{showDetails ? info : ''}</p>
    </div>
  );
};

export default Question;
