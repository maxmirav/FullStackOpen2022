import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
    const [mostVotes, setMostVotes] = useState();
    const [mostAnecdotes, setMostAnecdotes] = useState("");

    const addPoints = () => {
      const newPoints = {...points}
      newPoints[selected] += 1;
      setPoints(newPoints);

      //get the array item with the most points
      let maxValue = Object.entries(newPoints).sort((x, y) => y[1] - x[1])[0];
      console.log(maxValue);

      //get the text
      let newMostAnecdotes = anecdotes[maxValue[0]];
      setMostAnecdotes(newMostAnecdotes);

      //get the votes
      let newMostVotes = maxValue[1];
      setMostVotes(newMostVotes);

    }

  const DisplayMostVotedAnecdote = () => {
    if(mostAnecdotes !== ""){
      return (
        <>
          <span>{mostAnecdotes}</span> <br />
          <span>has {mostVotes} votes</span>
        </>
      );
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <span>has {points[selected]} votes</span>
      <br />
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <button onClick={addPoints}>vote</button>
      
      <h2>Anecdote with most votes</h2>
      <DisplayMostVotedAnecdote />
    </div>
  );
}

export default App;