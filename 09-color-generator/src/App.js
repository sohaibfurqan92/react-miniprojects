import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    var re = /#[0-9A-Fa-f]{6}/g; //regex to test hexadecimal number

    if (re.test(color)) {
      setError(false);
      setList(new Values(color).all(10));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className='container'>
        <div className='header'>
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='#f15025'
              value={color}
              className={error ? 'error' : ''}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button className='submit-btn'>Submit</button>
          </form>
        </div>

        <section className='colors'>
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                hexColor={color.hex}
                {...color}
                index={index}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}

export default App;
