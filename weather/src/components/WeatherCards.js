import React, { useEffect, useState } from 'react'

const WeatherCards = ({ tempData }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    windSpeed,
    cityName,
    country,
    sunset } = tempData

    // Here sunset is coming in second,so first we need to convert in milisecond
  const date = new Date(sunset * 1000);
  const tempr = `${date.getHours()}:${date.getMinutes()}`

  useEffect(() => {
    console.log(weatherMood)
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds": setWeatherState("wi-day-cloudy")
          break;
        case "Haze": setWeatherState("wi-day-haze")
          break;

        case "Mist": setWeatherState("wi-dust")
          break;

        case "Clear": setWeatherState("wi-day-sunny")
          break;

        default:
          setWeatherState("wi-day-sunny");

      }
    }

  }, [weatherMood])

  return (
    <>
      <div className="weather-card">
        <div className="weather-icon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weather-temp">
          <div className="temp">
            <span className='temp-count'>{temp} <sup className='degree'>o</sup></span>
            <span className='weather-type'>{weatherMood}
              <p className='city-name'>{cityName},{country}</p>
            </span>
          </div>
          <div className="date-time">
            <div className='date-time-section'>
              <p className='date'>{new Date().toLocaleString()}</p>
            </div>
          </div>

        </div>
        <div className="extra-temp">
          <div className="two-sided-data">
            <p ><i className={"wi wi-sunset"}></i></p>
            <p className='left-side-temp'>{tempr} PM<br /> Sunset</p>
          </div>
          <div className="two-sided-data">
            <p ><i className={"wi wi-humidity"}></i></p>
            <p className='left-side-temp'>{humidity}<br /> Humidity</p>
          </div>
          <div className="two-sided-data">
            <p ><i className={"wi wi-rain"}></i></p>
            <p className='left-side-temp'>{pressure}<br /> Pressure</p>
          </div>
          <div className="two-sided-data">
            <p ><i className={"wi wi-strong-wind"}></i></p>
            <p className='left-side-temp'>{windSpeed}<br /> Speed</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCards