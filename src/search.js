import { Weather } from "./index.js";
import { giphy } from "./index.js";
//search bar
function searchBar() {
  const searchBar = document.querySelector(".input");
  searchBar.addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      const searchValue = searchBar.value;
      let weatherData;
      if (searchValue) {
        weatherData = await Weather(searchValue);
        searchBar.value = ""; // Clear the input after search
      } else {
        weatherData = await Weather("Addis Ababa, Ethiopia");
      }

      if (weatherData.currentConditions.conditions == "Rain") {
        giphy("rain");
      } else if (weatherData.currentConditions.conditions == "Cloudy") {
        giphy("cloudy");
      } else if (weatherData.currentConditions.conditions == "Sunny") {
        giphy("sunny");
      } else if (weatherData.currentConditions.conditions == "Snow") {
        giphy("snow");
      } else {
        giphy("weather");
      }
    }
  });
}
export default searchBar;
