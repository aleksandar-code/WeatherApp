class CityWeather {
  constructor(uuid, currentWeather, forecastWeather) {
    this.uuid = uuid;
    this.name = currentWeather.city;
    this.currentWeather = currentWeather;
    this.forecastWeather = forecastWeather;
  }

  weatherBasicsData() {
    return this.currentWeather;
  }

  hourForecastData() {
    return this.forecastWeather.hours;
  }

  dayForecastData() {
    const array = [];
    const keys = Object.keys(this.forecastWeather.days);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];

      array.push(this.forecastWeather.days[key]);
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
