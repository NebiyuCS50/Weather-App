import "./style.css";
import searchBar from "./search.js";
import { displayWeather } from "./display.js";

//Fetching Data from Weather API
export async function Weather(params) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(params)}?key=6XVV6HUW6G6K9CK3RDG5H57B7`,
    );
    const data = await response.json();
    return data;
  } catch {
    alert("Error fetching weather data:");
  }
}

//Fecthing Data from Giphy API

const container = document.querySelector(".container");
const img = document.createElement("img");
export async function giphy(gifParam) {
  const oldGif = container.querySelector(".giphy");
  if (oldGif) container.removeChild(oldGif);
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=CHeuvC0jF2z4XQReQXW7b7zPtTmJIOeh&s=${gifParam || "weather"}`,
  );
  const data = await response.json();
  img.src = data.data.images.original.url;
  img.alt = "Giphy Image";
  img.classList.add("giphy");
  container.appendChild(img);
}
//search bar functionality
searchBar();
//display current weather
displayWeather();
