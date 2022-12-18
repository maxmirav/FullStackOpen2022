import { useEffect, useState } from 'react'
import axios from 'axios'

const CountryInfo = ({ resultCountry }) => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    wind: 0,
    icon: ''
  })
  const lat = resultCountry.capitalInfo.latlng[0]
  const long = resultCountry.capitalInfo.latlng[1]
  const myKey = import.meta.env.VITE_WEATHER_KEY

  const countryWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=metric`
  
  useEffect(() => {
    axios
      .get(countryWeatherLink)
      .then(response => {
        setWeatherData({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
      })
  }, [])

    return(
        <div>
          <h1>{resultCountry.name.common}</h1>
          <p>capital: {resultCountry.capital}</p>
          <p>area: {resultCountry.area}</p>
          <h2>languages:</h2>
          <ul>
            {(Object.values(resultCountry.languages)).map(lang => <li key={lang}>{lang}</li>)}
          </ul>
          <img src={resultCountry.flags.png} alt="" />
          <h2>Weather in {resultCountry.capital}</h2>
          <p>temperature: {weatherData.temperature} Celsius</p>
          <img src={weatherData.icon} alt="icon of current weather" />
          <p>wind: {weatherData.wind} m/s</p>
        </div>
    )
}

export default CountryInfo