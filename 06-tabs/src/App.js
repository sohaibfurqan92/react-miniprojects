import { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section-center'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[currentIndex];

  return (
    <main className='jobs section-center'>
      <section className='btn-container'>
        {jobs.map((job, index) => {
          return (
            <button
              key={job.id}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`job-btn ${index === currentIndex ? 'active' : ''}`}
            >
              {job.company}
            </button>
          );
        })}
      </section>
      <section className='job-info'>
        <h1>{title}</h1>
        <h3>{company}</h3>
        <h4>{dates}</h4>
        <ul>
          {duties.map((duty, index) => {
            return <li key={index}>{duty}</li>;
          })}
        </ul>
        <button className='info-btn'>More Info</button>
      </section>
    </main>
  );
}

export default App;
