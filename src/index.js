import "./styles.css";
import { getWeather,processWeatherData } from "./api";
import { displayWeatherData } from "./display";

const errorLabel = document.querySelector('#error-label');

const searchInput = document.querySelector("form input");
document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  // if value is entered get weather
  if (searchInput.value) {
    let location = searchInput.value.toLowerCase();
    let weatherData = await getWeather(location);
    
    // if there is weather data display it
    if (weatherData) {
      let processedWeatherData = await processWeatherData(weatherData);
      displayWeatherData(processedWeatherData);
    } else {
        errorLabel.textContent = "Failed to fetch weather data"
      console.error("Failed to fetch weather data");
    }
  }
});
