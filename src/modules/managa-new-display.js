import createCity from "./create-city";
import showPage from "./view-city-weather";

async function displayNewCity(e) {
  const response = await createCity(e.target.textContent);
  document.getElementById("main").innerHTML = "";
  showPage(response.newCity);
}

export default displayNewCity;
