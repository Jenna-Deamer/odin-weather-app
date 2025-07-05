const apiKey = `3C4DVCAPL75XKCCUHBDAKFHLW`;


export async function getWeather(location) {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  try {
    console.log(`Fetching weather data for ${location}...`)
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    processWeatherData(data)
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}


export async function processWeatherData(data){
    let processedWeatherData = {
        description:  data.description,
        conditions:  data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        address: data.resolvedAddress,
        icon:  data.currentConditions.icon
    }

    console.log(processedWeatherData)
    console.log(processedWeatherData.address)
}
