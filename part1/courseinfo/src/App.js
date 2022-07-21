const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>

      <Part name={props.name1} exercise= {props.exercises1}/>
      <Part name={props.name2} exercise= {props.exercises2}/>
      <Part name={props.name3} exercise= {props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name}: {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const courseTitle = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={courseTitle}/>
      <Content name1={part1.name} exercises1={part1.exercises} name2={part2.name} exercises2={part2.exercises} name3={part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

export default App;