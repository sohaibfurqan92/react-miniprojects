import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, [url]);
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <h1>Our Tours</h1>
      <div className='separator'></div>
      <section className='tours'>
        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
}

export default App;
