class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar(tipo) {
    let ataque = "";
    if (tipo == "mago") {
      ataque = "magia";
      return console.log(`O ${tipo} atacou com ${ataque}`);
    } else if (tipo == "guerreiro") {
      ataque = "espada";
      return console.log(`O ${tipo} atacou com ${ataque}`);
    } else if (tipo == "monge") {
      ataque = "artes marciais";
      return console.log(`O ${tipo} atacou com ${ataque}`);
    } else {
      ataque = "shuriken";
      return console.log(`O ${tipo} atacou com ${ataque}`);
    }
  }
}

let heroi = new Heroi("Avangar", 20, "guerreiro");
console.log(heroi);
console.log("-------------------");
heroi.atacar("guerreiro");
console.log("-------------------");
heroi.atacar("mago");
console.log("-------------------");
heroi.atacar("monge");
console.log("-------------------");
heroi.atacar("ninja");
console.log("-------------------");
