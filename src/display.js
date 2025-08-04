import { Weather } from "./index.js";
import searchBar from "./search.js";
import rainIcon from "./assets/heavy-rain.png";
import cloudyIcon from "./assets/cloudy.png";
import sunnyIcon from "./assets/sun.png";
import snowIcon from "./assets/cloudy.png";

const imageContainer = document.querySelector(".img");
const img = document.createElement("img");
const cityName = document.querySelector(".city");
const condition = document.querySelector(".condition");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const feelsLike = document.querySelector(".feels-like");
const visibility = document.querySelector(".visibility");
const date = document.querySelector(".date");

// Function to display weather data
export function displayWeather(data) {
  try {
    //main
    if (data.currentConditions.icon == "rain") {
      img.src = rainIcon;
    } else if (data.currentConditions.icon == "cloudy") {
      img.src = cloudyIcon;
    } else if (data.currentConditions.icon == "sunny") {
      img.src = sunnyIcon;
    } else if (data.currentConditions.icon == "snow") {
      img.src = snowIcon;
    } else {
      img.src = cloudyIcon;
    }
    img.alt = "Weather Icon";
    imageContainer.appendChild(img);
    cityName.textContent = `City Name: ${data.address}`;
    condition.textContent = `Condition: ${data.currentConditions.conditions}`;
    temperature.textContent = `Temperature: ${data.currentConditions.temp} °F`;
    humidity.textContent = `Humidity: ${data.currentConditions.humidity} %`;
    windSpeed.textContent = `Wind Speed: ${data.currentConditions.windspeed} mph`;
    feelsLike.textContent = `Feels Like: ${data.currentConditions.feelslike}`;
    visibility.textContent = `Visibility: ${data.currentConditions.visibility} miles`;
    date.textContent = `Date: ${data.days[0].datetime}`;
  } catch (error) {
    console.error("Error displaying weather data:", error);
    alert("Error displaying weather data. Please try again.");
  }
}
