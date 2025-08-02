async function Weather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=6XVV6HUW6G6K9CK3RDG5H57B7`,
  );
  const data = await response.json();
  console.log(data);
}
