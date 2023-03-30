import cities from "./cities-weather";

function createWeatherBasics(city) {
  const element = document.createElement("div");
  element.setAttribute("class", "card");
  const data = city.weatherBasicsData();
  for (let i = 0; i < data.length; i += 1) {
    const p = document.createElement("p");
    p.textContent = data[i];
    element.appendChild(p);
  }
  return element;
}

function showPage() {
  const city = cities.cities[0];
  const main = document.getElementById("main");
  const weatherBasics = createWeatherBasics(city);

  main.appendChild(weatherBasics);
}

export default showPage;
