const Person = ({ individual }) => {
    return(
        <li>{individual.name}: {individual.phoneNumber}</li>
    )
}

export default Person