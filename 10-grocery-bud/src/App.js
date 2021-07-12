import { useState, useEffect } from 'react';
import Alert from './Alert';
import List from './List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(null);
  const [editID, setEditID] = useState('');

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      if (editID) {
        setList(
          list.map((item) => {
            if (item.id === editID) {
              return { ...item, name };
            }
            return item;
          })
        );
        setName('');
        setEditID('');
        showAlert('Item Edited Successfully', 'success');
      } else {
        const newItem = { id: new Date().getTime().toString(), name };
        setList([...list, newItem]);
        showAlert('Item added Successfully', 'success');

        setName('');
      }
    } else {
      showAlert('Please enter a name', 'danger');
    }
  };

  const clearItems = () => {
    setList([]);
    showAlert('All items cleared', 'danger');
  };

  const deleteItem = (id) => {
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
    showAlert('Item Deleted', 'danger');
  };

  const editItem = (id) => {
    setEditID(id);
    const item = list.find((listItem) => {
      return listItem.id === id;
    });
    setName(item.name);
  };

  return (
    <section className='section-center'>
      <h3>Grocery Bud</h3>
      {alert && <Alert alert={alert} />}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='.e.g. eggs'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type='submit' value={editID ? 'Edit' : 'Submit'} />
      </form>

      {list.length > 0 && (
        <List list={list} deleteItem={deleteItem} editItem={editItem} />
      )}
      {list.length > 0 && (
        <button className='clear-btn' onClick={clearItems}>
          Clear Items
        </button>
      )}
    </section>
  );
}

export default App;
