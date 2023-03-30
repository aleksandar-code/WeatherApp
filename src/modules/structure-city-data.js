import { getWeatherWithIp } from "./api.calls";
import CurrentWeather from "./current-weather";
import ForecastWeather from "./forecast-weather";

// create the data

// Current city, current temperature in °C first and °F, last updated time, condition, max & min for current day,
// weather details: UV Index, wind speed + other details.
function structureCurrent(response) {
  // or iterate all key values with having my keys in array i look for then return
  // the values in an array and do array destructuring to instantiate the values

  const city = response.location.name;
  const temperature = response.current.temp_c;
  const lastUpdate = response.current.last_updated;
  const conditionText = response.current.condition.text;
  const conditionIcon = response.current.condition.icon;
  const maxTemperature = response.forecast.forecastday[0].day.maxtemp_c;
  const minTemperature = response.forecast.forecastday[0].day.mintemp_c;
  const weatherDetails = (function getWeatherDetails() {
    const toFetch = response.forecast.forecastday[0];
    const aqi = toFetch.day.air_quality["us-epa-index"];
    const uvIdx = toFetch.day.uv;
    const sunriseTime = toFetch.astro.sunrise;
    const sunsetTime = toFetch.astro.sunset;
    const feelsLike = response.current.feelslike_c;
    const precipitations = response.current.precip_mm;
    const windSpeed = response.current.wind_kph;
    const humidityPercentage = response.current.humidity;
    const vision = response.current.vis_km;
    const hectopascals = response.current.pressure_mb;

    return {
      aqi,
      uvIdx,
      sunriseTime,
      sunsetTime,
      feelsLike,
      precipitations,
      windSpeed,
      humidityPercentage,
      vision,
      hectopascals,
    };
  })();

  return new CurrentWeather(
    city,
    temperature,
    lastUpdate,
    conditionText,
    conditionIcon,
    maxTemperature,
    minTemperature,
    weatherDetails
  );
}

// objects: hour / day array with inside: Current hour/day temperature + condition icon / max - min + condition icon.

function structureForecast(response) {
  const createDay = (idx) => {
    const array = response.forecast.forecastday;
    const maxTemperature = array[idx].day.maxtemp_c;
    const minTemperature = array[idx].day.mintemp_c;
    const conditionIcon = array[idx].day.condition.icon;

    return { maxTemperature, minTemperature, conditionIcon };
  };
  const createHour = (idx) => {
    const temperature = response.forecast.forecastday[0].hour[idx].temp_c;
    const conditionIcon =
      response.forecast.forecastday[0].hour[idx].condition.icon;
    return { temperature, conditionIcon };
  };
  const days = (function createDaysObject() {
    const daysArray = [createDay(0), createDay(1), createDay(2)];

    return daysArray;
  })();

  const hours = (function createHoursObject() {
    const dataToIterate = response.forecast.forecastday[0].hour;
    const hoursArray = [];
    for (let i = 0; i < dataToIterate.length; i += 1) {
      hoursArray.push(createHour(i));
    }
    return hoursArray;
  })();

  return new ForecastWeather(days, hours);
}
async function createCurrentAndForecast() {
  const response = await getWeatherWithIp();
  const current = structureCurrent(response);
  const forecast = structureForecast(response);
  return [current, forecast];
}

export default createCurrentAndForecast;
