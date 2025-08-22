const getLocation = (cityName) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`; 

  return fetch(proxyUrl)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      if (data && data.length > 0) {
        return { latitude: data[0].lat, longitude: data[0].lon };
      }
      throw new Error("Location not found");
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
      throw error;
    });
};

const getWeather = (latitude, longitude) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&current_weather=true&hourly=temperature_2m,relative_humidity_2m,pressure_msl,windspeed_10m&daily=temperature_2m_max,temperature_2m_min`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.current_weather) {
        // --- Today weather (current conditions) ---
        const today = {
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          time: data.current_weather.time,
          humidity: data.hourly.relative_humidity_2m[0],
          pressure: data.hourly.pressure_msl[0],
        };

        // --- Today hourly (ONLY 6 readings: 00, 04, 08, 12, 16, 20) ---
        const todayDate = data.current_weather.time.split("T")[0];
        const hourly = data.hourly.time
          .map((t, i) => ({
            time: t,
            temp: data.hourly.temperature_2m[i],
          }))
          .filter(
            (item) =>
              item.time.startsWith(todayDate) &&
              ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"].includes(
                item.time.split("T")[1]
              )
          );


        // --- Weekly forecast (1 value per day, using max temp) ---
        const weekly = data.daily.time.map((date, i) => ({
          date,
          temperature: data.daily.temperature_2m_max[i],
        }));
        console.log("Weekly weather data:", weekly);

        return { today, hourly, weekly };
      }
      throw new Error("Weather data not found");
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      throw error;
    });
};

export { getWeather, getLocation };
