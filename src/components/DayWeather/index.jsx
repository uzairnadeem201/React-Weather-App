import './styles.css'
import { Droplets, Wind, Gauge } from 'lucide-react';

const DayWeather = () => {
  return (
    <div className='dayweather'>
      <div className='time-date'>
        <h4 className='time'>12:00 PM</h4>
        <p className='date'>Monday, 1st January</p>
      </div>

      <div className='temperature'>
        <h1 className='h1'>20°C</h1>

        <div className='temperature__details'>
          <div className='temperature__details__item'>
            <Droplets color='aliceblue' size={16} />
            <p className='p'>Humidity: 60%</p>
          </div>

          <div className='temperature__details__item'>
            <Wind color='aliceblue' size={16} />
            <p className='p'>Wind: 10 km/h</p>
          </div>

          <div className='temperature__details__item'>
            <Gauge color='aliceblue' size={16} />
            <p className='p'>Pressure: 1012 hPa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayWeather;
