//Código antigo

//var celsius= 120

//var fahrenheit = (celsius * 1.8) + 32;

//console.log(celsius + " °C" + " equivalem a " + fahrenheit + " °F");

//document.getElementById("valorConvertido").innerText=celsius + " °C equivalem a " + fahrenheit + " °F"

function Converter() {
  var elementoFahrenheit = parseFloat(document.getElementById("temperatura").value)
 //var numeroFahrenheit= parseFloat(elementoFahrenheit)
 var fahrenheit = (( elementoFahrenheit * 1.8) + 32).toFixed(1)
 
 
 
 document.getElementById("valorConvertido").innerHTML=elementoFahrenheit + " °C equivalem a " + fahrenheit + " °F"
 
}

function ConverterKelvin() {
  var elementoKelvin = parseFloat(document.getElementById("temperatura").value)
  
  var kelvin = (elementoKelvin + 273.15).toFixed(2)
  
  
  
  document.getElementById("valorConvertido").innerHTML=elementoKelvin + "   °C equivalem a " + kelvin + " K"
}