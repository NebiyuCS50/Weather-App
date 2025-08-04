import "./style.css";

//search bar
const searchBar = document.querySelector(".input");
searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchValue = searchBar.value;
    console.log(searchValue);
    if (searchValue) {
      Weather(searchValue);
      searchBar.value = ""; // Clear the input after search
    } else {
      Weather("Addis Ababa, Ethiopia");
    }
  }
});

//Fetching Data from Weather API
async function Weather(params) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(params)}?key=6XVV6HUW6G6K9CK3RDG5H57B7`,
  );
  const data = await response.json();
  console.log(data);
  console.log(data.currentConditions.temp);
}

//Fecthing Data from Giphy API

const container = document.querySelector(".container");
const img = document.createElement("img");
async function giphy() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=CHeuvC0jF2z4XQReQXW7b7zPtTmJIOeh&s=cats`,
  );
  const data = await response.json();
  img.src = data.data.images.original.url;
  img.alt = "Giphy Image";
  img.classList.add("giphy");
  container.appendChild(img);
}
giphy();
