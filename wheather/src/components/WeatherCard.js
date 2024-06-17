import React, { useEffect, useState } from 'react'

const WeatherCard = ({ myData }) => {

  const [weatherMoodState, setWeatherMoodState] = useState("");
  const {
    temp,
    pressure,
    humidity,
    main,
    name,
    speed,
    country, sunset

  } = myData


  let date = new Date(sunset * 1000);  //convert second into miliseconds 
  let currTime = `${date.getHours()}:${date.getMinutes()}`

  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds": setWeatherMoodState("wi-day-cloudy")
          break;

        case "Clear": setWeatherMoodState("wi-day-sunny")
          break;

        case "Haze": setWeatherMoodState("wi-day-haze")
          break;

        case "Mist": setWeatherMoodState("wi-day-hail")
          break;
        default:
          setWeatherMoodState("wi-day-sunny")
          break
      }
    }
  }, [main])

  return (
    <>
      <div className="weather-card">
        <div className="weather-icons">
          <i className={`wi ${weatherMoodState}`}></i>
        </div>
        <div className="weather-info">
          <div className="temprature">
            <span className='degree'>{temp} &deg;</span>
            <div className="weather-type">
              <h2>{main}</h2>
              <span className='city'>{name},{country}</span>
            </div>

          </div>
          <div className="date">
            <p>{new Date().toLocaleString()}</p>
          </div>
        </div>

        {/* All Weather Category Icons */}
        <div className="category">
          <div className="min-temp">
            <div className="temp-icons">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='weather_temp'>{currTime} PM<br />Sunset</p>
            </div>

            <div className="temp-icons">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='weather_temp'>{humidity}<br />Humidity</p>
            </div>
            <div className="temp-icons">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='weather_temp'>{pressure}<br />Pressure</p>
            </div>

            <div className="temp-icons">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='weather_temp'>{speed}<br />Speed</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default WeatherCard