import "./styles.css";

const formatHour = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const DayTimeWeather = ({ hourlyWeather }) => {
  return (
    <div className="daytimeweather">
      {hourlyWeather?.map((hour) => (
        <div key={hour.time} className="dayweather__item">
          <h5 className="h5">|</h5>
          <h6 className="h6">{formatHour(hour.time)}</h6>
          <p className="p">{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default DayTimeWeather;
