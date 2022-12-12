import React, { useState } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import './App.css'

function App() {

  const apikey = '6e7e45fd86e60c1ed32d3373a9b51508'
  const [weatherdata, setWeatherData] = useState() // Storing json for city
  const [city, setCity] = useState("") // Stroing city inputted
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  

  // Weather function when word entered
  const getWeather = (event) => {
    if(event.key==="Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&q=${city},IE&units=metric&appid=${apikey}`).then(response => response.json()).then(data =>{setWeatherData(data)
      setCity("")})
    }
  }

  function getIcon(weather){
    switch(weather){
      case 'Fog':
        return 'FOG'
      case 'Clear':
        return 'CLEAR_DAY'
      case 'Thunderstorm':
        return 'RAIN'
      case 'Drizzle':
        return 'RAIN'
      case 'Rain':
        return 'RAIN'
      case 'Snow':
        return 'SNOW'
      case 'Mist':
        return 'FOG'
      case 'Clouds':
        return 'CLOUDY'
      default:
        return 'CLEAR_DAY'
    }
  }
  function getIconColor(weather){
    switch(weather){
      case 'Fog':
        return 'WHITE'
      case 'Clear':
        return 'YELLOW'
      case 'Thunderstorm':
        return 'BLUE'
      case 'Drizzle':
        return 'BLUE'
      case 'Rain':
        return 'BLUE'
      case 'Snow':
        return 'WHITE'
      case 'Mist':
        return 'WHITE'
      case 'Clouds':
        return 'WHITE'
      default:
        return 'YELLOW'
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
        <ReactAnimatedWeather
          icon={getIcon(weatherdata.weather[0].main)}
          color={getIconColor(weatherdata.weather[0].main)}
          size={200}
          animate={true}
        />
        
        <p className='temp'>{Math.round(weatherdata.main.temp)} °C</p>
        <p className='conditions'>{weatherdata.weather[0].main}</p>
      </div>
    )}
    </div>
  )
}

export default App

