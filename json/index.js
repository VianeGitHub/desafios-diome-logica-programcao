// chave e valor com o objetivo de transferir dados
let invoice = {
  name: "Teste",
  age: 18,
  products: {
    0: ["Mouse", 29.99],
    1: ["Teclado", 199.99],
  },
  taxes: 10,
};

generateInvoice(invoice);

function generateInvoice(invoice) {
  console.log(`Name: ${invoice.name}`);
  console.log(`Age: ${invoice.age}`);
  console.log("-----------------");

  for (let index in invoice.products) {
    let [productName, productPrice] = invoice.products[index];
    console.log(`- ${productName}: R$ ${productPrice}`);
  }
}
