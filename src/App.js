import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Das Wetter in...'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}, {data.sys.country}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp.toFixed()-32)*5/9)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>      
          <div className='sunset'>
          <p>Sonnenuntergang: {getTime(data.sys.sunset) ? <p>{getTime(data.sys.sunset)} Uhr</p> : null}</p>
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{Math.round((data.main.feels_like.toFixed()-32)*5/9)}°C</p> : null}
              <p className='bottom_description'>Gefühlt</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bottom_description'>Feuchtigkeit</p>
            </div>
            <div className="pressure">
              {data.main ? <p className='bold'>{data.main.pressure} hPa</p> : null}
              <p className='bottom_description'>Luftdruck</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{Math.round(data.wind.speed.toFixed()*0.621371)} Kmh</p> : null}
              <p className='bottom_description'>Windgeschwindigkeit</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;