var givenvalue = "celsius";  

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

document.getElementById("celsius").onchange = function() {
  givenvalue = "celsius";
};
document.getElementById("fahrenheit").onchange = function() {
  givenvalue = "fahrenheit";
};
document.getElementById("kelvin").onchange = function() {
  givenvalue = "kelvin";
};

function convert(temp) {

  
  var celsius = document.getElementById("celsius").value;
  celsius = parseFloat(celsius);

  var fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseFloat(fahrenheit);

  var kelvin = document.getElementById("kelvin").value;
  kelvin = parseFloat(kelvin);

  
  var convertsCelsius;
  var convertsFahrenheit;
  var convertsKelvin;

  
  if (givenvalue === "celsius") {
    convertsFahrenheit = celsius * 9 / 5 + 32;
    convertsKelvin = celsius + 273;
   
    document.getElementById("fahrenheit").value = Math.round(convertsFahrenheit);
    document.getElementById("kelvin").value = Math.round(convertsKelvin);
  } 
    
    else if (givenvalue === "fahrenheit") {
    convertsCelsius = (fahrenheit - 32) * 5 / 9;
    convertsKelvin = convertsCelsius + 273;
    
    document.getElementById("celsius").value = Math.round(convertsCelsius);
    document.getElementById("kelvin").value = Math.round(convertsKelvin);
  } 
    
    else if (givenvalue === "kelvin") {
    convertsCelsius = kelvin - 273;
    convertsFahrenheit = convertsCelsius * 9 / 5 + 32;
    
    document.getElementById("celsius").value = Math.round(convertsCelsius);
    document.getElementById("fahrenheit").value = Math.round(convertsFahrenheit);
  }

  
  document.getElementById("celsius").innerHTML = convertsCelsius;
  document.getElementById("fahrenheit").innerHTML = convertsFahrenheit;
  document.getElementById("kelvin").innerHTML = convertsKelvin;
}


function reset() {
  document.getElementById("celsius").value = 0;
  document.getElementById("fahrenheit").value = 0;
  document.getElementById("kelvin").value = 0;
}
