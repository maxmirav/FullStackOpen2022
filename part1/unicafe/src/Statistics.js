import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad}) => {
    if(good === 0 && neutral === 0 && bad === 0){
        return (
        <div>
            <br />
            No feedback given
        </div>
        );
    }

  return (
    <div>
        <h2>statistics</h2>
        
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good + bad + neutral}/>
        <StatisticLine text="average" value={good + bad + neutral / 3}/>
        <StatisticLine text="positive" value={(good / (good + bad + neutral) * 100) + "%"}/>
    </div>
  );
};

export default Statistics