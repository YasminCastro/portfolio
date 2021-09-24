var nome = "Yas";
var n1 = 9;
var n2 = 8;
var n3 = 6;
var n4 = 5;

var nFinal = (n1 + n2 + n3 + n4) / 4;
var notaFixada = nFinal.toFixed(1);
var aprovado = ",você foi aprovada. Sua nota é: ";
var reprovado = ",você foi reprovado. Sua nota é: ";
if (nFinal > 6) {
  console.log(nome + aprovado + nFinal);
  document.body.innerHTML += nome + aprovado + nFinal;
} else {
  console.log((document.body.innerHTML += nome + reprovado + nFinal));
  document.body.innerHTML += nome + reprovado + nFinal;
}
