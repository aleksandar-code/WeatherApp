# I want to make this weather app as complete and as accessible as possible.

## Documentation standards

Each program or function should have the following information:

### Goals

- What is the goal of the program or function?

### Input

- What (if any) input does the program or function accept?
  Are there any specific data types or ranges?

### Output

- What (if any) output does the program or function return.

### Steps
- What are the steps (written in English) necessary to solve
  this problem. This should NOT be programming code, but each line
  should be specific enough to be translated to a line or two of code
  in your target language.

## Documentation

- App goal: deliver weather information about current city + 5 additional cities if the user desire so.
- App input: weatherapi.com.
- App output: display the weather information to the user.
- App steps: get user location user IP Lookup parameter,
  and display it's weather, fetch data from weatherapi.com,
  organize the fetched data in objects, display the objects information where it is needed,
  allow user to search for other cities and add them to his cities list,
  user can delete cities except for his default.

  - All data i need to fetch and how to organize it:
      - Current weather:
          - Input: Current city, current temperature in °C and °F, last updated time, condition, max & min for current day,
          weather details: UV Index, wind speed + other details.
          - Output: structure the data.
      - Forecast weather:
          - Input: 24 hours + 3 days forecast weather; Current hour/day temperature + condition icon / max - min + condition icon.
          - Output: structure the data.

## Starting with the main page on mobile:
- First container: Display the current city, current temperature, time, weather condition, max & min temperatures.
    - Input: Data from current weather: current temp, condition, from forecast max & min, from location city name.
- Second container: Display forecast information about the city, 24hours and 3 days, scrollable.
    - Input: Data from forecast hour and day.
- Third container: UV Index & Wind speed + Details button which gives access to the details (Everything accessible on desktop).
    - Input: Data from forecast uv and wind speed + other details.
- Fourth container: Navigation dots, navigate between cities + button (+) that leads to city search.
    - Input: User click.
    - Output: Should display up to date weather information about the city or lead to city search tab.

## Details page on mobile:
- Header: Return button, display the current city, current temperature, time, weather condition.
- Container: Weathher details.

## Search city page on mobile:
- Header: Searchbar with autocomplete for the cities accesible to the api, additional options button to change °F/°C.
- Container: Show current city + the other added cities with their info, on click user should be directed to main page of the city.

### Color palette:
- #A799B7, #9888A5, #776472, #445552, #294D4A



// Add documentation about how each object is gonna be and how to organize the data.

// https://w3c.github.io/geolocation-api/#getcurrentposition-method read the documentation before doing anything with IP adressses.