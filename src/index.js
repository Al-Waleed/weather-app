import "./style.css";

const city = prompt("Enter city");

async function fetchWeatherApi(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=88b16aef14f243249a9224456241905&q=${city}&days=4`,
    { mode: "cors" }
  );
  return await response.json();
}

async function analyseWeatherData() {
  const weather = await fetchWeatherApi(city);
  const today = {
    condition: weather.current.condition.text,
    date: weather.forecast.forecastday[0].date,
    temp: weather.current.temp_c,
    feelsLike: weather.current.feelslike_c,
    humidity: weather.current.humidity,
  };
  const tomorrow = {
    condition: weather.forecast.forecastday[1].day.condition.text,
    date: weather.forecast.forecastday[1].date,
    temp: weather.forecast.forecastday[1].day.avgtemp_c,
    humidity: weather.forecast.forecastday[1].day.avghumidity,
  };
  const afterTomorrow = {
    condition: weather.forecast.forecastday[2].day.condition.text,
    date: weather.forecast.forecastday[2].date,
    temp: weather.forecast.forecastday[2].day.avgtemp_c,
    humidity: weather.forecast.forecastday[2].day.avghumidity,
  };
  return { today, tomorrow, afterTomorrow };
}

async function displayWeather() {}
