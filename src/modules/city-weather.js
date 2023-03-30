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

  hourForecastData() {
    const array = [];
    const keys = Object.keys(this.forecastWeather.hours);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (!(this.forecastWeather[key] instanceof Object)) {
        array.push(this.forecastWeather.hours[key]);
      }
    }

    return array;
  }

  detailsData() {
    const array = [];
    const keys = Object.keys(this.currentWeather.weatherDetails);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      array.push(this.currentWeather.weatherDetails[key]);
    }
    return array;
  }
}

export default CityWeather;
