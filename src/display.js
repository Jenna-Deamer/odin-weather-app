export function displayWeatherData(processedWeatherData) {
  const resultsContainer = document.querySelectorAll(".results-container");
  const cityLabel = document.querySelector("#city-label");
  const descriptionLabel = document.querySelector("#desc-label");
  const tempLabel = document.querySelector("#temp-label");
  const conditionsLabel = document.querySelector("#conditions-label");

  cityLabel.textContent = processedWeatherData.address;
  descriptionLabel.textContent = processedWeatherData.description;
  tempLabel.textContent = processedWeatherData.temp + "°F";
  conditionsLabel.textContent = processedWeatherData.conditions;

  resultsContainer.forEach(result => {
    result.classList.remove('hidden');
  });
}
