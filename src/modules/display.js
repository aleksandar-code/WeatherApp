import showPage from "./view-city-weather";
import createCity from "./create-city";
import { getAutoComplete, closeAllLists, getSearchData } from "./manage-search";
import Autocomplete from "./autocomplete";
import viewAutoComplete from "./view-autocomplete";

let setListenerForItems;

// function convertToAmerican() {

// }

function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("input", () => {
    closeAllLists();
    getAutoComplete(viewAutoComplete);
  });

  searchBar.addEventListener("search", (e) => {
    e.preventDefault();
  });
  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
    closeAllLists();
  };

  document.addEventListener("click", () => {
    closeAllLists();
  });
}

const display = async (data) => {
  const response = await createCity(data);
  const city = response.newCity;
  document.getElementById("main").innerHTML = "";
  showPage(city);
  setSearchListeners();

  const itemsList = document.querySelector(".autocomplete-items");
  const options = {
    attributes: true,
  };

  const callback = (mutationList) => {
    mutationList.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (mutation.target.classList.contains("active")) {
          setListenerForItems();
        }
      }
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(itemsList, options);
};

setListenerForItems = () => {
  const items = document.querySelector(".autocomplete-items");

  items.onclick = async (e) => {
    try {
      const searchData = await getSearchData();
      const autocomplete = new Autocomplete(searchData);
      viewAutoComplete(autocomplete);
      const index = e.target.dataset.dataIndex;
      const city = autocomplete.returnCity(index);
      await display(city.url);
    } catch (error) {
      console.log(error);
    }
  };
};

export default display;
