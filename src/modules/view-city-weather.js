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

function showPage() {
  const city = cities.cities[0];
  const main = document.getElementById("main");
  const weatherBasics = createWeatherBasics(city);
  const detailsBasic = createDetails(city);
  main.append(weatherBasics, detailsBasic);
}

export default showPage;
