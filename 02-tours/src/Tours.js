import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section className='tours'>
      {tours.map((tour) => {
        return <Tour tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
