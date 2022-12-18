import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import CountrySearch from './components/CountrySearch'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setNewSearchCountry] = useState('')

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

  const handleCountryChange = (event) => {
    setNewSearchCountry(event.target.value)
  }
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return(
    <div>
      <CountrySearch searchCountry={searchCountry} countryChangeFunction={handleCountryChange} />
      <Display filteredCountries={filteredCountries} searchFunction={setNewSearchCountry}/>
    </div>
  )
}

export default App