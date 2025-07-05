import "./styles.css";
import { getWeather } from "./api";
import { displayWeatherData } from "./display";

const searchInput = document.querySelector("form input");
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // if value is entered get weather
  if (searchInput.value) {
    let location = searchInput.value;
    getWeather(location);
  }
});
