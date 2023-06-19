import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCards from './WeatherCards'
const Weather = () => {
  const [searchValue, setSearchvalue] = useState("Delhi")

  const [tempData,setTempdata]=useState({});

  const getSearchInfoData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a7d69284f2f0219c93bc3832e4fc17ab`
      // here it will returns an promise .means either it will be fullfilled or rejected
      const res = await fetch(url)
      const data = await res.json();

      // object destructuring
      const { temp, humidity, pressure } = data.main
      console.log(temp)
      const { main: weatherMood } = data.weather[0]
      console.log(weatherMood)
      const { speed: windSpeed } = data.wind
      const { name: cityName } = data;
      const { country, sunset } = data.sys

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        windSpeed,
        cityName,
        country,
        sunset
      }
      setTempdata(myNewWeatherInfo)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getSearchInfoData();
  }, [])
  return (
    <>
    {/* Search Bar */}
      <div className="search-section">
        <div className="search-input">
          <input type="search" placeholder='Searh...' autoFocus className='search' value={searchValue} onChange={(e) => setSearchvalue(e.target.value)} />
        </div>
        <div className="search-button">
          <button onClick={getSearchInfoData}>Search</button>
        </div>
      </div>
      
      {/* Weather Cards */}
      <WeatherCards tempData={tempData}/>
      
    </>
  )
}

export default Weather