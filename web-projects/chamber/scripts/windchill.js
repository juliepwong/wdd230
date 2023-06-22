let temperature = parseFloat(document.querySelector("#temp").textContent);
let windspeed = parseFloat(document.querySelector("#windspeed").textContent);
let windchill = document.querySelector("#windchill");
// windchill.textContent= "hello world";

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}


if(temperature <= 50 && windspeed > 3.0) {
    //if able to calculate. use formula
    // f = 35.74 + 0.6215*t - 35.73*s^0.16 + 0.4275*tF*s^0.16;
    // were f = the windchill factor in Fahrenheit
    let tF = celsiusToFahrenheit(temperature);
    console.log(tF);
    let chill = 35.74 + (0.6215*tF) - (35.73 *(windspeed^0.16)) + (0.4275*tF*(windspeed^0.16));
    console.log(chill);
    windchill.textContent = chill.toFixed(2);

} else{
    //if cannot caluclate display "N/A"
    console.log("fail")
  }
