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

// get local storage object if it exists if it doesn't exist then create it and use ctyBtn1 through cityBtn8 as the keys with a value of ""
// write the values to the DOM using writeCityBtns
// if the value is "" then write "City" to the DOM
function writeCityBtnsFromLocalStorage() {
  // get local storage object
  var cityBtns = JSON.parse(localStorage.getItem("cityBtns"));
  console.log(cityBtns);
  if (cityBtns === null) {
    console.log("cityBtns is null so it was created on line 25");
    cityBtns = {
      cityBtn1: "",
      cityBtn2: "",
      cityBtn3: "",
      cityBtn4: "",
      cityBtn5: "",
      cityBtn6: "",
      cityBtn7: "",
      cityBtn8: "",
    };
  } else {
    // write the values to the DOM
    $("#cityBtn1").text(cityBtns.cityBtn1);
    $("#cityBtn2").text(cityBtns.cityBtn2);
    $("#cityBtn3").text(cityBtns.cityBtn3);
    $("#cityBtn4").text(cityBtns.cityBtn4);
    $("#cityBtn5").text(cityBtns.cityBtn5);
    $("#cityBtn6").text(cityBtns.cityBtn6);
    $("#cityBtn7").text(cityBtns.cityBtn7);
    $("#cityBtn8").text(cityBtns.cityBtn8);
  }
  // if the value is "" then write "City" to the DOM
  if (cityBtns.cityBtn1 === "") {
    $("#cityBtn1").hide();
    console.log("cityBtn1 is empty");
  }
  if (cityBtns.cityBtn2 === "") {
    $("#cityBtn2").hide();
    console.log("cityBtn2 is empty");
  }
  if (cityBtns.cityBtn3 === "") {
    $("#cityBtn3").hide();
    console.log("cityBtn3 is empty");
  }
  if (cityBtns.cityBtn4 === "") {
    $("#cityBtn4").hide();
    console.log("cityBtn4 is empty");
  }
  if (cityBtns.cityBtn5 === "") {
    $("#cityBtn5").hide();
    console.log("cityBtn5 is empty");
  }
  if (cityBtns.cityBtn6 === "") {
    $("#cityBtn6").hide();
    console.log("cityBtn6 is empty");
  }
  if (cityBtns.cityBtn7 === "") {
    $("#cityBtn7").hide();
    console.log("cityBtn7 is empty");
  }
  if (cityBtns.cityBtn8 === "") {
    $("#cityBtn8").hide();
    console.log("cityBtn8 is empty");
  }
}

writeCityBtnsFromLocalStorage();

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

