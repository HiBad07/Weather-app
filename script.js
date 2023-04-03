const searchBar = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-btn');
const locationDiv = document.querySelector('.location');
const tempDiv = document.querySelector('.temperature');
const descDiv = document.querySelector('.description');
const iconDiv = document.querySelector('.icon');

searchBtn.addEventListener('click', () => {
  const city = searchBar.value;
  const apiKey = 'b445d38a8607d15f8d8afac046330276';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const location = data.name + ', ' + data.sys.country;
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      locationDiv.textContent = location;
      tempDiv.textContent = temp + '°C';
      descDiv.textContent = desc;
      iconDiv.innerHTML = `<img src="${iconUrl}" alt="${desc}">`;
    })
    .catch(error => {
      console.log(error);
      alert('City not found! Please try again.');
    });
});
