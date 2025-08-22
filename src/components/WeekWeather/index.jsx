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

const getWeatherIcon = (temperature) => {
  switch (true) {
    case (temperature >= 30):
      return <CloudSun color="orange" size={24} />; // Hot & Sunny
    case (temperature >= 20 && temperature < 30):
      return <Cloudy color="aliceblue" size={24} />; // Mild / Cloudy
    case (temperature >= 10 && temperature < 20):
      return <CloudRain color="skyblue" size={24} />; // Cool / Rainy
    case (temperature < 10):
      return <CloudSnow color="lightblue" size={24} />; // Cold / Snowy
    default:
      return <CloudOff color="gray" size={24} />; // Unknown
  }
};

const WeekWeather = ({ days, weekWeather }) => {
  return (
    <div className="weekweather">
      {days.map((day, index) => {
        const temp = weekWeather?.[index]?.temperature ?? null;
        return (
          <div key={day} className="weekweather__day">
            <p className="p">{temp !== null ? `${Math.round(temp)}°C` : "--"}</p>
            {temp !== null ? getWeatherIcon(temp) : <CloudOff />}
            <h6 className="h6">{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default WeekWeather;
