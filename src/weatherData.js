async function fetchWeatherApi(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=88b16aef14f243249a9224456241905&q=${city}&days=4`,
    { mode: "cors" }
  );
  return await response.json();
}

export default async function processData(city) {
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
  const location = {
    country: weather.location.country,
    dateTime: weather.location.localtime,
    region: weather.location.name,
  };
  return { today, tomorrow, afterTomorrow, location };
}