function searchingClick(city) {
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

        // write the chosen city to the first non-empty cityBtn in local storage
        // if all cityBtns are full then overwrite the first cityBtn
        // write the chosen city to the DOM
        function writeCityBtnsToLocalStorage(chosenCity) {
          // get local storage object
          var cityBtns = JSON.parse(localStorage.getItem("cityBtns"));
          console.log(cityBtns);
          // if the object is null then create the object
          if (cityBtns === null) {
            console.log("cityBtns was null so it was created on line 165");
            cityBtns = {
              cityBtn1: "",
              cityBtn2: "",
              cityBtn3: "",
              cityBtn4: "",
              cityBtn5: "",
              cityBtn6: "",
              cityBtn7: "",
              cityBtn8: "",
            };
          }
          console.log(chosenCity + " is supposed to be written to the buttons");
          // if the first cityBtn is empty then write the chosen city to the first cityBtn
          if (cityBtns.cityBtn1 === "") {
            cityBtns.cityBtn1 = chosenCity;
            $("#cityBtn1").show();
            $("#cityBtn1").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn2 === "") {
            cityBtns.cityBtn2 = chosenCity;
            $("#cityBtn2").show();
            $("#cityBtn2").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn3 === "") {
            cityBtns.cityBtn3 = chosenCity;
            $("#cityBtn3").show();
            $("#cityBtn3").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn4 === "") {
            cityBtns.cityBtn4 = chosenCity;
            $("#cityBtn4").show();
            $("#cityBtn4").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn5 === "") {
            cityBtns.cityBtn5 = chosenCity;
            $("#cityBtn5").show();
            $("#cityBtn5").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn6 === "") {
            cityBtns.cityBtn6 = chosenCity;
            $("#cityBtn6").show();
            $("#cityBtn6").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn7 === "") {
            cityBtns.cityBtn7 = chosenCity;
            $("#cityBtn7").show();
            $("#cityBtn7").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else if (cityBtns.cityBtn8 === "") {
            cityBtns.cityBtn8 = chosenCity;
            $("#cityBtn8").show();
            $("#cityBtn8").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          } else {
            // move the cityBtns up one and write the chosen city to the last cityBtn
            // cityBtns.cityBtn1 = cityBtns.cityBtn2;
            cityBtns.cityBtn1 = cityBtns.cityBtn2;
            $("#cityBtn1").text(cityBtns.cityBtn1);
            cityBtns.cityBtn2 = cityBtns.cityBtn3;
            $("#cityBtn2").text(cityBtns.cityBtn2);
            cityBtns.cityBtn3 = cityBtns.cityBtn4;
            $("#cityBtn3").text(cityBtns.cityBtn3);
            cityBtns.cityBtn4 = cityBtns.cityBtn5;
            $("#cityBtn4").text(cityBtns.cityBtn4);
            cityBtns.cityBtn5 = cityBtns.cityBtn6;
            $("#cityBtn5").text(cityBtns.cityBtn5);
            cityBtns.cityBtn6 = cityBtns.cityBtn7;
            $("#cityBtn6").text(cityBtns.cityBtn6);
            cityBtns.cityBtn7 = cityBtns.cityBtn8;
            $("#cityBtn7").text(cityBtns.cityBtn7);

            cityBtns.cityBtn8 = chosenCity;
            $("#cityBtn8").show();
            $("#cityBtn8").text(chosenCity);
            localStorage.setItem("cityBtns", JSON.stringify(cityBtns));
          }
        }

        // write the cityBtns from local storage to the DOM
        writeCityBtnsToLocalStorage(chosenCity);

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
            var futureIcon5 = data.daily[4].weather[0].description;
            $("#currentIcon").text(currentIcon);
            $("#futureIcon1").text(futureIcon1);
            $("#futureIcon2").text(futureIcon2);
            $("#futureIcon3").text(futureIcon3);
            $("#futureIcon4").text(futureIcon4);
            $("#futureIcon5").text(futureIcon5);

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
}

// get text for cityBtn1
// get text for cityBtn2
// get text for cityBtn3
// get text for cityBtn4
// get text for cityBtn5
// get text for cityBtn6
// get text for cityBtn7
// get text for cityBtn8

// console.log cityBtn1 through cityBtn8

// add click event to cityBtn1 through cityBtn8

$("#cityBtn1").on("click", function () {
  var city = $("#cityBtn1").text();
  searchingClick(city);
});

$("#cityBtn2").on("click", function () {
  var city = $("#cityBtn2").text();
  searchingClick(city);
});

$("#cityBtn3").on("click", function () {
  var city = $("#cityBtn3").text();
  searchingClick(city);
});

$("#cityBtn4").on("click", function () {
  var city = $("#cityBtn4").text();
  searchingClick(city);
});

$("#cityBtn5").on("click", function () {
  var city = $("#cityBtn5").text();
  searchingClick(city);
});

$("#cityBtn6").on("click", function () {
  var city = $("#cityBtn6").text();
  searchingClick(city);
});

$("#cityBtn7").on("click", function () {
  var city = $("#cityBtn7").text();
  searchingClick(city);
});

$("#cityBtn8").on("click", function () {
  var city = $("#cityBtn8").text();
  searchingClick(city);
});

$("#searchBtn").on("click", function () {
  var city = $("#formInput").val();
  searchingClick(city);
});
// add click event to searchBtn
