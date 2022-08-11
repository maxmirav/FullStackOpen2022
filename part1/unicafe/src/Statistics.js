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
        <table>
            <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={good + bad + neutral}/>
                <StatisticLine text="average" value={((good * 1) + (bad * -1) + (neutral * 0)) / (good + bad + neutral)}/>
                <StatisticLine text="positive" value={(good / (good + bad + neutral) * 100) + "%"}/>
            </tbody>
        </table>
    </div>
  );
};

export default Statistics