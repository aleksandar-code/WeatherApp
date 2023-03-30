class CityWeather {
  constructor(uuid, currentWeather, forecastWeather) {
    this.uuid = uuid;
    this.name = currentWeather.city;
    this.currentWeather = currentWeather;
    this.forecastWeather = forecastWeather;
  }

  weatherBasicsData() {
    const array = [];
    const keys = Object.keys(this.currentWeather);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (!(this.currentWeather[key] instanceof Object)) {
        array.push(this.currentWeather[key]);
      }
    }

    return array;
  }

  detailsData() {
    return this.currentWeather.weatherDetails;
  }
}

export default CityWeather;
