/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/
let heroi = [
  [
    "Excalibur",
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina",
    "Ascendente",
    "Imortal",
    "Radiante",
  ],
];

let xp = 10001;
let i = 0;
while (i != xp) {
  i = xp;
  if (xp <= 1000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][1]);
  } else if (xp > 1000 && xp <= 2000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][2]);
  } else if (xp > 2000 && xp <= 5000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][3]);
  } else if (xp > 5000 && xp <= 7000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][4]);
  } else if (xp > 7000 && xp <= 8000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][5]);
  } else if (xp > 8000 && xp <= 9000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][6]);
  } else if (xp > 9000 && xp <= 10000) {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][7]);
  } else {
    console.log("O herói: " + heroi[0][0] + " é nível: " + heroi[0][8]);
  }
}
