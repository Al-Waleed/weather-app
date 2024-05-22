import "./style.css";

const city = prompt("Enter city");

async function fetchWeatherApi(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=88b16aef14f243249a9224456241905&q=${city}&days=4`,
    { mode: "cors" }
  );
  return await response.json();
}

async function processData() {
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

async function displayWeather() {
  const weatherInfo = await processData();

  console.log(processDay(weatherInfo.today.date));
  console.log(weatherInfo.today.date);
  console.log(weatherInfo.today.temp);
  console.log(weatherInfo.today.condition);
  console.log(weatherInfo.today.feelsLike);
  console.log(weatherInfo.today.humidity);

  console.log(processDay(weatherInfo.tomorrow.date));
  console.log(weatherInfo.tomorrow.date);
  console.log(weatherInfo.tomorrow.temp);
  console.log(weatherInfo.tomorrow.condition);
  console.log(weatherInfo.tomorrow.humidity);

  console.log(processDay(weatherInfo.afterTomorrow.date));
  console.log(weatherInfo.afterTomorrow.date);
  console.log(weatherInfo.afterTomorrow.temp);
  console.log(weatherInfo.afterTomorrow.condition);
  console.log(weatherInfo.afterTomorrow.humidity);
}

displayWeather();

function processDay(date) {
  const day = new Date(date);
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  return week[day.getDay()];
}
