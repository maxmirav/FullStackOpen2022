import Person from "./Person"

const Persons = ({filteredPersons}) => {
  return(
    <ul>
    {filteredPersons.map(a => 
        <Person individual={a} key={a.name}/>
      )}
    </ul>
  )
}

export default Persons