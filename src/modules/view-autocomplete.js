function viewAutoComplete(data) {
  const itemsList = document.querySelector(".autocomplete-items");

  const array = data.cities;
  array.forEach((city, index) => {
    const div = document.createElement("div");
    div.textContent = `${city.name}, ${city.region}, ${city.country}`;
    div.dataset.dataIndex = index;
    itemsList.appendChild(div);
  });
  itemsList.classList.add("active");
}

export default viewAutoComplete;
