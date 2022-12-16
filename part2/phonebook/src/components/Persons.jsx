import Person from "./Person"

const Persons = ({filteredPersons}) => {
  return(
    <ul>
    {filteredPersons.map(a => 
        <Person key={a.name} individual={a} />
      )}
    </ul>
  )
}

export default Persons