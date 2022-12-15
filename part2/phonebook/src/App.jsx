import Person from './components/Person'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'The Thing' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName 
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <ul>
      {persons.map(a => 
          <Person key={a.name} individual={a} />
        )}
      </ul>
    </div>
  )
}

export default App