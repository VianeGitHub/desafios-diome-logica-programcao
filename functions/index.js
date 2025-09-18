torrar("Pão Integral");
torrar("Pão Integral", "BkTest");

// o parâmetro nome possui valor padrão, quando não informado ao chamar a função
function torrar(pao, nome = "Cliente Padrão") {
  console.log("O pedido do " + nome + " saiu!");
  console.log(pao);
}

// gambiarra, definindo undefined no meio, caso queira deixar um valor não obrigatório no meio dos parâmetros
torrar2("Pão Integral", "BkTest");

function torrar2(pao, undefined, nome = "Cliente Padrão") {
  console.log("O pedido do " + nome + " saiu!");
  console.log(pao);
}

// crase(``) interpola o texto e para pegar a váriavel, use o seguinte padrão ${pass}
