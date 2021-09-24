var jogadores = [];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      '<tr><td id="foto">' + "<img src=" + jogadores[i].foto + ">" + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>';
    elemento +=
      '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>';
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].empates += 1;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function adicionarNovoJogador(jogadores) {
  var nomeJogador = document.getElementById("nomeNovoJogador").value;
  var fotoJogador = document.getElementById("fotoJogador").value;
  var jogador = {
    foto: fotoJogador,
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };
  jogadores.push(jogador);
  exibeJogadoresNaTela(jogadores);
}

function resetarPontos(jogadores) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
  }
}
