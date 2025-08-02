import "./style.css";

//Fetching Data from Weather API
async function Weather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/addis ababa?key=6XVV6HUW6G6K9CK3RDG5H57B7`,
  );
  const data = await response.json();
  console.log(data);
  console.log(data.currentConditions.temp);
}
Weather();
