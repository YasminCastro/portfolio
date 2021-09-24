var carta1 = {
  foto: "https://pbs.twimg.com/media/E9kxrWCXoAEvcm2.jpg",
  nome: "Big big",
  atributos: {
    Ataque: 6,
    Defesa: 7,
    Lacre: 10,
  },
};

var carta2 = {
  foto: "https://www.tiktok.com/api/img/?itemId=6942569188846243077&location=0&aid=1988",
  nome: "Afonsinha",
  atributos: {
    Ataque: 4,
    Defesa: 2,
    Lacre: 7,
  },
};

var carta3 = {
  foto: "https://i.ytimg.com/vi/gqCC-lS0QjE/hqdefault.jpg",
  nome: "Maria Cururu",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Lacre: 7,
  },
};

var carta4 = {
  foto: "https://i.ytimg.com/vi/qEWTJeu5M1s/hqdefault.jpg",
  nome: "Lay Mundial",
  atributos: {
    Ataque: 2,
    Defesa: 9,
    Lacre: 7,
  },
};

var carta5 = {
  foto: "https://exame.com/wp-content/uploads/2018/02/gret.jpg",
  nome: "Gretchen",
  atributos: {
    Ataque: 9,
    Defesa: 3,
    Lacre: 9,
  },
};

var carta6 = {
  foto: "https://pbs.twimg.com/media/EA-6Al_XkAEEhjU.jpg",
  nome: "Samira Close",
  atributos: {
    Ataque: 7,
    Defesa: 6,
    Lacre: 5,
  },
};

var carta7 = {
  foto: "https://pbs.twimg.com/profile_images/1354167830883794950/W5gTdKNg.jpg",
  nome: "Velha Wanessa Wolf",
  atributos: {
    Ataque: 6,
    Defesa: 3,
    Lacre: 2,
  },
};

var carta8 = {
  foto: "https://www.eastmojo.com/wp-content/uploads/2021/09/Lil-Nas-X-Montero-baby.jpg",
  nome: "Lil Nas Gravido",
  atributos: {
    Ataque: 4,
    Defesa: 5,
    Lacre: 7,
  },
};

var carta9 = {
  foto: "https://pbs.twimg.com/ext_tw_video_thumb/1300864831642152962/pu/img/bMo2Wr6xTx1oFf-H.jpg",
  nome: "Doja Cat Dorminhoca",
  atributos: {
    Ataque: 7,
    Defesa: 9,
    Lacre: 4,
  },
};

var carta10 = {
  foto: "https://i.ytimg.com/vi/bX5E0aKt4eU/hqdefault.jpg",
  nome: "Bota Po",
  atributos: {
    Ataque: 6,
    Defesa: 3,
    Lacre: 2,
  },
};

var carta11 = {
  foto: "https://pbs.twimg.com/media/E909IXmWYAQaiZH.jpg",
  nome: "Mirella sobrancelha levantada",
  atributos: {
    Ataque: 7,
    Defesa: 3,
    Lacre: 4,
  },
};

var carta12 = {
  foto: "https://conteudo.imguol.com.br/c/entretenimento/8e/2021/06/19/a-carioca-regina-rouca-73-conhecida-como-mamae-rouca-blogueira-aos-73-anos-1624134965687_v2_450x450.jpg",
  nome: "Regina Rouca SE LIGA EIN",
  atributos: {
    Ataque: 8,
    Defesa: 2,
    Lacre: 6,
  },
};

var carta13 = {
  foto: "https://midia.gruposinos.com.br/_midias/jpg/2021/01/28/ygona_moura_600x400-19430540.jpg",
  nome: "Ygona no céu",
  atributos: {
    Ataque: 3,
    Defesa: 1,
    Lacre: 6,
  },
};

var carta14 = {
  foto: "https://cdn.dicionariopopular.com/imagens/image-410.jpg",
  nome: "Elah faz o destino Delah",
  atributos: {
    Ataque: 5,
    Defesa: 2,
    Lacre: 6,
  },
};
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
];

var cartaMaquina = 0;
var cartaJogador = 0;
var pontosJogador = 0;
var pontosMaquina = 0;

function sortearCarta() {
  //Sorteia um numero da array para maquina e um para jogador
  var numeroAleatorioMaquina = parseInt(Math.random() * cartas.length);
  var numeroAleatorioJogador = parseInt(Math.random() * cartas.length);

  //enquanto os numeros forem iguais, continue sorteando até que sejam diferentes
  while (numeroAleatorioMaquina == numeroAleatorioJogador) {
    numeroAleatorioJogador = parseInt(Math.random() * cartas.length);
  }

  //pega o numero sorteado e identifica na array
  cartaJogador = cartas[numeroAleatorioJogador];
  cartas.splice(numeroAleatorioJogador, 1);
  cartaMaquina = cartas[numeroAleatorioMaquina];
  cartas.splice(numeroAleatorioMaquina, 1);

  //muda os botões
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //exibe a carta do jogador na tela
  exibeCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  //percorre todos os atributos até encontrar o verdadeiro
  for (var i = 0; i < radioAtributos.length; i++) {
    //se o atributo selecionado for verdadeiro
    if (radioAtributos[i].checked == true) {
      //retorna o atributo selecionado
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado(); //chama a função que procura o atributo que foi selecionado
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  // informa o usuario se ele ganhou, perdeu ou empatou
  if (valorCartaJogador > valorCartaMaquina) {
    pontosJogador++;
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "Você perdeu";
    pontosMaquina++;
  } else {
    elementoResultado.innerHTML = "Você empatou";
    pontosJogador++;
    pontosMaquina++;
  }

  //exibe a carta da maquina
  exibeCartaMaquina();

  //muda os botões
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProxima").disabled = false;

  //funçaõ para pontuação
  pontuacao();

  if (pontosJogador >= 4) {
    elementoResultado.innerHTML = "Parabéns você venceu o jogo!";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProxima").disabled = true;
    document.getElementById("btnSortear").disabled = true;
  }
  if (pontosMaquina >= 4) {
    elementoResultado.innetHTML = "Que triste você perdeu o jogo...";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProxima").disabled = true;
    document.getElementById("btnSortear").disabled = true;
  }
}

function proximaRodada() {
  //deixa tudo em branco
  var resultadoBranco = document.getElementById("resultado");
  resultadoBranco.innerHTML = "";
  var jogadorBranco = document.getElementById("carta-jogador");
  jogadorBranco.innerHTML = "";
  var maquinaBranco = document.getElementById("carta-maquina");
  maquinaBranco.innerHTML = "";
  var divCartas = document.getElementById("cartas");
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;

  //muda os botões
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProxima").disabled = true;
}

function exibeCartaJogador() {
  var exibeCarta = document.getElementById("carta-jogador");
  // puxa o nome do objeto
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";
  //coloca moldura do trunfo
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  //coloca a foto do objeto
  exibeCarta.style.backgroundImage = `url(${cartaJogador.foto})`;

  //enquanto houver atributos da carta no array, "imprima" na tela as opções radio
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' checked value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  //passando infos para o html
  var html = "<div id='opcoes' class='carta-status'>";

  exibeCarta.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`;

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function pontuacao() {
  var pontos = document.getElementById("pontos");
  pontos.innerHTML =
    "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";
}

function reiniciarJogo() {
  proximaRodada();
  var resultadoBranco = document.getElementById("pontos");
  resultadoBranco.innerHTML = "";
  pontosMaquina = 0;
  pontosJogador = 0;
}
