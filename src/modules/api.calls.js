async function getUserCity() {
  let result;
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/ip.json?key=feed359d6d0647688d9132213232803&q=auto:ip",
      { mode: "cors" }
    );
    const userData = await response.json();
    result = userData.city;
  } catch (error) {
    result = "London";
  }
  return result;
}

async function getCityWeather(city) {
  let result;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=feed359d6d0647688d9132213232803&q=${city}&days=3&aqi=yes&alerts=no`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    result = cityData;
  } catch (error) {
    console.log(error);
  }
  return result;
}

async function getWeatherWithIp() {
  let result;
  try {
    const city = await getUserCity();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=feed359d6d0647688d9132213232803&q=${city}&days=3&aqi=yes&alerts=no`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    result = cityData;
  } catch (error) {
    console.log(error);
  }
  return result;
}

export { getWeatherWithIp, getCityWeather };
