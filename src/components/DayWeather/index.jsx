import './styles.css'
import { Droplets, Wind, Gauge } from 'lucide-react';

const DayWeather = ({ todayWeather }) => {
  
  const dateObj = new Date(todayWeather.time);
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = dateObj.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className='dayweather'>
      <div className='time-date'>
        <h4 className='time'>{time}</h4>
        <p className='date'>{date}</p>
      </div>

      <div className='temperature'>
        <h1 className='h1'>{todayWeather.temperature}°C</h1>

        <div className='temperature__details'>
          <div className='temperature__details__item'>
            <Droplets color='aliceblue' size={16} />
            <p className='p'>Humidity: {todayWeather.humidity}%</p>
          </div>

          <div className='temperature__details__item'>
            <Wind color='aliceblue' size={16} />
            <p className='p'>Wind: {todayWeather.windspeed} km/h</p>
          </div>

          <div className='temperature__details__item'>
            <Gauge color='aliceblue' size={16} />
            <p className='p'>Pressure: {todayWeather.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayWeather;
