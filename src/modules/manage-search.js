import { searchCity } from "./api.calls";
import Autocomplete from "./autocomplete";

function structureAutoComplete(data) {
  return new Autocomplete(data);
}

function closeAllLists() {
  if (document.querySelector(".autocomplete-items") !== null) {
    const itemsList = document.querySelector(".autocomplete-items");
    itemsList.innerHTML = "";
    if (itemsList.classList.contains("active"))
      itemsList.classList.remove("active");
  }
}

function validateSearch(search) {
  if (search.length > 2) return true;

  return false;
}

async function getSearchData() {
  const search = document.getElementById("city-search").value;
  let response;
  if (validateSearch(search) === true) {
    response = await searchCity(search);
  }
  return response;
}

async function getAutoComplete(viewAutoComplete) {
  const response = await getSearchData();
  if (response) {
    const result = structureAutoComplete(response);
    viewAutoComplete(result);
  }
}

export { closeAllLists, getAutoComplete, getSearchData };
