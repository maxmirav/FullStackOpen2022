const Total = ({ parts }) => {
    console.log(parts)
    const total = parts.reduce((acc, part) => {return acc + part.exercises}, 0)
    console.log(total)
    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Total