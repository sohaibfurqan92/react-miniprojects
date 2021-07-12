import { useState, useEffect } from 'react';
import List from './List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      setList([...list, newItem]);
      setAlert({ msg: 'Item added successfully', type: 'success' });
      setName('');
    } else {
      setAlert({ msg: 'Please enter a name', type: 'danger' });
    }
  };
  return (
    <section className='section-center'>
      <h3>Grocery Bud</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='.e.g. eggs'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type='submit' value='Submit' />
      </form>

      {list.length > 0 && <List list={list} />}
      {list.length > 0 && <button className='clear-btn'>Clear Items</button>}
    </section>
  );
}

export default App;
