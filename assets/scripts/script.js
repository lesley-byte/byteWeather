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

// create a function that writes the current city name to cityFocus
// create a function that writes the current temp to currentTemp
// create a function that writes the current humidity to currentHumidity
// create a function that writes the current wind speed to currentWindSpeed
// create a function that writes the future date to futureDate1 through futureDate5
// create a function that writes the future temp to futureTemp1 through futureTemp5
// create a function that writes the future humidity to futureHumidity1 through futureHumidity5
// create a function that writes the future icon to futureIcon1 through futureIcon5
// create a function that writes the future wind speed to futureWindSpeed1 through futureWindSpeed5

function writeCityBtns() {
  for (var i = 0; i < 9; i++) {
    $(`#cityBtn${i}`).text("Written to DOM");
  }
}

function writeCurrent() {
  $("#cityFocus").text("Written to DOM");
  $("#currentIcon").text("Written to DOM");
  $("#currentTemp").text("Written to DOM");
  $("#currentHumidity").text("Written to DOM");
  $("#currentWindSpeed").text("Written to DOM");
}

function writeFutureDates() {
  for (var i = 1; i < 6; i++) {
    $(`#futureDate${i}`).text("Written to DOM");
    console.log(`futureDate${i}`);
  }
}

function writeFutureTemps() {
  for (var i = 1; i < 6; i++) {
    $(`#futureTemp${i}`).text("Written to DOM");
    console.log(`futureTemp${i}`);
  }
}

function writeFutureWindSpeeds() {
  for (var i = 1; i < 6; i++) {
    $(`#futureWindSpeed${i}`).text("Written to DOM");
    console.log(`futureWindSpeed${i}`);
  }
}

function writeFutureHumidities() {
  for (var i = 1; i < 6; i++) {
    $(`#futureHumidity${i}`).text("Written to DOM");
    console.log(`futureHumidity${i}`);
  }
}

function writeFutureIcons() {
  for (var i = 1; i < 6; i++) {
    $(`#futureIcon${i}`).text("Written to DOM");
    console.log(`futureIcon${i}`);
  }
}
writeCityBtns();
writeCurrent();
writeFutureDates();
writeFutureTemps();
writeFutureWindSpeeds();
writeFutureHumidities();
writeFutureIcons();
