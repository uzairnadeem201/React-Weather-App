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

const WeekWeather = ({ days }) => {
  return (
    <div className="weekweather">
      {days.map((day) => (
        <div key={crypto.randomUUID()} className="weekweather__day">
        <p className='p'>20°C</p>
          
          <Cloudy color="aliceblue" size={24} />
          <h6 className='h6'>{day}</h6>
          
        </div>
      ))}
    </div>
  );
};

export default WeekWeather;
