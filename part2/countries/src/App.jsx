import { useState, useEffect } from 'react'
import axios from 'axios'

const Display = ({ filteredCountries }) => {
  if(filteredCountries.length === 1) {
    const resultCountry = filteredCountries[0]
    return(
      <div>
        <h1>{resultCountry.name.common}</h1>
        <p>capital: {resultCountry.capital}</p>
        <p>area: {resultCountry.area}</p>
        <ul>
          {(Object.values(resultCountry.languages)).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={resultCountry.flags.png} alt="" />
      </div>
    )
  }
  else if(filteredCountries.length > 10) {
    return <p>Too many matches! Be more specific</p>
  }
  else {
    return filteredCountries.map(country => <p key={country.cca3}>{country.name.common}</p>)
  }

}

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
      <h2>{searchCountry}</h2>
      <form>
        find countries: <input onChange={handleCountryChange}/>
      </form>
      <Display filteredCountries={filteredCountries} />
    </div>
  )
}

export default App