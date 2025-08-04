import { Weather } from "./index.js";
//search bar
function searchBar() {
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
}
export default searchBar;
