import cities from "./cities-weather";

function createWeatherBasics(city) {
  const element = document.createElement("div");
  element.classList.add("card");
  const data = city.weatherBasicsData();
  for (let i = 0; i < data.length; i += 1) {
    const p = document.createElement("p");
    p.textContent = data[i];
    element.appendChild(p);
  }
  return element;
}

function createHourForecast(city) {
  const data = city.hourForecastData();
  const element = document.createElement("div");
  element.classList.add("card");

  for (let i = 0; i < data.length; i += 1) {
    element.textContent += `${data[i].temperature} ${data[i].conditionIcon}\n`;
  }
  return element;
}

function createDayForecast(city) {
  const data = city.dayForecastData();
  const element = document.createElement("div");
  element.classList.add("card");

  for (let i = 0; i < data.length; i += 1) {
    element.textContent += `${data[i].maxTemperature} ${data[i].minTemperature} ${data[i].conditionIcon}\n`;
  }
  return element;
}

function createDetails(city) {
  const data = city.detailsData();
  const element = document.createElement("div");
  element.classList.add("card");

  for (let i = 0; i < data.length; i += 1) {
    const circle = document.createElement("div");
    circle.classList.add("weather-detail");
    circle.textContent = data[i];

    element.appendChild(circle);
  }
  return element;
}

function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const ul = document.createElement("ul");
  ul.classList.add("city-navigation-bar");

  const plusButton = document.createElement("button");
  plusButton.classList.add("search-cities-tab-button");
  plusButton.textContent = "+";

  const currentLocationArrow = document.createElement("li");
  currentLocationArrow.classList.add("current-location-arrow");
  currentLocationArrow.innerHTML = "&#10146;";

  ul.appendChild(currentLocationArrow);
  element.append(ul, plusButton);

  return element;
}

function showPage() {
  const city = cities.cities[0];
  const main = document.getElementById("main");
  const weatherBasics = createWeatherBasics(city);
  const detailsBasic = createDetails(city);
  const hourForecast = createHourForecast(city);
  const dayForecast = createDayForecast(city);
  const navigationBar = createNavigationBar(cities);
  main.append(
    weatherBasics,
    hourForecast,
    dayForecast,
    detailsBasic,
    navigationBar
  );
}

export default showPage;
