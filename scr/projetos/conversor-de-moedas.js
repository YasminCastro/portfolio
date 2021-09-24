function Converter() {
  //pega os valores selecionados
  var moedaLocalElement = document.getElementById("deMoedaLocal");
  var moedaLocal =
    moedaLocalElement.options[moedaLocalElement.selectedIndex].text;
  console.log(moedaLocal);
  var moedaEstrangeiraElement = document.getElementById("paraMoedaEstrangeira");
  var moedaEstrangeira =
    moedaEstrangeiraElement.options[moedaEstrangeiraElement.selectedIndex].text;
  console.log(moedaEstrangeira);
  //verifica se o usuario não selecionou opções iguais
  verificaSeEscolheuMesmaMoeda(moedaLocal, moedaEstrangeira);
  //se a moeda local-primeira escolhida for dolar
  if (moedaLocal == "Dolar") {
    deDolarLocal(moedaEstrangeira);
  }

  if (moedaLocal == "Real") {
    deRealLocal(moedaEstrangeira);
  }

  if (moedaLocal == "Euro") {
    deEuroLocal(moedaEstrangeira);
  }

  if (moedaLocal == "BitCoin") {
    deBitCoinLocal(moedaEstrangeira);
  }
}

//verifica se o usuario não selecionou opções iguais
function verificaSeEscolheuMesmaMoeda(moedaLocal, moedaEstrangeira) {
  var TEXTO_AVISO = document.getElementById("textoDeAviso");

  if (moedaLocal == "Real" && moedaEstrangeira == "Real") {
    console.log("erro");
    TEXTO_AVISO.innerHTML = "Você deve escolher duas moedas diferentes.";
    return;
  }

  if (moedaLocal == "Euro" && moedaEstrangeira == "Euro") {
    console.log("erro");
    TEXTO_AVISO.innerHTML = "Você deve escolher duas moedas diferentes.";
    return;
  }
  if (moedaLocal == "Dolar" && moedaEstrangeira == "Dolar") {
    console.log("erro");
    TEXTO_AVISO.innerHTML = "Você deve escolher duas moedas diferentes.";
    return;
  }
  if (moedaLocal == "BitCoin" && moedaEstrangeira == "BitCoin") {
    console.log("erro");
    TEXTO_AVISO.innerHTML = "Você deve escolher duas moedas diferentes.";
    return;
  }

  TEXTO_AVISO.innerHTML = "";
}

//quando a moeda local é o dolar
function deDolarLocal(moedaEstrangeira) {
  //para Real
  if (moedaEstrangeira == "Real") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = (valorEmDolarNumerico * 5.32).toFixed(2);
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para Euro
  if (moedaEstrangeira == "Euro") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmEuroNumerico = (valorEmDolarNumerico * 0.85).toFixed(2);
    console.log(valorEmEuroNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Euro é € " + valorEmEuroNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //BitCoin
  if (moedaEstrangeira == "BitCoin") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmBitCoinNumerico = valorEmDolarNumerico * 0.000022;
    console.log(valorEmBitCoinNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O Resultado em BitCoin é ₿ " + valorEmBitCoinNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//quando a moeda local é real
function deRealLocal(moedaEstrangeira) {
  //para Dolar
  if (moedaEstrangeira == "Dolar") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = (valorEmDolarNumerico * 0.19).toFixed(2);
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Dolar é U$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  // para euro
  if (moedaEstrangeira == "Euro") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = (valorEmDolarNumerico * 0.16).toFixed(2);
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em euro é € " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para Bitcoin
  if (moedaEstrangeira == "BitCoin") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = valorEmDolarNumerico * 0.000004;
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em euro é ₿ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//quando a moeda local é Euro
function deEuroLocal(moedaEstrangeira) {
  //para dolar
  if (moedaEstrangeira == "Dolar") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = (valorEmDolarNumerico * 1.17).toFixed(2);
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Dolar é U$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para Real
  if (moedaEstrangeira == "Real") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = (valorEmDolarNumerico * 6.21).toFixed(2);
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para bitcoin
  if (moedaEstrangeira == "BitCoin") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = valorEmDolarNumerico * 0.000025;
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em em BitCoin é " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//quando a moeda local é BitCoin
function deBitCoinLocal(moedaEstrangeira) {
  //para dolar
  if (moedaEstrangeira == "Dolar") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = valorEmDolarNumerico * 46.99;
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Dolar é U$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para real
  if (moedaEstrangeira == "Real") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = valorEmDolarNumerico * 248.96;
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Real é R$ " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  //para euro
  if (moedaEstrangeira == "Euro") {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmRealNumerico = valorEmDolarNumerico * 40.03;
    console.log(valorEmRealNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Euro é € " + valorEmRealNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}
