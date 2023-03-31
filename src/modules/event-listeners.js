import { getAutoComplete, closeAllLists } from "./manage-search";
import cities from "./create-city";

function setListenerForItems() {
  const items = document.querySelectorAll(".autocomplete-items div");

  const arrayOfItems = Array.from(items);
  for (let i = 0; i < arrayOfItems.length; i += 1) {
    arrayOfItems[i].onclick = async (e) => {
      await cities.createCity(e.target.textContent);
    };
  }
}

function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("input", () => {
    closeAllLists();
    getAutoComplete();
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
export { setSearchListeners, setListenerForItems };
