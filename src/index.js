import "./style.css";
import displayWeather from "./display";

const userInput = document.querySelector("input");
const searchButton = document.querySelector("button");
let city;

displayWeather("Amman");

searchButton.addEventListener("click", (event) => {
  city = userInput.value;
  displayWeather(city);
  event.preventDefault();
});
