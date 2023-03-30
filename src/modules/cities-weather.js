// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from "nanoid";
import createCurrentAndForecast from "./structure-city-data";
import CityWeather from "./city-weather";

class CitiesWeather {
  constructor() {
    this.cities = [];
  }

  async createCity() {
    const array = await createCurrentAndForecast();
    const [current, forecast] = array;
    const city = new CityWeather(nanoid(), current, forecast);
    this.appendCity(city);
  }

  appendCity(city) {
    this.cities.push(city);
  }
}

const cities = new CitiesWeather();

export default cities;
