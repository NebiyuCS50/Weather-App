import rainIcon from "./assets/heavy-rain.png";
import cloudyIcon from "./assets/cloudy.png";
import sunnyIcon from "./assets/sun.png";
import snowIcon from "./assets/cloudy.png";

//capitalize
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
//main
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

//dist
const distContents = document.querySelectorAll(".dist .content-dist");
const distImgs = document.querySelectorAll(".dist .img-dist");
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
    cityName.textContent = `City Name: ${capitalizeWords(data.address)}`;
    condition.textContent = `Condition: ${data.currentConditions.conditions}`;
    temperature.textContent = `Temperature: ${data.currentConditions.temp} °F`;
    humidity.textContent = `Humidity: ${data.currentConditions.humidity} %`;
    windSpeed.textContent = `Wind Speed: ${data.currentConditions.windspeed} mph`;
    feelsLike.textContent = `Feels Like: ${data.currentConditions.feelslike}`;
    visibility.textContent = `Visibility: ${data.currentConditions.visibility} miles`;
    date.textContent = `Date: ${data.days[0].datetime}`;
    // --- Dist (next 4 days) ---
    for (let i = 0; i < 4; i++) {
      const day = data.days[i + 1];
      if (!distContents[i] || !distImgs[i]) continue;

      // Set icon
      let iconSrc = cloudyIcon;
      if (day.icon === "rain") iconSrc = rainIcon;
      else if (day.icon === "cloudy") iconSrc = cloudyIcon;
      else if (day.icon === "sunny") iconSrc = sunnyIcon;
      else if (day.icon === "snow") iconSrc = snowIcon;

      distImgs[i].innerHTML = "";
      const dayImg = document.createElement("img");
      dayImg.src = iconSrc;
      dayImg.alt = "Weather Icon";
      distImgs[i].appendChild(dayImg);

      // Set content
      const city = distContents[i].querySelector(".city");
      const cond = distContents[i].querySelector(".condition");
      const temp = distContents[i].querySelector(".temperature");
      const hum = distContents[i].querySelector(".humidity");
      const wind = distContents[i].querySelector(".wind-speed");
      const feels = distContents[i].querySelector(".feels-like");
      const vis = distContents[i].querySelector(".visibility");
      const dt = distContents[i].querySelector(".date");

      if (city)
        city.textContent = `City Name: ${capitalizeWords(data.address)}`;
      if (cond) cond.textContent = `Condition: ${day.conditions}`;
      if (temp) temp.textContent = `Temperature: ${day.temp} °F`;
      if (hum) hum.textContent = `Humidity: ${day.humidity} %`;
      if (wind) wind.textContent = `Wind Speed: ${day.windspeed} mph`;
      if (feels) feels.textContent = `Feels Like: ${day.feelslike}`;
      if (vis) vis.textContent = `Visibility: ${day.visibility} miles`;
      if (dt) dt.textContent = `Date: ${day.datetime}`;
    }
  } catch (error) {
    console.error("Error displaying weather data:", error);
    alert("Error displaying weather data. Please try again.");
  }
}
