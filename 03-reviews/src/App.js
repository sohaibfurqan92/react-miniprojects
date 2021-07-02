import { useState, useEffect } from 'react';
import reviews from './data';
import Review from './Review';

function App() {
  return (
    <main>
      <h1>Our Reviews</h1>
      <div className='separator'></div>
      <section className='reviews'>
        <Review reviews={reviews} />
      </section>
    </main>
  );
}

export default App;
