import { searchCity } from "./api.calls";

function structureAutoComplete(data) {
  const cityNames = [];
  for (let i = 0; i < data.length; i += 1) {
    const city = data[i].name;
    cityNames.push(city);
  }

  return cityNames;
}

async function getAutoComplete() {
  const searchBar = document.getElementById("city-search");
  const response = await searchCity(searchBar.value);
  const result = structureAutoComplete(response);
  console.log(result);
}

export default getAutoComplete;
