import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '9831283' },
    { name: 'The Thing', phoneNumber: '4343434' },
    { name: 'Quack', phoneNumber: '8492' },
    { name: 'Spiderman', phoneNumber: '1234' },
    { name: 'Superman', phoneNumber: '23-34-234' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [filter, setFilter] = useState('')

  const filteredPersons = showFilter ? persons.filter(person => person.name.toLowerCase().includes(filter)): persons

  const handleFilter = (event) => {
    if(event.target.value === ''){
      setShowFilter(false)
      setFilter('')
    }
    else {
      const newFilter = event.target.value
      setFilter(newFilter.toLowerCase())
      setShowFilter(true)
    }
  }

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
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterFunction={handleFilter}/>

      <h2>add a new</h2>
        <PersonForm submitNew={addName} 
        handleNameFunction={handleNameInput} 
        handlePhoneFunction={handlePhoneInput} 
        newName={newName} 
        newPhone={newPhone} />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>

    </div>
  )
}

export default App