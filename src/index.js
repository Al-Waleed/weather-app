import "./style.css";

const city = prompt("Enter city");
async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=88b16aef14f243249a9224456241905&q=${city}&days=4`,
    { mode: "cors" }
  );
  const weather = await response.json();

  console.log(
    `the weather for ${weather.forecast.forecastday[1].date} is ${weather.forecast.forecastday[1].day.condition.text}`
  );
  console.log(
    `the weather for ${weather.forecast.forecastday[2].date} is ${weather.forecast.forecastday[2].day.condition.text}`
  );
}

getWeather(city);

