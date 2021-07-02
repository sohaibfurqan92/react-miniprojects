import React from 'react';

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;

  return (
    <article className='tour'>
      <img src={image} alt={name} className='tour-img' />
      <div className='tour-desc'>
        <div className='tour-desc-header'>
          <h2>{name}</h2>
          <h2 className='price'>${price}</h2>
        </div>
        <p>{info}</p>
        <button
          className='delete-btn'
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
