import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('this is the effect')
    console.log(persons.length)
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(persons.length)
      })
  }, [])

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