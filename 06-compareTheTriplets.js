// Compare the triplets
//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true


function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let index = 0; index < a.length; index += 1) {
      if ( a[index] > b[index]){
        alice += 1;
      } else if ( a[index] < b[index]) {
        bob += 1;
      }
    }
  console.log(alice, bob);
  return[alice, bob];
}
compareTriplets([1, 2, 3], [3, 2, 1]);

// OBS: COMO COMPARA SEMPRE A MESMA POSIÇÃO DO INDEX, PODE SER UTILIZADO APENAS 1 FOR PEGANDO A POSIÇÃO DO ARRAY A, E ELE VAI USAR O MESMO VALOR DO INDEX PARA COMPARAR COM O ARRAY B. 