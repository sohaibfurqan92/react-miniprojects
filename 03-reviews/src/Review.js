import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkPerson = (index) => {
    if (index < 0) {
      return reviews.length - 1;
    }
    if (index > reviews.length - 1) {
      return 0;
    }
    return index;
  };
  const prevPerson = () => {
    const prevIndex = index - 1;
    setIndex(checkPerson(prevIndex));
  };
  const nextPerson = () => {
    const nextIndex = index + 1;
    setIndex(checkPerson(nextIndex));
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    setIndex(randomIndex);
  };

  return (
    <article className='review'>
      <img src={image} alt={name} className='person-img' />
      <h2 className='person-name'>{name}</h2>
      <h4 className='person-job'>{job}</h4>
      <p>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className='surprise-btn' onClick={surpriseMe}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
