import { useState } from "react"

const StatisticLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>
  )
}

const Statistics = ({ votes }) => {
  
  if (votes.all === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine value={votes.good} text='good: '/>
            <StatisticLine value={votes.neutral} text='neutral: '/>
            <StatisticLine value={votes.bad} text='bad: '/>
            <StatisticLine value={votes.all} text='all: '/>
            <StatisticLine value={(((votes.good * 1) + (votes.bad * -1)) / votes.all).toFixed(1)} text='average: '/>
            <StatisticLine value={((votes.good / votes.all) * 100).toFixed(1) + '%'} text='positive: '/>
          </tbody>
        </table>
      </>
    ) 
  }
}

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )  
}


const App = () => {
  const [votes, setVote] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0
  })


  const handleGood = () => setVote({...votes, good: votes.good + 1, all: votes.all + 1})

  const handleNeutral = () => setVote({...votes, neutral: votes.neutral + 1, all: votes.all + 1})

  const handleBad = () => setVote({...votes, bad: votes.bad + 1, all: votes.all + 1})

  return (
    <div>
      <Heading text='give feedback' />
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Heading text='statistics' />
      <Statistics votes={votes} />
    </div>
  )
}

export default App;
