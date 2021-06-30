import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const clearData = () => {
    setPeople([]);
  };
  const [people, setPeople] = useState(data);
  return (
    <div className='App'>
      <div className='container'>
        <h2>{people.length} Birthdays today</h2>
        <List people={people} />
        <button className='btn' onClick={clearData}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
