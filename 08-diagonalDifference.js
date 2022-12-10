// HackerRank - Diagonal Difference
//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let index = 0; index < arr.length; index += 1) {
    leftDiagonal += arr[index][index];
    rightDiagonal += arr[index][arr.length - 1 - index];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference([
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]]));

  //conceito de matrix: uma array grande com x arrays menores, numero de itens tem que ser igual itens de arrays dentro p/ ficar como exemplo de cima. 

  // pegando posições: Tem que especificar linha e coluna dentro da array, por ex: numero 1 = 0,0, numero 5 = 1,1, numero 9 = 2,2

  // para pegar um index da array, dentro de uma array, se usa: ex acima:  arr[index][index]  => pega o primeiro index da array dentro da array

  //[arr.length - 1 - index];
  // pega a ultima posição do index e subtrai o valor do index para que rode pelos itens da matriz, 3, 5 e 7.

