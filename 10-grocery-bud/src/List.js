import React from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';

const List = ({ list, deleteItem, editItem }) => {
  return (
    <section className='list'>
      {list.map((listItem, index) => {
        const { id, name } = listItem;

        return (
          <article>
            <h3>{name}</h3>
            <div className='btn-container'>
              <BiTrash
                className='trash-icon'
                onClick={() => {
                  deleteItem(id);
                }}
              />
              <BiEdit
                className='edit-icon'
                onClick={() => {
                  editItem(id);
                }}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
