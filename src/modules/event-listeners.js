import getAutoComplete from "./manage-search";

function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("search", () => {
    getAutoComplete();
  });

  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
  };
}
export default setSearchListeners;
