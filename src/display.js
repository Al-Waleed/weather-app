import processData from "./weatherData";

export default async function displayWeather(city) {
  const weatherInfo = await processData(city);

  const countryHeader = document.getElementById("country");
  const dateTime = document.getElementById("date-time");
  countryHeader.textContent = `${weatherInfo.location.region}, ${weatherInfo.location.country}`;
  dateTime.textContent = weatherInfo.location.dateTime;

  const todayRegion = document.getElementById("today-region");
  const todayDay = todayRegion.nextElementSibling;
  const todayDate = todayDay.nextElementSibling;
  const todayTemp = document.getElementById("today-temp");
  const todayCondition = todayTemp.nextElementSibling;
  const todayHumidity = todayCondition.nextElementSibling;
  const todayFeelsLike = todayHumidity.nextElementSibling;

  todayRegion.textContent = weatherInfo.location.region;
  todayDay.textContent = processDay(weatherInfo.today.date);
  todayDate.textContent = weatherInfo.today.date;
  todayTemp.textContent = weatherInfo.today.temp;
  todayCondition.textContent = weatherInfo.today.condition;
  todayHumidity.textContent = `Humidity: ${weatherInfo.today.humidity}%`;
  todayFeelsLike.textContent = `Feels like: ${weatherInfo.today.feelsLike}`;

  const tomorrowRegion = document.getElementById("tomorrow-region");
  const tomorrowDay = tomorrowRegion.nextElementSibling;
  const tomorrowDate = tomorrowDay.nextElementSibling;
  const tomorrowTemp = document.getElementById("tomorrow-temp");
  const tomorrowCondition = tomorrowTemp.nextElementSibling;
  const tomorrowHumidity = tomorrowCondition.nextElementSibling;

  tomorrowRegion.textContent = weatherInfo.location.region;
  tomorrowDay.textContent = processDay(weatherInfo.tomorrow.date);
  tomorrowDate.textContent = weatherInfo.tomorrow.date;
  tomorrowTemp.textContent = weatherInfo.tomorrow.temp;
  tomorrowCondition.textContent = weatherInfo.tomorrow.condition;
  tomorrowHumidity.textContent = `Humidity: ${weatherInfo.tomorrow.humidity}%`;

  const afterTomorrowRegion = document.getElementById("after-region");
  const afterTomorrowDay = afterTomorrowRegion.nextElementSibling;
  const afterTomorrowDate = afterTomorrowDay.nextElementSibling;
  const afterTomorrowTemp = document.getElementById("after-temp");
  const afterTomorrowCondition = afterTomorrowTemp.nextElementSibling;
  const afterTomorrowHumidity = afterTomorrowCondition.nextElementSibling;

  afterTomorrowRegion.textContent = weatherInfo.location.region;
  afterTomorrowDay.textContent = processDay(weatherInfo.afterTomorrow.date);
  afterTomorrowDate.textContent = weatherInfo.afterTomorrow.date;
  afterTomorrowTemp.textContent = weatherInfo.afterTomorrow.temp;
  afterTomorrowCondition.textContent = weatherInfo.afterTomorrow.condition;
  afterTomorrowHumidity.textContent = `Humidity: ${weatherInfo.afterTomorrow.humidity}%`;
}

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
