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
var apiKey = "8f704084edf1f880b502675f2cdea0f6";
var city = "London";
var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
var tempWrite = "Written to DOM";

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

function writeFutureDates(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureDate${i}`).text(tempWrite);
  }
}

function writeFutureTemps(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureTemp${i}`).text(tempWrite);
  }
}

function writeFutureWindSpeeds(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureWindSpeed${i}`).text(tempWrite);
  }
}

function writeFutureHumidities(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureHumidity${i}`).text(tempWrite);
  }
}

function writeFutureIcons(tempWrite) {
  for (var i = 1; i < 6; i++) {
    $(`#futureIcon${i}`).text(tempWrite);
  }
}
writeCityBtns(tempWrite);
writeCurrent(tempWrite);
writeFutureDates(tempWrite);
writeFutureTemps(tempWrite);
writeFutureWindSpeeds(tempWrite);
writeFutureHumidities(tempWrite);
writeFutureIcons(tempWrite);

$("#searchBtn").on("click", function () {
  var tempWrite = $("#formInput").val();
  city = tempWrite;
  console.log(tempWrite + "is being written to the DOM");
  geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  writeCityBtns(tempWrite);
  writeCurrent(tempWrite);
  writeFutureDates(tempWrite);
  writeFutureTemps(tempWrite);
  writeFutureWindSpeeds(tempWrite);
  writeFutureHumidities(tempWrite);
  writeFutureIcons(tempWrite);

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
            console.log(data);
            console.log(data.current.temp);
            console.log(data.current.humidity);
            console.log(data.current.wind_speed);
            console.log(data.daily[0].temp.day);
            console.log(data.daily[0].humidity);
            console.log(data.daily[0].wind_speed);
            console.log(data.daily[1].temp.day);
            console.log(data.daily[1].humidity);
            console.log(data.daily[1].wind_speed);
            console.log(data.daily[2].temp.day);
            console.log(data.daily[2].humidity);
            console.log(data.daily[2].wind_speed);
            console.log(data.daily[3].temp.day);
            console.log(data.daily[3].humidity);
            console.log(data.daily[3].wind_speed);
            console.log(data.daily[4].temp.day);
            console.log(data.daily[4].humidity);
            console.log(data.daily[4].wind_speed);

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

            $("#currentTemp").text("The current temp: " + currentTemp);
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
          });
      }
    });
});
