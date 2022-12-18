const CountryInfo = ({ resultCountry }) => {
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

export default CountryInfo