import Person from './components/Person'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '9831283' },
    { name: 'The Thing', phoneNumber: '4343434' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName, 
      phoneNumber: newPhone
    }

    if(persons.some(a => a.name === newName)) {
      alert(`${newName} is already added to the phonebook!!`)
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameInput}/>
          <br />
          number: <input onChange={handlePhoneInput}/>
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