import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className='person'>
            <img src={image} alt={name} />
            <div className='details'>
              <h2 className='person-name'>{name}</h2>
              <h4 className='person-age'>{age + ' years old'}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
