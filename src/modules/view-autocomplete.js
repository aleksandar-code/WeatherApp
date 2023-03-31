import { setListenerForItems } from "./event-listeners";

function viewAutoComplete(cities) {
  const itemsList = document.querySelector(".autocomplete-items");
  cities.forEach((city) => {
    const div = document.createElement("div");
    div.textContent = city;

    itemsList.appendChild(div);
  });
  itemsList.classList.add("active");
  setListenerForItems();
}

export default viewAutoComplete;
