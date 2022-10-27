const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Content = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((coursePart) => {
        return <Part coursePart={coursePart} key={coursePart.id} />;
      })}
    </>
  );
};

const Part = ({ coursePart }) => {
  return (
    <p>
      {coursePart.name}: {coursePart.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  );
};

const Total = ({ courseParts }) => {
  let initialValue = 0;

  let total = courseParts.reduce(function (accumulator, curValue) {
    return accumulator + curValue.exercises;
  }, initialValue);

  return <h3>total of {total} exercises</h3>;
};


export default Course