import "./style.css";
import showPage from "./modules/view-city-weather";
import createCity from "./modules/create-city";
import { getAutoComplete, closeAllLists } from "./modules/manage-search";
import displayNewCity from "./modules/managa-new-display";
import viewAutoComplete from "./modules/view-autocomplete";

function setListenerForItems() {
  const items = document.querySelectorAll(".autocomplete-items div");
  console.log(items);
  const arrayOfItems = Array.from(items);
  for (let i = 0; i < arrayOfItems.length; i += 1) {
    arrayOfItems[i].onclick = async (e) => {
      await displayNewCity(e);
    };
  }
}

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

window.onload = async () => {
  const response = await createCity("Paris");
  const city = response.newCity;
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
