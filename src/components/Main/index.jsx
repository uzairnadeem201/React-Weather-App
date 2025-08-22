import "./styles.css";
import WeekWeather from '../WeekWeather';
import DayWeather from '../DayWeather';
import DayTimeWeather from '../DayTimeWeather';


const Main = ({weather}) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const todayWeather = weather ? weather.today : null;
  const weekWeather = weather ? weather.weekly : null;
  const hourlyWeather = weather ? weather.hourly : null;
  return(
    <div className="main">
        <WeekWeather days={days} weekWeather={weekWeather} />
        <DayWeather todayWeather={todayWeather? todayWeather : ""}  />
        <DayTimeWeather hourlyWeather={hourlyWeather}/>
      
    </div>
  );
};

export default Main;
