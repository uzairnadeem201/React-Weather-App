import "./styles.css";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudOff,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy
} from "lucide-react";

const WeekWeather = ({days}) => {
  return (
    <div className="daytimeweather">
      {days.map((day) => (
        <div key={crypto.randomUUID()} className="dayweather__item">
        <h5 className='h5'>|</h5>
          <h6 className='h6'>12:00</h6>
          <p className='p'>20°C</p>
          
        </div>
      ))}
    </div>
  );
};

export default WeekWeather;
