var city = "";
var arrayOfCities = [];
var today = (dayjs().format("MM/DD/YYYY") + " " + city);
var tomorrow = dayjs().add(1, "day").format("MM/DD/YYYY");
var dayAfterTomorrow = dayjs().add(2, "day").format("MM/DD/YYYY");
var threeDaysFromNow = dayjs().add(3, "day").format("MM/DD/YYYY");
var fourDaysFromNow = dayjs().add(4, "day").format("MM/DD/YYYY");

function getLocalStorage() {
    try {
        //json parse the array and store it in arrayOfCities
      var storedCities = localStorage.getItem("storedCities");
      if (localStorage.storedCities) {
        arrayOfCities = JSON.parse(localStorage.getItem("storedCities"));
        return arrayOfCities;
      } else {
        return arrayOfCities;
      }
    } catch (err) {
        console.log(err);
        } }

function setLocalStorage(city) {
    try {
        console.log(typeof arrayOfCities);
        //check if city is already in arrayOfCities and if not, add it to the a
        if (arrayOfCities.indexOf(city) === -1) {
            arrayOfCities.push(city);
            // stringify the array and store it in localStorage
            localStorage.setItem("storedCities", JSON.stringify(arrayOfCities));
            console.log("city added to local storage");
        } else {
            console.log("city already in local storage");
        }
    } catch (err) {
        console.log(err);
    }}

// function to create a button for each city in arrayOfCities and prepend it to the history div
function writeHistory(arrayOfCities) {
    $("#history").empty();
    console.log(arrayOfCities);
    console.log(arrayOfCities.length);
    for (var i = 0; i < arrayOfCities.length; i++) {
        var cityButton = $("<button>");
        cityButton.addClass("btn btn-secondary custom-btn-secondary btn-md mt-1 btn-block list-item");
        cityButton.attr("data-city", arrayOfCities[i]);
        cityButton.text(arrayOfCities[i]);
       $("#history").prepend(cityButton);
    }}

// get local storage and write history
writeHistory(getLocalStorage());

function writeFutureDates() {
    $("#futureDate1").text(city + " " + today);
    $("#futureDate2").text(tomorrow);
    $("#futureDate3").text(dayAfterTomorrow);
    $("#futureDate4").text(threeDaysFromNow);
    $("#futureDate5").text(fourDaysFromNow);
  }
  writeFutureDates();

  $("#cityInFocus").text(city + " " + today);
var apiKey = "8f704084edf1f880b502675f2cdea0f6";
var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
var lat = "";
var lon = "";
var latLonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
// fetch(geoUrl) to get lat and lon
// fetch(latLonUrl) to get weather data

function getLonLat(city) {
    var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  fetch(geoUrl)
    .then(function (response) {
        if (response.status !== 200) {
            console.log(response.status);
          }
        return response.json();
    })
    .then(function (data) {
        if (data[0] === undefined || data[0] === null) {
            console.log("No data");
          } else {
      console.log(data);
      var name = data[0].name;
      var state = data[0].state;
        var country = data[0].country;
        console.log("name: " + name);
        console.log("state: " + state);
        console.log("country: " + country);
        // add state and country text to h6 element
        $("#actualCity").text(state + ", " + country);
      lat = data[0].lat;
      lon = data[0].lon;
      latLonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
      console.log(latLonUrl);
      getWeatherData(latLonUrl);
          }});}

