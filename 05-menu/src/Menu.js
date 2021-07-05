import React from 'react';

const Menu = ({ menuItems }) => {
  return menuItems.map((menuItem) => {
    const { id, title, category, price, img, desc } = menuItem;

    return (
      <article key={id} className='menu-item'>
        <img src={img} alt={title} />
        <div className='item-details'>
          <div className='item-header'>
            <h3>{title}</h3>
            <h3 className='price'>${price}</h3>
          </div>
          <p>{desc}</p>
        </div>
      </article>
    );
  });
};

export default Menu;
