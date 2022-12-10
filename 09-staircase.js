// HackerRank - Staircase
//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n) {
  // Write your code here
  let element = '#';
  let inputLine = '';
  let position = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
    for (let columIndex = 0; columIndex < n; columIndex += 1){
      if (columIndex < position){
        inputLine += ' ';
      } else {
        inputLine += element;
      }
    }
    console.log(inputLine);
    inputLine = '';
    position -= 1;
  }
}
staircase(5);

// video resolução
//https://www.youtube.com/watch?v=0Uxo2vsJcWQ&list=PLylCwvNCtoakuEW0VGSD8XB56jBHbQxF8&index=11
