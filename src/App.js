import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f037cfc37b2689d8fd8bebc8261cd01d`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


const getTime = (timeStamp) => {
     return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Wie ist das Wetter in...'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p className='bottom_description'>Gefühlt</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bottom_description'>Feuchtigkeit</p>
            </div>
            <div className="pressure">
              {data.main.pressure ? <p className='bold'>{data.main.pressure.toFixed()} hPa</p> : null}
              <p className='bottom_description'>Luftdruck</p>
            </div>
            {/* <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Kmh</p> : null}
              <p className='bottom_description'>Windgeschwindigkeit</p>
            </div> */}
            <div className="sunset">
              {data.sys.sunset ? <p className='bold'>{getTime(data.sys.sunset)}</p> : null}
              <p className='bottom_description'>Sonnenuntergang</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
