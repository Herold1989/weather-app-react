import React, {useState} from 'react'
import axios from 'axios';

const App = () => {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=wiesbaden&appid=f037cfc37b2689d8fd8bebc8261cd01d'

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Wiesbaden</p>
          </div>
          <div className='temp'>
            <h1>60°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div> 
        <div className='bottom'>
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;