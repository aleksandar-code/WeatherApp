import { getWeatherWithIp } from "./api.calls";
import CurrentWeather from "./current-weather";
import ForecastWeather from "./forecast-weather";

// create the data

// Current city, current temperature in °C first and °F, last updated time, condition, max & min for current day,
// weather details: UV Index, wind speed + other details.
function structureCurrent(response) {
  return new CurrentWeather(
    city,
    currentTemperature,
    lastUpdate,
    conditionText,
    conditionIcon,
    maxTemperature,
    minTemperature,
    weatherDetails
  );
}

// arrays: days / hours array with inside: Current hour/day temperature + condition icon / max - min + condition icon.

function structureForecast(response) {
  return new ForecastWeather(days, hours);
}
async function createCurrentAndForecast() {
  const response = await getWeatherWithIp();
  const current = structureCurrent(response);
  const forecast = structureForecast(response);
  return [current, forecast];
}

export default createCurrentAndForecast;
