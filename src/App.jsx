import './App.css'
import { useState, useEffect } from 'react'

import { getLocation, getWeather } from './services/getlocation.js'

import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader'

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading,setLoading] = useState(false);

  const searchCity = (cityName) => {
    setCity(cityName);
  };

  useEffect(() => {
    if (city) {
      setLoading(true);
      getLocation(city)
        .then((coordinates) => {
          setLocation(coordinates);
        })
        .catch((error) => {
          console.error('Error fetching location:', error);
        });
    }
  }, [city]);

  useEffect(() => {
    if (location) {
      getWeather(location.latitude, location.longitude)
        .then((weatherData) => {
          setWeather(weatherData);
          console.log('Weather data:', weatherData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching weather:', error);
        });
    }
  }, [location]);

  return (
    <div className='appcontainer'>
      <Header searchCity={searchCity}/>
      {loading ? <Loader /> : <Main weather={weather} />}
      
      
    </div>
  )
}

export default App
