// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

// let jantar = 80;
// let garcom = jantar * 0.1;
// let total = 0;

// total = jantar + garcom;

// console.log('Valor do jantar: R$' + jantar + ',00');
// console.log(`Taxa do garçom: R$${garcom},00`);
// console.log(`Total a pagar: R$${total},00`);



// function bill(dinner) {
//   let weiter = dinner * 0.1;
//   let total = dinner + weiter;

//   console.log(`Valor do jantar: R$${dinner},00`);
//   console.log(`Taxa do garçom: R$ ${weiter},00`);
//   console.log(`Total a pagar: R$${total},00`);
// }

// bill(80);

function bill(dinner) {
  let weiter = dinner * 0.1;
  let total = dinner + weiter;

  return [dinner, weiter, total];
}

console.log(`Valor do jantar: R$${bill(80)[0]},00`);
console.log(`Taxa do garçom: R$ ${bill(80)[1]},00`);
console.log(`Total a pagar: R$ ${bill(80)[2]},00`);


// const bill = (dinner, weiter) => dinner + (dinner * (weiter / 100));


// console.log(`Valor do jantar: R$${bill(dinner)},00`);
// console.log(`Taxa do garçom: R$ ${bill},00`);
// console.log(`Total a pagar: R$${bill}`);

// console.log(bill(80, 10));




