import React, {useState} from 'react';
import SingleQuestion from './Question.js';
import data from './data.js';


function App() {
  const[questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {
            questions.map((question) => {
              return ( 
                <SingleQuestion key ={questions.id} {...question}/>
              );
          })};
        </section>  
      </div> 
    </main>
  );
}

export default App;
