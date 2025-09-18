// variável que guarda a função que retorna a vitória
let saldoVitorias = partidasRankeadas(200, 100);

// variável que irá guardar a função que retorna o rank e é passado como parâmetro a váriavel que possui o cálculo da vitória
let nivel = rankHeroi(saldoVitorias);

// exibe no console os dados do herói
console.log(
  `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`
);

// função que calcula as vitórias
function partidasRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

// função que verifica os ranks baseado nas vitórias
function rankHeroi(vitorias) {
  if (vitorias < 10) {
    return (rank = "Ferro");
  } else if (vitorias >= 11 && vitorias <= 20) {
    return (rank = "Bronze");
  } else if (vitorias >= 21 && vitorias <= 50) {
    return (rank = "Prata");
  } else if (vitorias >= 51 && vitorias <= 80) {
    return (rank = "Ouro");
  } else if (vitorias >= 81 && vitorias <= 90) {
    return (rank = "Diamante");
  } else if (vitorias >= 91 && vitorias <= 100) {
    return (rank = "Lendário");
  } else {
    return (rank = "Imortal");
  }
}
