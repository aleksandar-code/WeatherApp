class Autocomplete {
  constructor(cities) {
    this.cities = cities;
  }

  returnCity(index) {
    const city = this.cities[index];
    return {
      name: city.name,
      region: city.region,
      country: city.country,
      url: city.url,
    };
  }
}

export default Autocomplete;
