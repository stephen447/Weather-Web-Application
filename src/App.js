import React, { useState } from 'react'
import './App.css'

function App() {

  const apikey = '6e7e45fd86e60c1ed32d3373a9b51508'
  const [weatherdata, setWeatherData] = useState() // Storing json for city
  const [city, setCity] = useState("") // Stroing city inputted
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  //Weatherfunction when word entered
  const getWeather = (event) => {
    if(event.key==="Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&q=${city},IE&units=metric&appid=${apikey}`).then(response => response.json()).then(data =>{setWeatherData(data)
      setCity("")})
    }
  }

  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder='Enter location'
      onChange={f=>setCity(f.target.value)}
      value={city}
      onKeyPress={getWeather}/>
      
    <div className='timing'>
      <div className='date'>
        <p>{date}</p>
      </div>

      <div className='time'>
        <p>{time}</p>
      </div>
    </div>
  
    {typeof weatherdata ==='undefined' ? (
      <div>
        <p>Welcome to the weather app!</p>
      </div>
    ) : (
      <div className='data'>
        <p className='city'>{weatherdata.name}</p>
        <p className='temp'>{Math.round(weatherdata.main.temp)} C</p>
        <p className='conditions'>{weatherdata.weather[0].main}</p>
      </div>
    )}
    </div>
  )
}

export default App

