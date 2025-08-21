import "./styles.css";
import WeekWeather from '../WeekWeather';
import DayWeather from '../DayWeather';
import DayTimeWeather from '../DayTimeWeather';


const Main = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return(
    <div className="main">
        <WeekWeather days={days}/>
        <DayWeather />
        <DayTimeWeather days={days}/>
      
    </div>
  );
};

export default Main;
