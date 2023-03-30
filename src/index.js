import "./style.css";
import cities from "./modules/cities-weather";
import showPage from "./modules/view-city-weather";

window.onload = async () => {
  await cities.createCity();
  showPage();
};
