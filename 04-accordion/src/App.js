import data from './data';
import Question from './Question';

function App() {
  return (
    <>
      <div className='container'>
        <h1>Questions and answers about Login</h1>
        <div className='questions'>
          {data.map((question) => {
            console.log(question.title);
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
