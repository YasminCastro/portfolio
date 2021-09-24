var numeroSecreto = parseInt(Math.random() * 11);
var tentativa;
var qtdTentativas = 0;
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultadoChute = document.getElementById("resultado");

  qtdTentativas++;

  if (chute > 10 || chute < 0) {
    resultadoChute.innerHTML = "Chute um número entre 0 e 10";
  } else {
    if (chute > numeroSecreto) {
      resultadoChute.innerHTML = "Ta frio, chuta um número menor ai";
    } else if (chute < numeroSecreto) {
      resultadoChute.innerHTML = "Pode chutar um número maior que ta longe";
    } else {
      if (qtdTentativas === 1) {
        resultadoChute.innerHTML =
          "Puts mas você é brabo mesmo acertou de primeira";
      } else if (qtdTentativas > 8) {
        resultadoChute.innerHTML =
          "Foi dificil mas acertou depois de " + qtdTentativas + " tentativas.";
      } else {
        resultadoChute.innerHTML =
          "Parabéns você acertou com " + qtdTentativas + " tentativas!!";
      }
    }
  }
}
