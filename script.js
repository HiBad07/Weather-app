document.getElementById("get-weather").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  
  if (city) {
    const apiKey = "b445d38a8607d15f8d8afac046330276";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = `Weather in ${data.name}: ${data.weather[0].main} - ${data.main.temp}°C`;
        document.getElementById("weather-info").innerText = weatherInfo;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById("weather-info").innerText = "City not found.";
      });
  }
});
