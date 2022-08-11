import { useState } from 'react';
import DisplayButton from './DisplayButton';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  return (
    <div>
      <h2>give feedback</h2>
      <DisplayButton text="good" onClick={() => setGood(good + 1)}/>
      <DisplayButton text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <DisplayButton text="bad" onClick={() => setBad(bad + 1)}/>
    </div>
  );
}

export default App;
