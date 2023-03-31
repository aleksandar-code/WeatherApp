// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from "nanoid";
import createCurrentAndForecast from "./structure-city-data";
import CityWeather from "./city-weather";

async function createCity(city) {
  console.log(city);
  const array = await createCurrentAndForecast(city);
  const [current, forecast] = array;
  const newCity = new CityWeather(nanoid(), current, forecast);

  return {
    newCity,
  };
}

export default createCity;
