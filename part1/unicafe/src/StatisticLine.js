const StatisticLine = ({ text, value }) => {
  return (
    <div>
        <span>{text} {value}</span>
        <br />
    </div>
  );
}

export default StatisticLine;