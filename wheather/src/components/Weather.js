import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Noida")
  const [myData,setNewData]=useState({})


  const getWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c400e0f4961014c9de25f71467b8909`
      let res = await fetch(url);   //ye mujhe ek promise return karega, so either mera request resolve huha hoga ya reject
      let value = await res.json();
      console.log(value)
      const { temp, pressure, humidity } = value.main;
      const { main } = value.weather[0];
      const { name } = value
      const { speed } = value.wind
      const { country, sunset } = value.sys

      const myNewData = {
        temp,
        pressure,
        humidity,
        main,
        name,
        speed,
        country, sunset

      }
      setNewData(myNewData);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getWeatherData();
  }, [])

  return (
    <>

      {/* Search Barr */}
      <div className="search-bar">
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button className='btn' onClick={() => getWeatherData()}>Search</button>
      </div>

      {/* Weather Card */}
      {/* I am using this site icons https://erikflowers.github.io/weather-icons/ */}
       <WeatherCard myData={myData}/>
    </>
  )
}

export default Weather;