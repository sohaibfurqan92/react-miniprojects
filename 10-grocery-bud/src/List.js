import React from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';

const List = ({ list }) => {
  return (
    <section className='list'>
      {list.map((listItem, index) => {
        const { id, name } = listItem;

        return (
          <article>
            <h3>{name}</h3>
            <div className='btn-container'>
              <BiTrash className='trash-icon' />
              <BiEdit className='edit-icon' />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
