async function getCityWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=feed359d6d0647688d9132213232803&q=${city}&aqi=yes`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    console.log(cityData);
  } catch (error) {
    console.log(error);
  }
}

export default getCityWeather;
