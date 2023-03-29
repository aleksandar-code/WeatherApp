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

## Starting with the main page on mobile:
- First container: Display the current city, current temperature, time, weather condition, max & min temperatures.
- Second container: Display forecast information about the city, 24hours and 3 days, scrollable.
- Third container: UV Index & Wind gust + Details button which gives access to the details (Everything accessible on desktop).
- Fourth container: Navigation dots, navigate between cities + button (+) that leads to city search.

## Details page on mobile:
- Header: Return button, display the current city, current temperature, time, weather condition.
- Container: Weathher details.

## Search city page on mobile:
- Header: Searchbar with autocomplete for the cities accesible to the api, additional options button to change °F/°C.
- Container: Show current city + the other added cities with their info, on click user should be directed to main page of the city.

### Color palette:
- #A799B7, #9888A5, #776472, #445552, #294D4A