function getWeatherData(latLonUrl) {
    console.log(latLonUrl);
    fetch(latLonUrl)
        .then(function (response) {
            if (response.status !== 200) {
                console.log(response.status);
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (!data) {
                console.log("No data");
            } else {
        console.log(data);
        var currentTemp = data.current.temp;
        var currentHumidity = data.current.humidity;
        var currentWindSpeed = data.current.wind_speed;
        var futureTemp1 = data.daily[0].temp.day;
        var futureTemp2 = data.daily[1].temp.day;
        var futureTemp3 = data.daily[2].temp.day;
        var futureTemp4 = data.daily[3].temp.day;
        var futureTemp5 = data.daily[4].temp.day;
        var futureHumidity1 = data.daily[0].humidity;
        var futureHumidity2 = data.daily[1].humidity;
        var futureHumidity3 = data.daily[2].humidity;
        var futureHumidity4 = data.daily[3].humidity;
        var futureHumidity5 = data.daily[4].humidity;
        var futureWindSpeed1 = data.daily[0].wind_speed;
        var futureWindSpeed2 = data.daily[1].wind_speed;
        var futureWindSpeed3 = data.daily[2].wind_speed;
        var futureWindSpeed4 = data.daily[3].wind_speed;
        var futureWindSpeed5 = data.daily[4].wind_speed;
        var currentIcon = data.current.weather[0].description;
        var futureIcon1 = data.daily[0].weather[0].description;
        var futureIcon2 = data.daily[1].weather[0].description;
        var futureIcon3 = data.daily[2].weather[0].description;
        var futureIcon4 = data.daily[3].weather[0].description;
        var futureIcon5 = data.daily[4].weather[0].description;
        $("#currentIcon").text(currentIcon);
        $("#futureIcon1").text(futureIcon1);
        $("#futureIcon2").text(futureIcon2);
        $("#futureIcon3").text(futureIcon3);
        $("#futureIcon4").text(futureIcon4);
        $("#futureIcon5").text(futureIcon5);

        var img0 = document.createElement("img");
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        var img3 = document.createElement("img");
        var img4 = document.createElement("img");
        var img5 = document.createElement("img");
        // console.log all properties of data to see what is available
        console.log(data);
        var iconUrl0 = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`;
        var iconUrl1 = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}.png`;
        var iconUrl2 = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`;
        var iconUrl3 = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`;
        var iconUrl4 = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`;
        var iconUrl5 = `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png`;

        img0.src = iconUrl0;
        img1.src = iconUrl1;
        img2.src = iconUrl2;
        img3.src = iconUrl3;
        img4.src = iconUrl4;
        img5.src = iconUrl5;

        $("#currentIcon").append(img0);
        $("#futureIcon1").append(img1);
        $("#futureIcon2").append(img2);
        $("#futureIcon3").append(img3);
        $("#futureIcon4").append(img4);
        $("#futureIcon5").append(img5);
        $("#currentTemp").text("Current temp: " + currentTemp);
        $("#currentHumidity").text("Current Humidity: " + currentHumidity);
        $("#currentWindSpeed").text("Current Wind: " + currentWindSpeed);
        $("#futureTemp1").text("Afternoon Temp: " + futureTemp1);
        $("#futureTemp2").text("Afternoon Temp: " + futureTemp2);
        $("#futureTemp3").text("Afternoon Temp: " + futureTemp3);
        $("#futureTemp4").text("Afternoon Temp: " + futureTemp4);
        $("#futureTemp5").text("Afternoon Temp: " + futureTemp5);
        $("#futureHumidity1").text("Humidity: " + futureHumidity1);
        $("#futureHumidity2").text("Humidity: " + futureHumidity2);
        $("#futureHumidity3").text("Humidity: " + futureHumidity3);
        $("#futureHumidity4").text("Humidity: " + futureHumidity4);
        $("#futureHumidity5").text("Humidity: " + futureHumidity5);
        $("#futureWindSpeed1").text("Wind: " + futureWindSpeed1);
        $("#futureWindSpeed2").text("Wind: " + futureWindSpeed2);
        $("#futureWindSpeed3").text("Wind: " + futureWindSpeed3);
        $("#futureWindSpeed4").text("Wind: " + futureWindSpeed4);
        $("#futureWindSpeed5").text("Wind: " + futureWindSpeed5);
        $("#cityInFocus").text(city + today);
            }
        });}

function searchingClick() {
    // if #formInput is not empty
    if ($("#formInput").val() !== "") {
    var city = $("#formInput").val();
    //make first letter of city uppercase
    city = city.charAt(0).toUpperCase() + city.slice(1);
    console.log(city);
    setLocalStorage(city);
    getLonLat(city);
    $("#cityFocus").text(city + today);
    } else {
        //change placeholder text to "Please enter a city" in formInput
        $("#formInput").attr("placeholder", "Please enter a city");
    }}

$("#searchBtn").on("click", function () {
    var city = $("#formInput").val();
    //make first letter of city uppercase
    city = city.charAt(0).toUpperCase() + city.slice(1);
    console.log("search button clicked");
    // add city to innerHTML for #actualCity
    searchingClick(city);
    $("#cityFocus").text(city);
    // prepend city as a button to div with id #history
    var cityBtn = $("<button>");
    cityBtn.addClass("btn btn-secondary custom-btn-secondary btn-md mt-1 btn-block list-item");
    cityBtn.text(city);
   $("#history").prepend(cityBtn);
    });

// add event listener to list-group city = event.target.textContent
$(".list-group").on("click", function (event) {
    event.preventDefault();
    var city = event.target.textContent;
    console.log(city);
    getLonLat(city);
    $("#cityFocus").text(city);
    });




