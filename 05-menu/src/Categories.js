import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <section className='categories-section'>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;

//  <section className='categories-section'>
//    <button className='category-button'></button>
//  </section>;
