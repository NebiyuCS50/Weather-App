import { Weather } from "./index.js";
import searchBar from "./search.js";
const main = document.querySelector(".main");

// Function to display weather data
export function displayWeather(data) {
  if (!data) return;
  main.textContent = `
    <h1>${data.address}</h1>
    <p>Temperature: ${data.currentConditions.temp}°F</p>
    <p>Conditions: ${data.currentConditions.conditions}</p>
    <p>Humidity: ${data.currentConditions.humidity}%</p>
    <p>Wind Speed: ${data.currentConditions.windspeed} km/h</p>
  `;
}
