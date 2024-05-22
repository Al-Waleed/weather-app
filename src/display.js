import processData from "./weatherData";

export default async function displayWeather(city) {
  const weatherInfo = await processData(city);

  console.log(
    `${weatherInfo.location.region}, ${weatherInfo.location.country}`
  );
  console.log(weatherInfo.location.dateTime);

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
