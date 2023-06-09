function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const form = document.createElement("form");
  form.autocomplete = "off";
  form.noValidate = true;
  form.innerHTML =
    "<div class='autocomplete'><input type='text' id='city-search' name='city-search' placeholder='Search for a location..'></div><div class='autocomplete-items'></div>";
  element.appendChild(form);
  return element;
}

function createWeatherBasics(city) {
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "weather-basics");
  const data = city.weatherBasicsData();
  element.innerHTML = `
  <img src="${data.conditionIcon}" alt="${data.conditionText}">
  <h2 class="city-name">${data.city}</h2>
  <p class="city-temperature">${data.temperature}°</p>
  <p class="condition-text">${data.conditionText}</p>
  <p class="city-time">${data.lastUpdate}</p>
  <p class="max-min-temp">Min.${data.minTemperature}° Max.${data.maxTemperature}°</p>
  `;

  return element;
}

function createHourForecast(city) {
  const data = city.hourForecastData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "hour-forecast");
  for (let i = 0; i < data.length; i += 1) {
    element.innerHTML += `<div><p>${data[i].hour}: ${data[i].temperature}°</p><img src="${data[i].conditionIcon}" alt="${data[i].conditionText}"></div>`;
  }
  return element;
}

function createDayForecast(city) {
  const data = city.dayForecastData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "day-forecast");
  for (let i = 0; i < data.length; i += 1) {
    let option = "";
    if (i === 0) {
      option = "Today: ";
    }

    element.innerHTML += `<div><p>${option}${data[i].minTemperature}° - ${data[i].maxTemperature}°</p><img src="${data[i].conditionIcon}"></div>`;
  }
  return element;
}

function createDetails(city) {
  const data = city.detailsData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "weather-details");
  element.innerHTML = `
  
  <div class="weather-detail-double">
    <div class="weather-detail"><p>Air quality</p><p>${data.aqi}</p></div>
    <div class="weather-detail"><p>UV Index</p><p>${data.uvIdx}</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Sunrise</p><p>${data.sunriseTime}</p></div>
    <div class="weather-detail"><p>Sunset</p><p> ${data.sunsetTime}</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Feels like</p><p>${data.feelsLike}°</p></div>
    <div class="weather-detail"><p>Precipitations</p><p>${data.precipitations} mm</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Wind</p><p>${data.windSpeed} km/h</p></div>
    <div class="weather-detail"><p>Humidity</p><p>${data.humidityPercentage} %</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Vision</p><p>${data.vision} km</p></div>
    <div class="weather-detail"><p>Pressure</p><p>${data.hectopascals} hPa</p></div>
  </div>`;

  return element;
}

function createFooter() {
  const element = document.createElement("footer");
  element.innerHTML =
    "<a href='https://www.weatherapi.com/' title='Free Weather API'><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt='Weather data by WeatherAPI.com' border='0'></a>";

  return element;
}

function showPage(city) {
  const main = document.getElementById("main");
  const navigationBar = createNavigationBar();
  const weatherBasics = createWeatherBasics(city);
  const detailsBasic = createDetails(city);
  const hourForecast = createHourForecast(city);
  const dayForecast = createDayForecast(city);
  const footer = createFooter();
  main.append(
    navigationBar,
    weatherBasics,
    hourForecast,
    dayForecast,
    detailsBasic,
    footer
  );
}

export default showPage;
