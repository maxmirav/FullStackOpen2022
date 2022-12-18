import CountryInfo from "./CountryInfo.jsx"

const Display = ({ filteredCountries, searchFunction }) => {

    if(filteredCountries.length === 1) {
        return <CountryInfo resultCountry={filteredCountries[0]} />
    }
    else if(filteredCountries.length > 10) {
      return <p>Too many matches! Be more specific</p>
    }
    else {
      return filteredCountries.map(country => <p key={country.cca3}>{country.name.common} <button value={country.name.common} onClick={(e) => searchFunction(e.target.value)}>show</button></p>)   
    }
  }

  export default Display