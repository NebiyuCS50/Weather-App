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

//Fecthing Data from Giphy API

async function giphy() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=CHeuvC0jF2z4XQReQXW7b7zPtTmJIOeh&s=cats`,
  );
  const data = await response.json();
  console.log(data);
}
giphy();
