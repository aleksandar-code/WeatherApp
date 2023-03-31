import "./style.css";
import showPage from "./modules/view-city-weather";
import createCity from "./modules/create-city";

window.onload = async () => {
  const response = await createCity("Paris");
  const city = response.newCity;
  showPage(city);
};
