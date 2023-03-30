// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from "nanoid";
import createCurrentAndForecast from "./structure-city-data";
import CityWeather from "./city-weather";

class CitiesWeather {
  constructor() {
    this.cities = [];
  }

  createCity() {
    const [current, forecast] = createCurrentAndForecast();
    const city = new CityWeather(nanoid(), current, forecast);
    this.appendCity(city);
  }

  appendCity(city) {
    this.cities.push(city);
  }
}

export default CitiesWeather;
