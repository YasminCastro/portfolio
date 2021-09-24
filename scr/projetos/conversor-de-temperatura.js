function ConverterCelsiusParaKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorCelsius = parseFloat(valor);

  var valorKelvin = valorCelsius + 273;
  console.log(valorKelvin);

  var elementoValorConvertidoCelsius = document.getElementById(
    "valorConvertidoCelsius"
  );
  var valorConvertidoCelsius =
    "O Resultado de celsius para kelvin é: " + valorKelvin + "°";
  elementoValorConvertidoCelsius.innerHTML = valorConvertidoCelsius;
}

function ConverterCelsiusParaFarenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorCelsius = parseFloat(valor);

  var valorFarenheit = valorCelsius * 1.8 + 32;
  console.log(valorFarenheit);

  var elementoValorConvertidoCelsius = document.getElementById(
    "valorConvertidoCelsius"
  );
  var valorConvertidoCelsius =
    "O Resultado de celsius para Farenheit é: " + valorFarenheit + "°";
  elementoValorConvertidoCelsius.innerHTML = valorConvertidoCelsius;
}

function ConverterFarenheitParaKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorFarenheit = parseFloat(valor);

  var valorKelvin = (valorFarenheit - 32) * (5 / 9) + 273.15;
  console.log(valorKelvin);

  var elementoValorConvertidoFarenheit = document.getElementById(
    "valorConvertidoFarenheit"
  );
  var valorConvertidoFarenheit =
    "O Resultado de Farenheit para Kelvin é: " + valorKelvin + "°";
  elementoValorConvertidoFarenheit.innerHTML = valorConvertidoFarenheit;
}

function ConverterFarenheitParaCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorFarenheit = parseFloat(valor);

  var valorCelsius = (valorFarenheit - 32) / 1.8;
  console.log(valorCelsius);

  var elementoValorConvertidoFarenheit = document.getElementById(
    "valorConvertidoFarenheit"
  );
  var valorConvertidoFarenheit =
    "O Resultado de Farenheit para Celsius é: " + valorCelsius + "°";
  elementoValorConvertidoFarenheit.innerHTML = valorConvertidoFarenheit;
}

function ConverterKelvinParaFarenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorKelvin = parseFloat(valor);

  var valorFarenheit = 1.8 * (valorKelvin - 273) + 32;
  console.log(valorFarenheit);

  var elementoValorConvertidoKelvin = document.getElementById(
    "valorConvertidoKelvin"
  );
  var valorConvertidoKelvin =
    "O Resultado de Kelvin para Farenheit é: " + valorFarenheit + "°";
  elementoValorConvertidoKelvin.innerHTML = valorConvertidoKelvin;
}

function ConverterKelvinParaCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorKelvin = parseFloat(valor);

  var valorCelsius = valorKelvin - 273.15;
  console.log(valorCelsius);

  var elementoValorConvertidoKelvin = document.getElementById(
    "valorConvertidoKelvin"
  );
  var valorConvertidoKelvin =
    "O Resultado de Kelvin para Celsius é: " + valorCelsius + "°";
  elementoValorConvertidoKelvin.innerHTML = valorConvertidoKelvin;
}
