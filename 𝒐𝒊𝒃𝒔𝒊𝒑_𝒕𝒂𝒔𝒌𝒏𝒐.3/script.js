function convert() {
  var inputCelsius = document.getElementById("inputCelsius").value;
  var outputResult = document.getElementById("outputResult");
  var outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;

  if (inputCelsius === "") {
      outputResult.textContent = "";
      return;
  }

  var celsius = parseFloat(inputCelsius);
  var result;

  if (outputUnit === "fahrenheit") {
      result = celsius * 9 / 5 + 32;
  } else if (outputUnit === "kelvin") {
      result = celsius + 273.15;
  }

  outputResult.textContent = result.toFixed(2);
}
