const apikeys = "ce2c9cacb1baf21fa5f5aa1f03a1414b";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

searchBox = document.querySelector(".search-box input");
searchBtn = document.querySelector(".search-box button");
weatherIcon = document.querySelector("#weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikeys}`);

  if (response.status == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-box").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector("#city-name").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind-speed").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".weather-box").style.display = "block";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather-box").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
