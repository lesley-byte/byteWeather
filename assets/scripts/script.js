// I guess this will be jquery
console.log("I am attached to index.html");

// ids for the buttons
// the search button is searchBtn
//the city buttons are cityBtn1 through cityBtn8
// the City in focus text field is cityFocus
// the current temp text field is currentTemp
// the current humidity text field is currentHumidity
// the current wind speed text field is currentWindSpeed
// the future dates are futureDate1 through futureDate5
// the future temps are futureTemp1 through futureTemp5
// the future humidity are futureHumidity1 through futureHumidity5
// the future icons are futureIcon1 through futureIcon5
// the future wind speeds are futureWindSpeed1 through futureWindSpeed5
var today = dayjs().format("MM/DD/YYYY");
var tomorrow = dayjs().add(1, "day").format("MM/DD/YYYY");
var dayAfterTomorrow = dayjs().add(2, "day").format("MM/DD/YYYY");
var threeDaysFromNow = dayjs().add(3, "day").format("MM/DD/YYYY");
var fourDaysFromNow = dayjs().add(4, "day").format("MM/DD/YYYY");

var apiKey = "8f704084edf1f880b502675f2cdea0f6";
var city = "London";
var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
var tempWrite = "Written to DOM";

// create img element and set the src attribute to the icon url
// append the img element to the futureIcon1 through futureIcon5
function writeFutureIcons2() {
  var iconUrl = `http://openweathermap.org/img/wn/04d.png`;
  var img = document.createElement("img");
  img.setAttribute("src", iconUrl);
  document.getElementById("#futureIcon1").appendChild(img);
}

function writeCityBtns(tempWrite) {
  for (var i = 0; i < 9; i++) {
    $(`#cityBtn${i}`).text(tempWrite);
  }
}

function writeCurrent(tempWrite) {
  $("#cityFocus").text(tempWrite);
  $("#currentIcon").text(tempWrite);
  $("#currentTemp").text(tempWrite);
  $("#currentHumidity").text(tempWrite);
  $("#currentWindSpeed").text(tempWrite);
}

// write function to write today through 4 days from now to the DOM using futureDate1 through futureDate5
function writeFutureDates() {
  $("#futureDate1").text(today);
  $("#futureDate2").text(tomorrow);
  $("#futureDate3").text(dayAfterTomorrow);
  $("#futureDate4").text(threeDaysFromNow);
  $("#futureDate5").text(fourDaysFromNow);
}
writeFutureDates();

function writeFutureIcons(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureIcon${i}`).text("Will be an icon");
  }
}
writeFutureIcons(tempWrite);

$("#searchBtn").on("click", function () {
  var tempWrite = $("#formInput").val();
  city = tempWrite;
  console.log(tempWrite + "is being written to the DOM");
  geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  fetch(geoUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data[0] === undefined || data[0] === null) {
        console.log("No data");
      } else {
        var chosenCity = data[0].name;
        var chosenState = data[0].state;
        var chosenCountry = data[0].country;
        $("#cityFocus").text(
          chosenCity + ", " + chosenState + ", " + chosenCountry
        );
        console.log(data[0].lat);
        console.log(data[0].lon);
        var lat = data[0].lat;
        var lon = data[0].lon;
        var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
        fetch(oneCallUrl)
          .then(function (response) {
            if (response.status !== 200) {
              console.log(response.status);
            }
            return response.json();
          })
          .then(function (data) {
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
            $("#currentIcon").text(currentIcon);
            $("#futureIcon1").text(currentIcon);
            $("#futureIcon2").text(futureIcon1);
            $("#futureIcon3").text(futureIcon2);
            $("#futureIcon4").text(futureIcon3);
            $("#futureIcon5").text(futureIcon4);

            // console.log(data.daily[0]);
            // console.log(data.daily[0].weather[0]);
            // console.log(data.daily[0].weather[0].main);
            // console.log(data.daily[0].weather[0].description);
            // console.log(data.daily[0].weather[0].icon);
            // add img to currentIcon from http://openweathermap.org/img/wn/10d@2x.png
            // add img to futureIcon1 through futureIcon5 from http://openweathermap.org/img/wn/10d.png
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
            $("#futureTemp1").text("Temp: " + futureTemp1);
            $("#futureTemp2").text("Temp: " + futureTemp2);
            $("#futureTemp3").text("Temp: " + futureTemp3);
            $("#futureTemp4").text("Temp: " + futureTemp4);
            $("#futureTemp5").text("Temp: " + futureTemp5);
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

            console.log(data);
          });
      }
    });
});
